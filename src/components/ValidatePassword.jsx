const ValidatePassword = (password) => {
    const minLength = 6;
    return password.length >= minLength;
  };
  
  export default ValidatePassword;
  