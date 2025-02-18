import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {selectedColor: "#FFF"}
  }

  genRow = (vals) => (
    vals.map((val) => <Cell color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => ( this.props.values.map((rowVals) => 
    <div className="row"> {this.genRow(rowVals)} </div>)
  )
  

  setSelectedColor = (color) => {
    this.setState({selectedColor: color})
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor = {this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}
