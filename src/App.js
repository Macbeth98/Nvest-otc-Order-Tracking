import React, { Component } from "react";
// import SectionOne from '../src/components/sectionone/SectionOne'
// import SectionTwo from '../src/components/sectiontwo/SectionTwo'
// import Checkout from '../src/components/sectionthree/Checkout'
// import Payment from '../src/components/sectionthree/Payment'
// import Destination from '../src/components/sectionthree/Destination'
// import Procurement from '../src/components/sectionthree/Procurement'
// import Fulfilment from '../src/components/sectionthree/Fulfilment'
// import LiveQuote from '../src/components/sectionthree/LiveQuote'
import OTCMain from "./components/OTC/Main";
import VaultMain from "./components/Vault/Main";
import TokenMain from "./components/Token/Main";
import Notfound from "./components/ErrorPage/404.js";
import Details from "./components/SearchPage/chart.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Switch>
            <Route exact path="/" render={props => <Details />} />
            <Route
              exact
              path="/otc/:txn_id"
              render={props => <OTCMain {...props} />}
            />

            <Route
              exact
              path="/vault/:txn_id"
              render={props => <VaultMain {...props} />}
            />

            <Route
              exact
              path="/token/:txn_id"
              render={props => <TokenMain {...props} />}
            />

            <Route
              exact
              path="/404"
              render={props => <Notfound {...props} />}
            />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}
