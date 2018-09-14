import React, { Component } from "react";
import "./Vitamins.css";

export class Vitamins extends Component {
  render() {
    let vitamin = null;
    let fill = null;
    switch (this.props.color) {
      case "W":
        fill = "white";
        break;
      case "G":
        fill = "grey";
        break;
      case "B":
        fill = "black";
        break;
      default:
        fill = null;
    }

    switch (this.props.sides) {
      case "empty":
        vitamin = (
          <text textAnchor="middle" x="50%" y="20">
            Start typing in the form above
          </text>
        );
        break;
      case "error":
        vitamin = (
          <g>
            <path
              stroke="#000"
              id="svg_0"
              d="m480.0,2.75c-54.11677,0.02321 -97.97348,43.87992 -97.99669,98.00443c0,54.12451 43.87218,97.98122 97.99669,97.99669c54.11677,-0.01548 97.97348,-43.87219 97.98895,-97.98895c-0.00774,-54.13224 -43.86445,-98.01217 -97.98895,-98.01217zm74.76842,98.00443c-0.02321,15.03416 -4.51102,29.00052 -12.14029,40.73072l-103.35884,-103.34337c11.72246,-7.64475 25.68883,-12.14029 40.73846,-12.17124c41.28783,0.08511 74.69104,33.49607 74.76068,74.7839zm-149.55231,0c0.03095,-15.03416 4.51876,-29.016 12.17124,-40.7462l103.33563,103.35111c-11.7302,7.62927 -25.68883,12.11708 -40.73072,12.14029c-41.28009,-0.03869 -74.69104,-33.45738 -74.77615,-74.74521z"
              strokeWidth="1.5"
              fill="red"
            />
            <text textAnchor="middle" x="50%" y="95%">
              Unfortunately, you are doing something wrong. Try again
            </text>
          </g>
        );
        break;
      case "3":
        vitamin = (
          <path
            x="1100"
            y="100"
            stroke="#000"
            id="svg_3"
            d="m20.0075,200.41191l98.00001,-195.99997l98.00001,195.99997l-196.00002,0z"
            strokeWidth="1.5"
            className={fill}
          />
        );
        break;
      case "4":
        vitamin = (
          // <path
          //   stroke="#000"
          //   transform="rotate(-45 100.89250946044919,100.70500946044919) "
          //   id="svg_4"
          //   d="m150.53391,290.70501l141.42642,-141.42642l141.42642,141.42642l-141.42642,141.42642l-141.42642,-141.42642z"
          //   strokeWidth="1.5"
          //   className={fill}
          // />
          <rect stroke="#000" id="svg_4" height="200" width="200" y="0" x="270" strokeWidth="1.5" className={fill}/>
        );
        break;
      case "5":
        vitamin = (
          <path
            stroke="#000"
            id="svg_5"
            d="m520,77.66194l98.99988,-75.62907l99.00011,75.62907l-37.81451,122.37093l-122.37087,0l-37.81462,-122.37093z"
            strokeWidth="1.5"
            className={fill}
          />
        );
        break;
      case "6":
        vitamin = (
          <path
            stroke="#000"
            id="svg_6"
            d="m740.41751,99.50951l42.41888,-98.75951l113.11702,0l42.41887,98.75951l-42.41887,98.75951l-113.11702,0l-42.41888,-98.75951z"
            strokeWidth="1.5"
            className={fill}
          />
        );
        break;
      default:
        vitamin = null;
    }

    return vitamin;
  }
}

export default Vitamins;
