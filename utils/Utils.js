function checkEmail(email = "roodro134143@gmail.com") {
  const regexPettern =
    /^(?!(^[.-].*|.*[.-]@|.*\.{2,}.*)|^.{254}.+@)([a-z\xC0-\xFF0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!.{253}.+$)((?!-.*|.*-\.)([a-z0-9-]{1,63}\.)+[a-z]{2,63}|(([01]?[0-9]{2}|2([0-4][0-9]|5[0-5])|[0-9])\.){3}([01]?[0-9]{2}|2([0-4][0-9]|5[0-5])|[0-9]))$/gim;
  let isEmailvalidate = regexPettern.test(email.toLocaleLowerCase());
  return isEmailvalidate;
}
function passwordCheck(password) {
  const passwordPettern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let passwordValid = passwordPettern.test(password);
  return passwordValid;
}

function checkMessageLimit(message) {
  return message.length > 50 ? false : true;
}

export { checkEmail, checkMessageLimit, passwordCheck };
