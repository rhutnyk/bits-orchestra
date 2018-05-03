const initialState = {
    firstName: 'Bits',
    lastName: 'Orchestra',
    testemonials: []
  }

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'CHANGE_FIRST_NAME': return { ...state, firstName: action.payload };
      case 'CHANGE_LAST_NAME': return { ...state, lastName: action.payload };
      case 'GET_TESTIMONIALS': return { ...state, testemonials: action.payload };
    }
    return state;
  }