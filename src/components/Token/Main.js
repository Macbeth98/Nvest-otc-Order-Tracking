import React, { Component } from 'react';
import SectionOne from './sectionone/SectionOne'
import SectionTwo from './sectiontwo/SectionTwo'
import Checkout from './sectionthree/Checkout'
import Payment from './sectionthree/Payment'
import Destination from './sectionthree/Destination'
import Procurement from './sectionthree/Procurement'
import Fulfilment from './sectionthree/Fulfilment'
import LiveQuote from './sectionthree/LiveQuote'
import fetch from "../../fetchurl";
import axios from "axios";

export default class Main extends Component {

  state: {
    name: "",
    pid: "",
    amt_received: "",
    quote: "",
    final_quote: 0,
    dest_auth_address: "",
    dest_address: "",
    procurement: "",
    txn_receipt: "",
    broker_id: ''
  }

  async componentWillMount(){
    console.log(this.props.match.params.txn_id);
    var res = await axios.get(fetch.url+"gxt/get_token_txn?_id="+this.props.match.params.txn_id);
    //console.log(res.data);
    var txn = res.data;
    if(txn){
    await this.setState({
      name: txn.name? txn.name: txn.first_name?txn.first_name+ " "+ txn.last_name: "",
      pid: txn.pid,
      amt_received: txn.amt_received?txn.amt_received: 0,
      quote: txn.num_of_tokens,
      final_quote: txn.num_of_tokens? txn.num_of_tokens+ " GXT": 0,
      dest_auth_address: txn.dest_auth_address? txn.dest_auth_address: "",
      dest_address: "",
      procurement: txn.procurement?txn.procurement: "Yes",
      txn_receipt: txn.txn_receipt? txn.txn_receipt: "",
      broker_id: txn.affiliate_id
    })
    } else window.location.replace("/404")
  }

  render (){
    return (
      <div className="mb-5">
        {this.state &&  this.state.broker_id.length>0?(<div>
       <SectionOne name={this.state.name} broker_id={this.state.broker_id} />
       <SectionTwo  />
       <Checkout/>
       <Payment pid={this.state.pid} amt_received={this.state.amt_received} />
       <LiveQuote final_quote={this.state.final_quote} />
       <Destination dest_address={this.state.dest_address} dest_auth_address={this.state.dest_auth_address} />
       <Procurement procurement={this.state.procurement}/>
       <Fulfilment txn_receipt={this.state.txn_receipt}/>
       </div>): ""}
      </div>
    )
  }
}
