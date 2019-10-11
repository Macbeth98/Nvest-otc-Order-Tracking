import React, { Component } from 'react'
import { Button,ButtonToolbar} from 'react-bootstrap';
import '../sectionone/SectionOne.css'



export default class SectionOne extends Component {
  render() {
    return (

      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8">
        <span className="head-sty">{this.props.name}, </span>
        </div>
        <div className="col-md-4">
        <ButtonToolbar className="btn-algn">
          <a href={"https://buygxt.gxbroker.com/checkout/"+this.props.broker_id} target="_blank">
        <Button className="btnstyle" variant="primary">Place New Order</Button>
        </a>
        </ButtonToolbar>
        </div>
        <p className="ml-3">Here is the GXReceipt for your transaction</p>
</div>
        </div>

    )
  }
}
