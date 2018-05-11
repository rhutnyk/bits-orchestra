export const changeFirstName = (newName: any) => {
    return {
      payload: newName,
      type: 'CHANGE_FIRST_NAME',
    }
  
  }
  export const changeLastName = (newName: any) => {
    return {
      payload: newName,
      type: 'CHANGE_LAST_NAME',
    }
  
  }

  export const getTestiomonial = (data: any) => {
    return {
      payload: data,
      type: 'GET_TESTIMONIALS',
    }
  }

  export const addTestimonial = (data: any) => {
    return {
      payload: data,
      type: 'ADD_TESTIMONIALS',
    }
  }

  export const getData = (data: any) => {
    return {
      payload: data,
      type: 'GET_DATA',
    }
  }
  

  