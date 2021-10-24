// import logo from './logo.svg'
import './App.css'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      submit: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(this.state.input)
    this.setState({
      input: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.input)

    this.setState({
      submit: this.state.input,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for='first-name'>first name</label>
          <input onChange={this.handleChange} type='text' name='first-name' />

          <button type='submit'>SUBMIT</button>
        </form>

        <h1>Form contents</h1>
        <li>{this.state.submit}</li>
      </div>
    )
  }
}
export default App
