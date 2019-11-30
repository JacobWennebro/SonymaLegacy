import React, { Component } from 'react'

export default class movies extends Component<{}, { movies: Array<any> }> {
    componentDidMount() {
        var ipcRenderer = require('electron').ipcRenderer;
        ipcRenderer.on('db-transfer', function (event,store) {
            console.log(store);
        });
    }
    render() {

        console.log(this.state.movies)

        return (
            <div>
                Hello
            </div>
        )
    }
}
