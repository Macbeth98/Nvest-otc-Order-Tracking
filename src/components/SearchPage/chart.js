import React,{Component} from 'react';
import axios from 'axios';
import './chart.css'
import fetch from "../../fetchurl.js";
import { Redirect } from "react-router-dom";
import {Form} from 'react-bootstrap';

export default class Details extends Component{
    state = {
        _id: "",
        success: null,
        check: false
      }

  handleSearch = async ()=>{
    console.log(this.state._id);
    if(this.state._id.length===24){
    var res = await axios.post(fetch.url+"get_btc_txn", {_id: this.state._id});
    console.log(res);
    if(res.data && res.data._id){
      window.location.replace("/otc/"+this.state._id);
      //this.setState({success: true, check: true})
    } else {
      window.location.replace("/404");
      //this.setState({success: false, check: true})
    }
  } else this.setState({success: false, check: true})
  }

    render(){
        return(

            <div className="detailsBox" >
        {/* Graph Started */}
        {this.state.check?(
          <div>
        {this.state.success?(
          <Redirect to={`/otc/${this.state._id}`} />
        ): (<Redirect to={`/404`} />)}
        </div>): ""}
<div className="parent" style={{height:"100vh",backgroundColor:"#117ABF"}}>
<div className="contentsection" style={{height:"60vh"}}>
<div className="parentofcontent" style={{textAlign:"center"}}>
<h1 style={{fontSize:"3.5rem"}}>GXReceipt</h1>
<h5 className="mb-5">Track Over The Counter Cryptocurrency Trades</h5>

<form onSubmit={(e)=>{e.preventDefault(); this.handleSearch()}}>
      <div class="input-group">
   <span style={{max_width: '10px' }}>
    <Form.Control as="select" >
      <option>OTC</option>
      <option>BTC</option>
    </Form.Control>
    </span>
        <input type="text" class="form-control" id="validationTooltipUsername" placeholder="Enter Receipt ID" aria-describedby="validationTooltipUsernamePrepend" onChange={(e)=>{
            this.setState({_id: e.target.value})
          }} required/>
         <div class="input-group-prepend">
         <button type="button" class="btn btn-primary" style={{backgroundColor:"white",color:"#117ABF"}} onClick={this.handleSearch}>Search</button>
        </div>

      </div>
      </form>
	  </div>
</div>
        <div id="chartdiv" style={{ width: "100%", height: "40vh", position:"relative"}} ></div >
		</div>

        {/* Graph Ended */}


      </div >
        )
    }
}
