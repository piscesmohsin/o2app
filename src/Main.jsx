import React from 'react'
import Roms from './components/Roms'
import { Switch, Route } from "react-router-dom";
import Team from './components/Team'
import Kernals from './components/Kernals';

import Error from './components/Error';
import Contact from './components/Contact';


const Main = () => {
    return (
        <div>

            <Switch>
          <Route exact path="/" component={Roms} />
          <Route path="/Team" component={Team} />
          <Route path="/Kernals" component={Kernals} />
          <Route path="/Contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        </div>
    )
}

export default Main
