import React, { Component, ReactComponentElement, ReactPropTypes } from 'react'
import Library from '../pages/Library'

interface State {
    page: any
}

interface Props {

}

export class Router extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.router = this.router.bind(this);

        this.state = {
            page: () => { return(<div>Hello</div>) }
        }
    }
    router() {

        if(location.hash === '') location.hash = '#/'

        if(Array.isArray(this.props.children)) {
            this.props.children.forEach((page: any) => {
                console.log('#'+page.props.path === location.hash, page.props.path);
                if(location.hash === '#'+page.props.path) {
                    return this.setState({
                        page: page.props.component
                    });
                }
            });
        }
    }
    componentDidMount() {
        this.router();
        window.onhashchange = this.router;
    }
    render() {
        return (
            <this.state.page/>
        )
    }
}

interface RouteProps {
    component: any,
    path: string
}

export class Route extends Component<RouteProps> {
    render() {
        return (
            <div></div>
        )
    }
}
