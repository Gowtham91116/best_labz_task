//! Validation section


export const validate = values => {
  const errors = {};

  if (!values.companyName) {
    errors.companyName = 'Company name is mandatory';
  } else if (values.companyName.length > 15) {
    errors.companyName = 'Must be 15 characters or less';
  }

  if(!values.companyContact) {
    errors.companyContact = 'Contact number mandatory';
  } else if (values.companyContact.length > 13) {
    errors.firstName = 'Must be 13 characters or less';
  } else if (!/^\d+$/.test(values.companyContact)) {
    errors.companyContact = 'Invalid contact number';
  }

  if (!values.companyType) {
    errors.companyType = 'Company Type Is Mandatory';
  } else if (values.companyType.length > 15) {
    errors.companyType = 'Must be 15 characters or less';
  }

  if (!values.companyIncome) {
    errors.companyIncome = 'Company Income Is mandatory';
  }

  if(!values.gstNumber) {
    errors.gstNumber = 'GST is Mandatory';
  } else if (values.gstNumber.length > 15) {
    errors.firstName = 'Must be 13 characters or less';
  } else if (!/^\d+$/.test(values.gstNumber)) {
    errors.gstNumber = 'Invalid GST number';
  }

  return errors;
};
