//! Validation section

export const validate = values => {
    const errors = {};
  
    if (!values.username) {
        errors.username = 'Required';
      } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
      }

      if(!values.vendorContact) {
        errors.vendorContact = 'Required';
      } else if (values.vendorContact.length > 13) {
        errors.firstName = 'Must be 13 characters or less';
      } else if (!/^\d+$/.test(values.vendorContact)) {
        errors.vendorContact = 'Invalid contact number';
      }

      if (!values.vendorAge) {
        errors.vendorAge = 'Age Is Mandatory';
      } else if (values.vendorAge.length <= 2) {
        errors.vendorAge = 'The value should be 2 digits or more';
      }

      if (!values.vendorDob) {
        errors.vendorDob = 'DOB Is Mandatory';
      }

      if (!values.vendorSslc) {
        errors.vendorSslc = 'SSLC % Is Mandatory';
      } else if (values.vendorSslc.length <= 2) {
        errors.vendorSslc = 'The value should be 2 digits or more';
      }

      if (!values.vendorHslc) {
        errors.vendorHslc = 'HSLC % Is Mandatory';
      } else if (values.vendorHslc.length <= 2) {
        errors.vendorHslc = 'The value should be 2 digits or more';
      }

      if (!values.vendorDiploma) {
        errors.vendorDiploma = 'diploma % Is Mandatory';
      } else if (values.vendorDiploma.length <= 2) {
        errors.vendorDiploma = 'The value should be 2 digits or more';
      }

      if (!values.vendorCompanyName) {
        errors.vendorCompanyName = 'Company name is mandatory';
      } else if (values.vendorCompanyName.length > 15) {
        errors.vendorCompanyName = 'Must be 15 characters or less';
      }

      if(!values.vendorCompanyContact) {
        errors.vendorCompanyContact = 'Contact number mandatory';
      } else if (values.vendorCompanyContact.length > 13) {
        errors.firstName = 'Must be 13 characters or less';
      } else if (!/^\d+$/.test(values.vendorCompanyContact)) {
        errors.vendorCompanyContact = 'Invalid contact number';
      }

      if (!values.vendorCompanyType) {
        errors.vendorCompanyType = 'Company Type Is Mandatory';
      } else if (values.vendorCompanyType.length > 15) {
        errors.vendorCompanyType = 'Must be 15 characters or less';
      }

      if (!values.vendorCompanyIncome) {
        errors.vendorCompanyIncome = 'Company Income Is mandatory';
      }

      if(!values.vendorGstNumber) {
        errors.vendorGstNumber = 'GST is Mandatory';
      } else if (values.vendorGstNumber.length > 15) {
        errors.firstName = 'Must be 13 characters or less';
      } else if (!/^\d+$/.test(values.vendorGstNumber)) {
        errors.vendorGstNumber = 'Invalid GST number';
      }
  
    return errors;
  };