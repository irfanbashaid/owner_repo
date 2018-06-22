/*
  Copyright 2017 ZeroEx Intl.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/
pragma solidity ^0.4.18;
 
import "./StandardToken.sol";

/**
 * @title Unlimited Allowance Token
 * @dev Unlimited allowance for exchange transfers. Modfied the base zeroEX code with latest compile features
 * @author Dinesh
 */
contract UnlimitedAllowanceToken is StandardToken {
    
    //  MAX_UINT represents an unlimited allowance
    uint256 constant MAX_UINT = 2**256 - 1;
    
    /**
     * @dev ERC20 transferFrom, modified such that an allowance of MAX_UINT represents an unlimited allowance.
     * @param _from Address to transfer from
     * @param _to Address to transfer to
     * @param _value Amount to transfer
     * @return Success of transfer
     */ 
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {
        uint allowance = allowed[_from][msg.sender];
        require(balances[_from] >= _value);
        require(allowance >= _value);
        require(balances[_to].add(_value) >= balances[_to]);
        
        balances[_to] = balances[_to].add(_value);
        balances[_from] = balances[_from].sub(_value);
        if (allowance < MAX_UINT) {
            allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);
        }  
        Transfer(_from, _to, _value);
        
        return true;
    }
}