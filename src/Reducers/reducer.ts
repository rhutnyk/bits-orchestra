
const initialState = {
   testemonials: []
  }

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
   
      case 'GET_TESTIMONIALS': return { ...state, testemonials: action.payload };
    
    }
    return state;
  }