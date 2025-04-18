import React, { Component } from "react";

const Updating = (Plus) => {
    class Newcompo extends Component {
        constructor() {
            super()
            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        decrement = () => {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })
            }
        }

        render() {
            return (
                <>
                    <Plus count={this.state.count} increment={this.increment} decrement={this.decrement} />
                </>
            )
        }
    }
    return Newcompo
}

export default Updating