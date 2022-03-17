import React, { Component } from "react"
import './App.js'

class Map extends Component {

        state = {
          jogadores: [
            {
              nome: "messi",
              time: "psg"
            },
            {
              nome: "cristiano ronaldo",
              time: "manchester united"
            },
            {
              nome: "neymar",
              time: "psg"
            },
            {
              nome: " de bruyne",
              time: "manchester city"
            },
            {
              nome: "salah",
              time: "liverpool"
            },
            {
              nome: "vini jr",
              time: "real madrid"
            }
          ]
        }

  render(){
    return(<div>
      {this.state.jogadores.map((item) => (
        <div className="box">
          <h2>nome: {item.nome}</h2>
          <h2>time: {item.time}</h2>
        </div>
      ))}
    </div>
  )
}
}


export default Map