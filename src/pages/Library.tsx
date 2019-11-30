import React, { Component } from 'react'

import Settings from './Settings'
import Card from '../components/Card'

interface Props {

}

interface State {
    library: Array<any>
}

export default class Library extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            library: []
        }
    }
    render() {

        const fs = window.require('fs');
        const YAML = window.require('yaml');

        fs.readdir('./repo', (err: Error, files: String[]) => {
            if(err) return console.error('Failed to read repo folder.');
            files.forEach(file => {
                fs.readFile('./repo/'+file, 'utf8', (err: Error, data: string) => {
                    this.setState({
                        library: YAML.parse(data).sources
                    });
                });
            });
        });

        return (
            <React.Fragment>
                <video autoPlay src="https://imdb-video.media-imdb.com/vi2244525849/1434659607842-pgv4ql-1574176922903.mp4?Expires=1575223780&Signature=Ysh2GnWndr~e2ih~wMtL060CVoF8YRQRX3shT1hjtPa8IcNwz9Bsz1azkha7GamZ210NGyRjvXY9THzipp5j5SYjQLicv0Lukq8IuDQd~hAzXKMwvB2bLwT-6bEJrew1MoWrfCs4630I4iJQJ8ihhda1tr-M06NFLnzg326rOQnPD4tSSWGKvWbRG7UwJx8ujn7WWNAsKW3Q67T9KpaAzcyqWvZOqFQDSQrifp8Gp27G2lftqMVLuRAEkOdavTTk9uJtpxhpw-yUUTrADBi0HfpaWee8FdmlkKwYMdsfZWuJqkkRYNxhuIVvFyuGkeQdnStjKyPaMBjpb3oeQ6r-Jw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" muted/>
                <div className="overlay">
                    <div className="library">
                        <p>Your Library</p>
                        <div className="library-grid">
                            {this.state.library.map((data: any) => (
                                <Card key={data.imdb}>{data.imdb}</Card>
                            ))}
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
