//! Validation section


export const validate = values => {
  const errors = {};

  if (!values.sslc) {
    errors.sslc = 'SSLC % Is Mandatory';
  } else if (values.sslc.length <= 2) {
    errors.sslc = 'The value should be 2 digits or more';
  }

  if (!values.hslc) {
    errors.hslc = 'HSLC % Is Mandatory';
  } else if (values.hslc.length <= 2) {
    errors.hslc = 'The value should be 2 digits or more';
  }

  if (!values.diploma) {
    errors.diploma = 'diploma % Is Mandatory';
  } else if (values.diploma.length <= 2) {
    errors.diploma = 'The value should be 2 digits or more';
  }

  return errors;
};
