//! Validation section

export const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'E-mail Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } 
    
    if(!values.contact) {
      errors.contact = 'Required';
    } else if (values.contact.length > 13) {
      errors.firstName = 'Must be 13 characters or less';
    } else if (!/^\d+$/.test(values.contact)) {
      errors.contact = 'Invalid contact number';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(values.password)) {
      errors.password = 'Password must contain at least 8 characters, including one uppercase letter, one digit, and one special character';
    }
  
    return errors;
  };