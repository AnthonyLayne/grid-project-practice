import React from "react";

import "./index.css";

export default function Keypad({
  handleClickRight,
  handleClickLeft,
  handleClickUp,
  handleClickDown,
  handleClickUpLeft,
  handleClickUpRight,
  handleClickReset,
}) {
  return (
    <div className="keypad">
      <button type="button" onClick={handleClickUpLeft}>
        {">"}
      </button>
      <button type="button" onClick={handleClickUp}>
        {">"}
      </button>
      <button type="button" onClick={handleClickUpRight}>
        {">"}
      </button>
      <button type="button" onClick={handleClickLeft}>
        {">"}
      </button>
      <button type="button" onClick={handleClickReset} />
      <button type="button" onClick={handleClickRight}>
        {">"}
      </button>
      <button type="button" onClick={handleClickDown}>
        {">"}
      </button>
    </div>
  );
}

// class Keypad extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       clicks: 0,
//     };
//   }

//   trackClicks = () => {
//     this.setState(({ clicks: prevClicks }) => {
//       return { clicks: prevClicks + 1 };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>Keypad</div>

//         <button onClick={this.trackClicks}></button>
//         <button onClick={this.trackClicks}></button>
//         <button onClick={this.trackClicks}></button>
//         <button onClick={this.trackClicks}></button>
//         <button onClick={this.trackClicks}></button>
//       </div>
//     );
//   }
// }
