import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement, multBy10 } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        console.log(this.props);
        if(this.props.count %2 !== 0) this.props.increment(); // call increment ONLY if count odd (not even)

    };




    incrementAsync = () => {
        
    };

    render() {
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly              // NOTICE how props passed!!



        return (
            <p>
                Clicked: {this.props.count} times
                {console.log(this.props)}

                <button onClick={() => this.props.increment() }>    {/* don't forget () */}
                    +
                </button>
                <button onClick={() => this.props.decrement() }>   {/* Fill me in */}
                    -
                </button>


                 <button onClick={this.incrementIfOdd}>


                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>

              <button onClick={() => this.props.multBy10() }>
                multiply * 10
              </button>

            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { increment, decrement, multBy10 })(Counter);  // added multBy10
