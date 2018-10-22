export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
//action types.  export convention in redux. avoids typos. 

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return {
    type: INCREMENT
    //payload: 1
  };
};

export const decrement = () => {
  // Fill in this function
  return {
    type: DECREMENT
    //payload: 1
  };
};


//follow functional programming paradigm.  this will be passed to dispatch function which will trigger reducer. 
//these will be imported by components as functions and include them in connect function, so they will bind up. 
