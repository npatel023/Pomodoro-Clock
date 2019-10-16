import React from 'react';
import '../ComponentStyles/App.css';
import BreakInterval from './BreakInterval';
import SessionInterval from './SessionInterval';
import Timer from './Timer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakInterval: 5,
      sessionInterval: 25,
      timerMinute: 25,
      isPlay: false,
    }

    this.onBreakIntervalChange = this.onBreakIntervalChange.bind(this);
    this.onSessionIntervalChange = this.onSessionIntervalChange.bind(this);
    this.onTimerMinuteChange = this.onTimerMinuteChange.bind(this);
    this.onPlayChange = this.onPlayChange.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
  }

  onPlayChange(isPlay) {
    this.setState({
      isPlay: isPlay
    })
  }

  onBreakIntervalChange(newBreakLength) {
    this.setState({
      breakInterval: newBreakLength
    })
  }

  onSessionIntervalChange(newSessionLength) {
    this.setState({
      sessionInterval: newSessionLength,
      timerMinute: newSessionLength
    })
  }

  onTimerMinuteChange(minuteChange) {
    this.setState({
      timerMinute: minuteChange
    })
  }

  onResetTimer() {
    this.setState({
      sessionInterval: 25,
      timerMinute: 25,
      breakInterval: 5
    })
  }

  render() {
    return (
      <main className="App">
        <section>
          <h2 className="app-title">Pomodoro Clock</h2>
          <section id="interval-container">
            <BreakInterval
            onBreakIntervalChange = {this.onBreakIntervalChange}
            breakInterval = {this.state.breakInterval}
            isPlay = {this.state.isPlay}
            />
            <SessionInterval
            onSessionIntervalChange = {this.onSessionIntervalChange} sessionInterval = {this.state.sessionInterval}
            isPlay = {this.state.isPlay}
            />
          </section>
          <Timer
          sessionInterval = {this.state.sessionInterval}
          timerMinute = {this.state.timerMinute}
          onTimerMinuteChange = {this.onTimerMinuteChange}
          breakInterval = {this.state.breakInterval}
          onPlayChange = {this.onPlayChange}
          resetTimer = {this.onResetTimer}
          />
        </section>
      </main>
    )
  }
}

export default App;
