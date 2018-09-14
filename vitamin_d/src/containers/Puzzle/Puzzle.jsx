import React, { Component } from "react";
import "./Puzzle.css";

import Vitamins from "../Vitamins/Vitamins";

export class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      vitamins: []
    };
  }
  inputHandler = event => {
    event.preventDefault();
    let vitamins = this.input.current.value.split(" ").map(puzzle => {
      let colorsReqister = puzzle[1] || "Q";
      let colorIndex = colorsReqister.toUpperCase();
      let side = "";
      let filteredColor = "";
      if (puzzle[0] > 2 && puzzle[0] < 7) {
        side = puzzle[0];
      } else {
        side = "error";
      }
      if (["W", "B", "G"].includes(colorIndex)) {
        filteredColor = colorIndex;
      } else {
        side = "error";
      }
      if (puzzle === "") {
        side = "empty";
      }
      return {
        sides: side,
        color: filteredColor
      };
    });

    this.setState({
      vitamins
    });

    this.input.current.value = "";
  };

  render() {
    return (
      <div>
        <h1>Vitamin Puzzle</h1>
        <form action="">
          <div className="form">
            <input
              value={this.state.vitaminsLineInput}
              type="text"
              ref={this.input}
              placeholder="Example: 3W 4B 5G 6B"
            />
            <button onClick={this.inputHandler}>D</button>
          </div>
        </form>

        <div className="svgWrapper">
          <svg width="960" height="250">
            {this.state.vitamins.map(renderVitamins => (
              <Vitamins
                color={renderVitamins.color}
                sides={renderVitamins.sides}
                key={renderVitamins.sides}
              />
            ))}
          </svg>
        </div>
      </div>
    );
  }
}

export default Puzzle;

// validation [3-6][wgb][ ][3-6][wgb][ ][3-6][wgb][ ][3-6][wgb]

// 1A
// input 3B, 4B, 5B, 6B
// Output: [
//     [6 B G] // 6 grey MAXI GREY
//     [5 B W] // 5 white MAXI WHITE
//     [6 G W] // 6 white NEW MAXI WHITE
//     [4 B G] // 4 grey MAXI GREY
//     [5 W G] // 5 grey NEW MAXI GREY
//     [6 W G] // 6 grey NEW MAXI GREY
//     [3 B W] // 3 white MAXI WHITE
//     [4 G W] // 4 white NEW MAXI WHITE
//     [5 G W] // 5 white NEW MAXI WHITE
//     [6 G W] // 6 white NEW MAXI WHITE
// ]
