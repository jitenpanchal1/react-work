import React, { Component } from 'react'
import Updating from './Hoc'

class Demo extends Component {
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
                <button
                    onClick={this.props.increment}>
                    plus
                </button>
                <button
                    onClick={this.props.decrement}>
                    Minus
                </button>
            </>
        )
    }
}

export default Updating(Demo)
