//! Validation section

export const validate = values => {
  const errors = {};

  if (!values.age) {
    errors.age = 'Age Is Mandatory';
  } else if (values.age.length <= 2) {
    errors.age = 'The value should be 2 digits or more';
  }

  if (!values.dob) {
    errors.dob = 'DOB Is Mandatory';
  }

  return errors;
};
