import React, { Component } from 'react'
import Error from './notfound.svg'
import './404.css'
export default class Notfound extends Component {
  state = {
    cards: [{ icon: 'fa fa-window-restore', heading: 'Apps',linktitle:'Lets go', link: '#' },
    { icon: 'fa fa-file-o', heading: 'Docs',linktitle:'Learn more', link: '#' },
    { icon: 'fa fa-user-o', heading: 'Contact Us', linktitle:'Ask a question', link: '#' },
    { icon: 'fa fa-lightbulb-o', heading: 'Features', linktitle:'Learn more', link: '#' },
    { icon: 'fa fa-laptop', heading: 'Demo', linktitle:'See it in action', link: '#' },
    { icon: 'fa fa-comments-o', heading: 'Blog', linktitle:'Visit the blog', link: '#' },
    { icon: 'fa fa-search', heading: 'Case studies', linktitle:'Learn more', link: '#' },
    { icon: 'fa fa-line-chart', heading: 'Pricing', linktitle:'Or use us FREE', link: '#' }]

  }
  render() {
    return (
      <div className="ErrorBody">
        <center>
          <img src={Error} style={{ width: "400px", height: "400px" }} />

          <h2>Whoops! We couldn't find what you're looking for.</h2>
          <h5>A task was created to fix this.</h5>

          <div className="unnamed px-4 mb-5">
            <h3>404
                   <i class="fa fa-flag" aria-hidden="true" style={{ float: "right", color: "black", marginTop: "5px" }}></i></h3>

          </div>
          <h5>In the meantime,you may have been looking for one of the following:</h5>
        </center>
        <div className="container">
          <div className="row">
          {this.state.cards.map(cardd => (
            <div className="col-md-3 mb-3 d-flex justify-content-center">
              <div class="card py-4" style={{ width: "15rem", color: "black",textAlign:"center"}}>
                <i className={cardd.icon} aria-hidden="true" style={{ fontSize: "3rem",display:"flex",justifyContent:"center" }}></i>
                <div class="card-body">
                  <h5 class="card-title">{cardd.heading}</h5>
          <a href={cardd.link} style={{textDecoration:"none"}}><p class="card-text">{cardd.linktitle}</p></a>

                </div>
              </div>
            </div>
          ))}

          </div>
        </div>

      </div>
    )
  }
}
