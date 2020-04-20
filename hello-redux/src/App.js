import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions'

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
        <p className="text-center">
          <button onClick={()=> dispatch(increment)} className="btn btn-primary mr-2">Increase</button>
          <button onClick={()=> dispatch(decrement)} className="btn btn-danger my-2">Decrease</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps)(App);