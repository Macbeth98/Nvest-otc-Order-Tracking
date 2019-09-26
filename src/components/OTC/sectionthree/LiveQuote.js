import React, { Component } from 'react'
import { Accordion, Card, Dropdown } from 'react-bootstrap';
import '../sectionthree/SectionThree.css'

export default class SectionThree extends Component {
  state =
  {
    frist: true
  }
  
  frist = () => {
    this.setState({
      frist: !this.state.frist
    }
    )
  }
  render() {
    return (
      <> <div class="container C-class">
          <div className="row mx-0">
          <div className="col-md-12 pt-3 accor" >
              <div>
                <Card>
                  <div style={{padding:"35px" , boxShadow: "4px 4px 8px #dcdcdc"}}> <b>Live Quote</b>
                  {this.props.final_quote<=0 ?
                  <span className="F-T-N hidden">Pending...</span> :  <span className="F-T-N ">{this.props.final_quote}</span>}
                  </div>
                </Card>
            </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
