import React, { Component } from 'react'
import { data } from 'react-router'

export default class About extends Component {

    constructor() {
        super()
        this.state = {
            lists: [1, 2, 3, 4, 5]
        }
    }



    render() {
        let mylist = this.state.lists.map((data) => <li key={data.toString()}>{data}</li>)

        let update = () => {
            let Up = [...this.state.lists]
            Up.push(this.state.lists.length + 1)
            this.setState({ lists: Up })
        }
        return (
            <div>
                <ul>
                    {mylist}
                </ul>
                <div>
                    <button
                        onClick={update}>
                        click
                    </button>
                </div>
            </div>
        )
    }
}



