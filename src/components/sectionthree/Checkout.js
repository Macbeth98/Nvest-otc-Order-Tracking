import React, { Component } from 'react'
import {Card,} from 'react-bootstrap';
import '../sectionthree/SectionThree.css'

export default class SectionThree extends Component {
  state = 
  {
    frist: true,
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
                  <div style={{padding:"35px" , boxShadow: "4px 4px 8px #dcdcdc"}}> <b>Checkout</b>
                  {this.state.frist ? <i class="fa fa-check-circle F-T-N fafastyle"></i> : null}
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
