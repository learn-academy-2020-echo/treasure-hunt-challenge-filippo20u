import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

    handleGamePlay = (index) => {
      alert (index)
    }



  render(){
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        {/* I don't copy 9 times my Square but I use the array above in line 9, I need curly braces, I need also () on the return */}
        <div id="gameboard">
        { this.state.squares.map((value, index) => {
          return (<Square
                  value ={ value }
                  key = { index }
                  index= { index }
                  handleGamePlay = {this.handleGamePlay}
                  />

          )
        })
        }
        </div>
      </React.Fragment>
    )
  }
}
export default App
