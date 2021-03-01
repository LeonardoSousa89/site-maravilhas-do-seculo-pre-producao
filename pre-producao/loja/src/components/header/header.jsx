import React, { Component } from 'react'
import './header.css'

import {Link} from 'react-router-dom'
import Logo from '../../assets/ms3.png'

export default class Header extends Component   {

    state = {
        icon:false
    }

    render()    {
        return(
            <div>

                <nav className="componetLargeDevice">
                    <Link className="componentLink" to="/"><img className="logo"  src={Logo} /></Link>
                    <Link className="componentLink" to="/"><h3>Home</h3></Link>
                    <Link className="componentLink" to="/fale-conosco"><h3>Fale conosco</h3></Link>
                    <Link className="componentLink" to="/sobre"><h3>Sobre</h3></Link>
                    <a className="componentLink" href="https://www.timol.com.br/prodLista.aspx"  target="_blank"><h3>Loja</h3></a>
                </nav>


                
            
                {

                    this.state.icon === false?
                    (
                        <nav className="componentLitleDeviceTog">
                            <div className="componentHeader">
                                <Link className="componentLinkLogo" to="/"><img className="logoLittle"  src={Logo} /></Link>
                                <h1 className="componentTog" 
                                 onClick={()=>this.setState({icon:true})}>&#9660;</h1>   
                            </div>
                        </nav> 
                    )
                    :
                    (
                        <nav className="componentLitleDeviceClose">
                            <div className="componentHeader">
                            <Link className="componentLinkLogo" to="/"><img className="logoLittle"  src={Logo} /></Link>
                            <h1 className="componentClose" 
                                 onClick={()=>this.setState({icon:false})}>&#9650;</h1> 
                            </div>
                            <ul className="componentPages"> 
                                <ul className="componentLinkHome"> <Link className="LinkHome" to="/"><h3  onClick={()=>this.setState({icon:false})}>Home</h3></Link></ul>
                                <ul className="componentLinkFormulario"> <Link className="LinkFaleConosco" to="/fale-conosco"><h3 onClick={()=>this.setState({icon:false})}>Fale conosco</h3></Link></ul>
                                <ul className="componentLinkSobre">    <Link className="LinkSobre" to="/sobre"><h3 onClick={()=>this.setState({icon:false})}>Sobre</h3></Link></ul>
                                <ul className="componentLinkLoja"> <a className="LinkLoja" href="https://www.timol.com.br/prodLista.aspx" target="_blank"><h3 onClick={()=>this.setState({icon:false})}>Loja</h3></a></ul>
                            </ul>
                        </nav> 
                    )

                }



            </div>
        )
    }
}
