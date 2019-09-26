import React, { Component } from 'react'
import { Card, } from 'react-bootstrap';
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
                  <div style={{padding:"35px" , boxShadow: "4px 4px 8px #dcdcdc"}}> <b>Destination Authorization</b>
                  <span className="F-T-N hidden">{this.props.dest_auth_address.length>0? this.props.dest_auth_address: this.props.dest_address }</span>
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
