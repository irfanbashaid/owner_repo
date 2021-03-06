pragma solidity ^0.4.0;
contract High_low
{
    address public admin;
    uint256 public game_id;
    
    function High_low() public payable
    {
        admin=msg.sender;
    }
    
    function() public payable {}
    
    address[] public broker_addresses;
    
    event Transfer_amount(address _sender,address _receiver,uint256 _transfer_amount);
    
    struct  broker
    {
        uint256 stake_amount;
    }
    mapping(address=>broker) public broker_map;
    
    struct better
    {
        uint256 bet_amount; 
        address better_address;
        bool option;
    }
    mapping(uint256=>better[]) public game_id_map_trader;

    mapping(uint256=>address) public game_id_map_broker;//key:game_id
    
    mapping(uint256=>uint256) public gamers_map;//key:game_id value:gamers how many gamers playing this game
    
    struct game_set
    {
        string stock_name;
        uint256 strike_price;
        uint256 expiry_time;
        uint256 game_ids;
    }
    mapping(address=>mapping(uint256=>game_set)) public game_set_map;//key1:broker_address key2:game_number
    
    mapping(address=>uint256) public game_number;//key:broker value:game_number
    
    mapping(address=>bool) public valid_trader;//to accept as valid trader
    
    mapping(address=>uint256) public maximum_expiry_time_of_bet;
    
    function check_broker() public constant returns(bool) // is_broker
    {
        return broker_map[msg.sender].stake_amount!=0;
    }
    
    function add_broker() public payable returns (bool) // is_added
    {
         //require(input_amount==msg.value && input_amount>0);
         broker_map[msg.sender].stake_amount=msg.value;
         admin.transfer(msg.value);
         Transfer_amount(msg.sender,admin,msg.value);
         return true;
    }
    
    function broker_set_game(string stock_name,uint256 strike_price,uint256 expiry_time) public payable returns(bool,uint256) // newbet, new_game_id
    {
        require(expiry_time>now);
        game_set_map[msg.sender][game_number[msg.sender]].stock_name=stock_name;
        game_set_map[msg.sender][game_number[msg.sender]].strike_price=strike_price;
        game_set_map[msg.sender][game_number[msg.sender]].expiry_time=expiry_time;
        game_set_map[msg.sender][game_number[msg.sender]].game_ids=game_id;
        broker_addresses.push(msg.sender);
        if(maximum_expiry_time_of_bet[msg.sender]<expiry_time)
        maximum_expiry_time_of_bet[msg.sender]=expiry_time;
        game_id_map_broker[game_id]=msg.sender;
        game_id++;
        game_number[msg.sender]++;
        return (true,(game_id-1));
    }
    
    function add_broker_stake(uint256 input_amount) public payable returns(bool,uint256)
    {
        require(input_amount==msg.value && input_amount>0);
        broker_map[msg.sender].stake_amount+=input_amount;
        Transfer_amount(msg.sender,admin,msg.value);
        return (true,broker_map[msg.sender].stake_amount);
    }
    
    function check_trader() public constant returns(bool)
    {
        return valid_trader[msg.sender]==true;
    }
    
    function betting_check(uint256 game_id,uint256 input_amount) public constant returns(bool)
    {
        return (input_amount>0 && broker_map[game_id_map_broker[game_id]].stake_amount>=(90*input_amount)/100);
    }
    
    function betting(uint256 game_id,uint256 input_amount,bool option) public payable returns(bool) // is_bet_success 
    {
        require(input_amount==msg.value && input_amount>0);
        gamers_map[game_id]++;
        broker_map[game_id_map_broker[game_id]].stake_amount-=(90*msg.value)/100;
        if(valid_trader[msg.sender]==false)
        valid_trader[msg.sender]=true;//new trader
        game_id_map_trader[game_id][gamers_map[game_id]].bet_amount=msg.value;
        game_id_map_trader[game_id][gamers_map[game_id]].better_address=msg.sender;
        game_id_map_trader[game_id][gamers_map[game_id]].option=option;
        Transfer_amount(msg.sender,admin,msg.value);
        return true;
    }
    function admin_setting_result_and_distribute_money(uint256 game_id,uint256 result_options) public payable returns(bool)// is_result_setted_and_prize_distributed 
    {
        require(admin==msg.sender);
        require(game_set_map[game_id_map_broker[game_id]][game_number[game_id_map_broker[game_id]]].expiry_time<now);
        require(result_options<3 && result_options>=0);
        bool result_option;
        uint256 index=gamers_map[game_id];
        if(result_options==2)
        {
            //draw
            while(gamers_map[game_id]>0)
            {
                broker_map[game_id_map_broker[game_id]].stake_amount+=(90*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100;
                game_id_map_trader[game_id][gamers_map[game_id]].better_address.transfer(game_id_map_trader[game_id][gamers_map[game_id]].bet_amount);
                Transfer_amount(admin,game_id_map_trader[game_id][gamers_map[game_id]].better_address,game_id_map_trader[game_id][gamers_map[game_id]].bet_amount);//trader transfer
                gamers_map[game_id]--;
            }
            gamers_map[game_id]=index;
            return true;
        }
        else if(result_options==1)
        {
            //set high as result_option
            result_option=true;
        }
        else if(result_options==0)
        {
            //set low as result_option
            result_option=false;
        }
        while(gamers_map[game_id]>0)
        {
            if(result_option==game_id_map_trader[game_id][gamers_map[game_id]].option)
            {
                game_id_map_trader[game_id][gamers_map[game_id]].better_address.transfer((189*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100);
                Transfer_amount(admin,game_id_map_trader[game_id][gamers_map[game_id]].better_address,(189*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100);//transfer amount to trader
            }
            else
            {
                broker_map[game_id_map_broker[game_id]].stake_amount+=(199*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100;
            }
            gamers_map[game_id]--;
        }
        gamers_map[game_id]=index;
        return true;
    }
    function trader_increase_bet_amount(uint256 game_id,uint256 input_amount) public payable returns(bool)// is_increase_success
    {
        //initially UI needs to call betting_check()
        require(input_amount==msg.value);
        game_id_map_trader[game_id][gamers_map[game_id]].bet_amount+=msg.value;
        broker_map[game_id_map_broker[game_id]].stake_amount-=msg.value;
        Transfer_amount(msg.sender,admin,msg.value);
        return true;
    }
    function trader_cancel_bet_and_widthdraw(uint256 game_id) public payable returns(bool)// is_withdraw_success
    {
        require(game_set_map[msg.sender][game_number[msg.sender]].expiry_time- 1 minutes > now);
        game_id_map_trader[game_id][gamers_map[game_id]].better_address.transfer((95*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100);
        broker_map[game_id_map_broker[game_id]].stake_amount+=(95*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100;
        Transfer_amount(admin,msg.sender,(95*game_id_map_trader[game_id][gamers_map[game_id]].bet_amount)/100);
        return true;
    }
    function broker_de_registration() public payable returns(bool) // is_de_registered
    {
        require(maximum_expiry_time_of_bet[msg.sender] + 1 minutes < now);
        msg.sender.transfer(broker_map[msg.sender].stake_amount);
        Transfer_amount(admin,msg.sender,broker_map[msg.sender].stake_amount);
        return true;
    }
    function broker_withdraw_amount_from_stack(uint256 input_amount_to_withdraw) public payable returns(bool) // is_de_registered
    {
        require(input_amount_to_withdraw>0 && input_amount_to_withdraw < broker_map[msg.sender].stake_amount-1);
        msg.sender.transfer(input_amount_to_withdraw);
        Transfer_amount(admin,msg.sender,input_amount_to_withdraw);
        return true;
    }
}