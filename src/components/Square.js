import React, { Component } from 'react'

class Square extends Component{


  handleClick = () =>{
      // alert("yo")
      // alert(this.props.index)
      this.props.handleGamePlay(this.props.index)
    }

  render(){
    return(
      <React.Fragment>
        <div id="square" onClick={this.handleClick}>
          
          { this.props.value }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
