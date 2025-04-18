import React, { Component } from 'react'
import Updating from './Hoc'

class Demotwo extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>{this.props.count}</h1>
                </div>
                <div>
                    <button
                        onMouseEnter={this.props.increment}>hover me +</button>
                </div>
                <div>
                    <button
                        onMouseEnter={this.props.decrement}>hover me -</button>
                </div>
            </>
        )
    }
}

export default Updating(Demotwo)
