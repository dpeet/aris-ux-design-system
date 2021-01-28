import React from 'react';
import './badge.scss'
// import classnames from "classnames";


export default class Badge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text ? this.props.text : "MI",
        }
    }

    render() {
        return (
            <div className="badge">{this.state.text}
            </div>
        );
    }
}
