import React, { Component } from 'react';
import ReactSpinner from 'react-spinjs';
import './App.css';


const opts = {
  lines: 17
  , length: 56
  , width: 1
  , radius: 42
  , scale: 1.75
  , corners: 1
  , color: 'aquamarine'
  , opacity: 0.25
  , rotate: 0
  , direction: 1
  , speed: 1.6
  , trail: 72
  , fps: 20
  , zIndex: 2e9
  , className: 'spinner'
  , top: '69%'
  , left: '50%'
  , shadow: true
  , hwaccel: true
  , position: 'absolute'
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      text: ".............",
      addics: 0
    };
    this.clock = this.clock.bind(this);
    this.text = this.text.bind(this);
    this.title = this.title.bind(this);
  }

  clock() {
    setInterval(() => {
      this.setState({ milliseconds: this.state.milliseconds + 4 });
      if ( this.state.milliseconds >= 1000 ) {
        this.setState({
          seconds: this.state.seconds + 1,
          milliseconds: 0
        });
      }
      if ( this.state.seconds >= 60 ) {
        this.setState({
          seconds: 0,
          minutes: this.state.minutes + 1
        });
      }
      if ( this.state.minutes >= 60 ) {
        this.setState({
          minutes: 0,
          hours: this.state.hours + 1
        });
      }
      this.text();
    }, 4);
  }

  title() {
    setInterval(() => {
      document.title = this.state.text;
    }, 4);
  }


  text() {
    if (this.state.addics === 0) {
      this.setState( {
        text: "Compiling.", addics: this.state.addics + 1
      } );
      return false;
    }
    if ( this.state.addics === 1 ) {
      this.setState({
        text: "Compiling...",
        addics: this.state.addics + 1
      });
      return false;
    }
    if ( this.state.addics === 2 ) {
      this.setState({
        text: "Compiling.....",
        addics: this.state.addics + 1
      });
      return false;
    }
    if ( this.state.addics === 3 ) {
      this.setState({
        text: "Compiling",
        addics: 0
      });
      return false;
    }
  }

  componentDidMount() {
    this.clock();
    this.title();
  }

  render() {
    return (
      <div className="App">
        <div className="clock">
          <span className="main">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
          <span className="sub">.{this.state.milliseconds}</span>
        </div>
        <div className="terminal">
          <span className="text">
            {this.state.text}
          </span>
        </div>
        <br/>
        <div className="spinner">
          <ReactSpinner config={opts}/>
        </div>
      </div>
    );
  }
}

export default App;
