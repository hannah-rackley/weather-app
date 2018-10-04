import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import SmartHomepage from './Components/HomePage'

const Router = props => {
    return (
       <HashRouter>
           <div>
               <Switch>
                   <Route exact path='/' component={SmartHomepage} />
                   {/* <Route exact path='/location/:id' component={LocationScreen} />
                   <Route exact path='/location/day/:id' component={LocationDayScreen} /> */}
               </Switch>
           </div>
       </HashRouter>
    )
}

let SmartRouter = connect(state => state)(Router);

export default SmartRouter;