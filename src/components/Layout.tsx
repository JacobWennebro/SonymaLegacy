import React, { Component } from 'react'
import AlertIcon from 'mdi-react/AlertIcon'

import '../sass/main.scss'

export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="bar">
            
                </div>
                <div className="ui">
                    <div className="left-sidebar">
                        <h1>Sonyma</h1>
                        <div className="buttons">
                            <a href="#">
                                <img src="./content/apps.svg"/>
                            </a>
                            <a href="#/settings">
                                <img src="./content/store.svg"/>
                            </a>
                        </div>
                    </div>
                    <div className="page">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
