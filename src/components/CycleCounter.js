import React from 'react';

class CycleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleVal : this.props.cycle,
      currentVal : 0
    };
    this.updateVal = this.updateVal.bind(this);
  }

  updateVal(event) {
    // console.log(this.state.cycleVal);
    let currentVal = this.state.currentVal;
    const cycleVal = this.state.cycleVal;
    currentVal++;
    if (currentVal >= cycleVal) {
      this.setState({currentVal: 0});
    } else {
      this.setState({currentVal: currentVal})
    }
  }

  render() {
    const currentVal = this.state.currentVal;

    return (
      <button
        data-testid="cycle-counter"
        style={{ fontSize: '1rem', width: 120, height: 30, }}
        onClick={this.updateVal}
      >{currentVal}</button>
    );
  }
}

export default CycleCounter;
