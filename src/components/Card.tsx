import React, { Component } from 'react'

export default class Card extends Component {
    openMovie() {
        window.open('./player.html');
    }
    render() {
        return (
            <div onClick={this.openMovie} className="card">
                <img draggable={false} src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/BbNvKCuEF4SRzFXR16aK6ISFtR.jpg"/>
            </div>
        )
    }
}
