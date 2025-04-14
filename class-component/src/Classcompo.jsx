import React, { Component } from 'react'


export default class Classcompo extends Component {
    constructor() {
        super()
        this.state = {
            ss: true,
            nam: "jeeten"
            ,
            count: 0
        }
    }
    usestate = () => {
        if (this.state.count >= 10) {
            this.state.count = 0
        }
        this.setState({ count: this.state.count + 1 })
        this.setState({ nam: this.state.nam === "jeeten" ? "panchal" : "jeeten" })
    }

    render() {



        return (<>
            <button>
                <h1>{this.state.count}</h1>
                <h1>{this.state.nam}</h1>
            </button>
            <button
                onClick={this.usestate}>
                click to updater
            </button>
        </>
        )

    }
}
