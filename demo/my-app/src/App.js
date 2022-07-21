import React, { Component } from 'react'
import './App.css'
import axios from 'axios'


class App extends Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    axios.get('http://localhost:8080/health')
    .then(response => this.setState({message: response.data.name}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button'onClick={this.handleClick}>Click Here</button>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
export default App















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Fast
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
