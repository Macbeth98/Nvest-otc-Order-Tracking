import React, { Component } from 'react'
import { Accordion, Card, Dropdown } from 'react-bootstrap';
import '../sectionthree/SectionThree.css'
import '../sectionthree/evolution.css'
export default class SectionThree extends Component {
  state = {
    frist: false,
    amt: "Yet to be Received!"
  }
  frist = () => {
    this.setState({
      frist: !this.state.frist
    }
    )
  }

  componentDidMount(){
    if(this.props.amt_received>0){
      this.setState({first: true, amt: this.props.amt_received})
    } else this.setState({first: false})
  }
  render() {
    return (
      <> <div class="container C-class">
          <div className="row mx-0">
           <div className="col-md-12 pt-3 accor" >
              <Accordion >
                <Card>
                  <Accordion.Toggle onClick={this.frist} as={Card.Header} eventKey={this.state.frist ? "1" : "0"}> <b>Payment Authorization</b>
                  <i class="fas fa-chevron-down F-T-N"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <div className="container" >
                      <div style={{position:"relative"}}>
                        <div className="row">
                        <span className="crcl"> 1</span>
                        <span className="ml-3">Payment Received</span>
                        {this.state.frist ? null:<i class="fa fa-check-circle F-T-N fafastyle payrec"></i> }
                        </div>
                        <div className="timeline"></div>
                        </div>
                        <div style={{position:"relative", paddingTop :"57px"}}>
                        <div className="row">
                        <span className="crcl"> 2</span>
                        <span className="ml-3">Method</span>
                        <div className="radioCurrency row" style={{marginLeft:"auto"}}>
                        <div className="form-check selection p-2">
                        <input name="registrationFor" value="TD Canada Trust" type="radio" required/>
                        {this.props.pid==="wire_transfer"? (
                        <label htmlFor="tdcanadatrust">
                            <div className="radioBox">
                                <p className="m-0">Etransfer</p>
                            </div>
                        </label>
                        ): ""}
                </div>
                <div className="form-check selection p-2">
                        <input name="registrationFor" value="TD Canada Trust" type="radio" required/>
                        {this.props.pid==="bank_transfer"? (
                        <label htmlFor="tdcanadatrust">
                            <div className="radioBox">
                            <p className="m-0">Bank Transfer</p>
                            </div>
                        </label>
                        ): ""}
                </div>
    </div>;
    </div>
    <div className="timeline1"></div>
    </div>
    <div style={{position:"relative", paddingTop :"57px"}}>
    <div className="row">
    <span className="crcl"> 3</span>
    <span className="ml-3">Amount (USD)</span>
    <span className="lef">{this.state.amt}</span>
    </div>
    </div>
    </div>
                  </Card.Body>
                  </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
          </div>
        </div>
      </>
    )
  }
}
