pragma solidity ^0.4.18;
 
import "./SafeMath.sol";
import "./UnlimitedAllowanceToken.sol";
import "./Ownable.sol";

/**
 * @title Tokenized Ether
 * @dev ERC20 tokenization for Ether to allow exchange transfer and smoother handling of ether.
 *      Modified the base zerox contract to use latest language features and made it more secure
 *      and fault tolerant
 * @author Dinesh
 */
contract EtherToken is UnlimitedAllowanceToken, Ownable{
    using SafeMath for uint256; 
    
    string constant public name = "Ether Token";
    string constant public symbol = "WXETH";
    uint256 constant public decimals = 18; 
    
    // triggered when the total supply is increased
    event Issuance(uint256 _amount);
    
    // triggered when the total supply is decreased
    event Destruction(uint256 _amount);
    
    // in case of emergency, block all transactions
    bool public enabled;
    
    // In case emergencies, all the funds will be moved to a safety Wallet. Normally Owner of the contract
    address public safetyWallet; 
    
    /** 
     * @dev constructor
     */
    function EtherToken() public {
        enabled = true;
        safetyWallet = msg.sender;
    }
    
    /**
     * @dev function to enable/disable contract operations
     * @param _disableTx tell whethere the tx needs to be blocked or allowed
     */
    function blockTx(bool _disableTx) public onlyOwner { 
        enabled = !_disableTx;
    }
    
    /**
     * @dev fucntion only executes if there is an emergency and only contract owner can do it 
     *      CAUTION: This moves all the funds in the contract to owner's Wallet and to be called
     *      most extreme cases only
     */
    function moveToSafetyWallet() public onlyOwner {
        require(!enabled); 
        require(totalSupply > 0);
        require(safetyWallet != 0x0);
        
        //Empty Total Supply
        uint256 _amount = totalSupply;
        totalSupply = totalSupply.sub(totalSupply); 
        
        //Fire the events
        Transfer(safetyWallet, this, totalSupply);
        Destruction(totalSupply);
        
        // send the amount to the target account
        safetyWallet.transfer(_amount);  
    }
    
    /** 
     * @dev fallback function can be used to get ether tokens foe ether
     */
    function () public payable {
        require(enabled);
        deposit(msg.sender);
    }
    
    /**
     * @dev function Buys tokens with Ether, exchanging them 1:1. Simliar to a Deposit function
     * @param beneficiary is the senders account
     */
    function deposit(address beneficiary) public payable {
        require(enabled);
        require(beneficiary != 0x0);  
        require(msg.value != 0);  
        
        balances[beneficiary] = balances[beneficiary].add(msg.value);
        totalSupply = totalSupply.add( msg.value);
        
        //Fire th events
        Issuance(msg.value);
        Transfer(this, beneficiary, msg.value);
    }
    
    /**
     * @dev withdraw ether from the account
     * @param _amount  amount of ether to withdraw
     */
    function withdraw(uint256 _amount) public {
        require(enabled);
        withdrawTo(msg.sender, _amount);
    }
    
    /**
     * @dev withdraw ether from the account to a target account
     * @param _to account to receive the ether
     * @param _amount of ether to withdraw
     */
    function withdrawTo(address _to, uint _amount) public { 
        require(enabled);
        require(_to != 0x0);
        require(_amount != 0);  
        require(_amount <= balances[_to]); 
        require(this != _to);
        
        balances[_to] = balances[_to].sub(_amount);
        totalSupply = totalSupply.sub(_amount); 
        
        //Fire the events
        Transfer(msg.sender, this, _amount);
        Destruction(_amount);
        
         // send the amount to the target account
        _to.transfer(_amount);  
    }
}