import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="headerContainer header">
            <div className="logoContainer">
                <img src={logo} alt="" />
                <div className="text">
                    <span className="address-text">Address</span><br />
                    <span className="address-text book">Book</span>
                </div>
            </div>
        </header>
                    
                        )
    }
}
