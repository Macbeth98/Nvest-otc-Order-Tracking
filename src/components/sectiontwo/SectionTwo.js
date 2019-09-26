import React, { Component } from 'react'
import Img1 from '../../Images/ss1.jpg'
import Img2 from '../../Images/ss2.jpg'
import '../sectiontwo/SectionTwo.css'
export default class SectionTwo extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div className="row">
      <div className="col-md-8 bgclr shad">
      <a href="https://buygxt.gxbroker.com/brokerage/1" target="_blank">
      <img className="img-wid" src={Img1}></img>
      </a>
      </div>
      <div className="col-md-4 pad-img shad" target="_blank">
      <a href=" www.whatisgx.com">
      <img className="img-wid" src={Img2}></img>
      </a>
      </div>      
      </div>

        
      </div>
    )
  }
}
