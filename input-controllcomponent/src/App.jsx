import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      age: ""
    }
  }

  render() {

    let handler = (event) => {
      event.preventDefault()
    }

    let handletwo = (hand) => {
      this.setState({ name: hand.target.value })
    }

    let print = () => {
      console.log(this.state.name)
    }

    return (
      <>
        <form
          onSubmit={handler}>
          <div>
            <label htmlFor="userName">enter your name </label>
            <input type="text" id="userName" onChange={handletwo} value={this.state.name} />
          </div>
          <div>
            <input type="submit"
              onClick={print} value="submit" />
          </div>
        </form>
      </>
    )
  }
}
