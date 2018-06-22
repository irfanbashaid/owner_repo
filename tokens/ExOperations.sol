pragma solidity ^0.4.18;
 
import "./SafeMath.sol";
import "./Ownable.sol";

/**
 * @title ExOperations - list of exchange operations  
 * @dev It allows us to trade protfolios with 0 latency
 * @author Dinesh
 */
contract ExOperations is Ownable { 
    using SafeMath for uint256; 
   
    // Enumeration to track the exchange status 
    enum ExcahngeStatus { Started, Halted, Killed, Closed }
    ExcahngeStatus public exStatus;
    
    // timestamp of the exchange when the last action performed
    uint256 public exLastActionTime; 
    
    // modifier to mention that Exchange is Operational
    modifier validExOperation () { 
        require(exStatus == ExcahngeStatus.Started);
        _;
    }
   
   /**
     * @dev Constructor Sets the default exchnage status
     */
    function ExOperations() public {
        exStatus = ExcahngeStatus.Closed;
    }  
    
    /**
     * @dev function Starts the Exchange Operation
     * @param _startTime specifies when to open the exchange 
     */
    function startExchange(uint256 _startTime) public onlyOwner {
        require(exStatus != ExcahngeStatus.Killed);
        require(exStatus != ExcahngeStatus.Started);
        require(_startTime >= uint256(now)); 
        
        exLastActionTime = _startTime;
        exStatus = ExcahngeStatus.Started;
    }
    
    /**
     * @dev function Closes the Exchange Operation 
     */
    function closeExchange() public onlyOwner {
        require(exStatus != ExcahngeStatus.Killed);
        require(exStatus == ExcahngeStatus.Started);
        require(exLastActionTime <= uint256(now)); 
        
        exLastActionTime = uint256(now);
        exStatus = ExcahngeStatus.Closed;
    }
    
    /**
     * @dev function Pauses the Exchange Operations till we start it again 
     */
    function HaltExchange() public onlyOwner {
        require(exStatus != ExcahngeStatus.Killed);
        require(exStatus != ExcahngeStatus.Halted);
        require(exStatus == ExcahngeStatus.Started);
        require(exLastActionTime <= uint256(now)); 
        
        exLastActionTime = uint256(now);
        exStatus = ExcahngeStatus.Halted;
    }
    
     /**
     * @dev function Kills the contract. Its a soft kill, will not destroy the contract
     *      Once killed, there is no way to recover it... But any way some meta data can be seen 
     */
    function KillExchange() public onlyOwner {
        require(exStatus != ExcahngeStatus.Killed); 
        require(exLastActionTime <= uint256(now)); 
        
        exLastActionTime = uint256(now);
        exStatus = ExcahngeStatus.Killed;
    }
}