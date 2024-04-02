//! Validation section

export const validate = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'E-mail Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } 

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(values.password)) {
      errors.password = 'Password must contain at least 8 characters, including one uppercase letter, one digit, and one special character';
    }
  
    return errors;
  };