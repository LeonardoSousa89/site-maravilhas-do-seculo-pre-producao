import React , { Component } from 'react'
import {  BrowserRouter, Route, Switch  } from 'react-router-dom'
import './App.css'


import Header from './components/header/header'
import Home from './components/home/home'
import FaleConosco from './components/fale/fale'
import Sobre from './components/sobre/sobre'

export default class App extends Component{

    render() {
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <Switch>
                            <Route  exact={true} path="/" component={Home}/>
                            <Route  exact={true} path="/fale-conosco" component={FaleConosco}/>
                            <Route  exact={true} path="/sobre" component={Sobre}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
 