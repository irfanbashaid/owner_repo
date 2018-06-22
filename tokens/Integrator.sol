pragma solidity ^0.4.18;

contract Integrator {
    // stores authorized integrators addresses
    mapping(address => bool) public authorized; 
    address public approver;

     /******************************     Events    **************************/
    event LogAuthorizedAddressAdded(address indexed target, address indexed caller);
    event LogAuthorizedAddressRemoved(address indexed target, address indexed caller);
    event LogApproverChanged(address indexed oldApprover, address indexed newApprover);
    
    /******************************     Modifiers    **************************/
    modifier onlyAuthorized {
        require(authorized[msg.sender]);
        _;
    }
 
    modifier onlyApprover {
        require(msg.sender == approver);
        _;
    }
   
    /***************************** Functions **********************************/
    /**
     * @dev constructor sets the approver
     */
    function Integrator() public {
        approver = msg.sender;
    }
    
    /**
     * @dev function for changing approver
     * @param newApprover new approver details 
     */
    function changeApprover(address newApprover) internal onlyApprover {
        if (newApprover != address(0)) {
            approver = newApprover;
            LogApproverChanged(approver, newApprover);
        }
    } 
    
     
    /**
     * @dev Authorizes an address.
     * @param appIntegrator Address to authorize.
     */
    function addAuthorizedAddress(address appIntegrator) public onlyApprover 
    {
        authorized[appIntegrator] = true;   
        LogAuthorizedAddressAdded(appIntegrator, msg.sender);
    } 
    
    /**
     * @dev Removes authorizion of an address.
     * @param appIntegrator Address to remove authorization from.
     */
    function removeAuthorizedAddress(address appIntegrator) public onlyApprover 
    {
        authorized[appIntegrator] = false; 
        delete authorized[appIntegrator];  
        LogAuthorizedAddressRemoved(appIntegrator, msg.sender);
    }  
}