import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Switch } from 'react-router'
import NavBar from './navbar'
import Home from './home'
import Tech from './tech'
import Literal from './literal'
import Trans from './trans'

export default class App extends Component {
    render() {
        return (
            <div className='sjwjames-blog' id='sjwjamesApp'>
                <NavBar />
                <Switch>
                    <Route path="/tech" component={Tech} />
                    <Route path="/literal" component={Literal} />
                    <Route path="/trans" component={Trans} />
                    <Route component={Home} />
                </Switch>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {

//     }
// }

// export default connect(mapStateToProps)(App)