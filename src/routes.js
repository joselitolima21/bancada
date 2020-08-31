import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/home';
import Option1 from './pages/option1';
import Option2 from './pages/option2';
/*import Teste from './pages/teste';*/
import Work from './pages/work';

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/option1' exact component={Option1}/>
                <Route path='/option2' exact component={Option2}/>
                <Route path='/work' exact component={Work}/>
            </Switch>
        </HashRouter>
    )
};
