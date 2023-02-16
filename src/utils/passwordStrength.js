export const checkPasswordStrength = (password) => {
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecialCharacters = /[-!@#$%^&*_.]/.test(password);

  const styles = {
    firstSectionColor: "grey",
    secondSectionColor: "grey",
    thirdSectionColor: "grey",
    message:"Password should contain minimum 8 characters"
  };

  if (password.length < 1) {
    return styles;
  }
  if (password.length < 8) {
    return {
      ...styles,
      firstSectionColor: "red",
      secondSectionColor: "red",
      thirdSectionColor: "red",
    };
  }
  if (hasDigits && hasLetters && hasSpecialCharacters) {
    return {
      ...styles,
      firstSectionColor: "green",
      secondSectionColor: "green",
      thirdSectionColor: "green",
      message:"Password is strong"
    };
  }
  if (hasDigits + hasLetters + hasSpecialCharacters === 2){
    return {
        ...styles,
        firstSectionColor: "yellow",
        secondSectionColor: "yellow",
        message:"Password is medium strength"
      }
  }
  if (hasDigits || hasLetters || hasSpecialCharacters){
    return {
        ...styles, firstSectionColor:"red", message:"Password is weak"
    }
  }

  return styles;
};
