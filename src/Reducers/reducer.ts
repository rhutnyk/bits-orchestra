
const initialState = {
  data: [],
  firstName: '',
  lastName: '',
  newTestimonial: '',
  testemonials: []
  }

export const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'CHANGE_FIRST_NAME': return { ...state, firstName: action.payload };
      case 'CHANGE_LAST_NAME': return { ...state, lastName: action.payload };
      case 'GET_TESTIMONIALS': return { ...state, testemonials: action.payload };
      case 'ADD_TESTIMONIALS': return { ...state, newTestimonial: action.payload };
      case 'ADD_TESTIMONIALS': return { ...state, newTestimonial: action.payload };
      case 'GET_DATA': return { ...state, data: action.payload };
    }
    return state;
  }