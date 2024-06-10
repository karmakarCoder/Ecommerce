import { toast, Bounce } from "react-toastify";

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

function numberCheck(number) {
  const numberRezex = /^\+?[1-9][0-9]{7,14}$/;
  let numberValid = numberRezex.test(number);
  return numberValid;
}

// toast

function successMessage(
  title = "sucess",
  position = "top-right",
  theme = "light",
  delay = 4000,
  transition = Bounce
) {
  toast.success(title, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: theme,
    transition: transition,
  });
}

function errorMessage(
  title = "error",
  position = "bottom-right",
  theme = "light",
  delay = 4000,
  transition = Bounce
) {
  toast.error(title, {
    position: position,
    autoClose: delay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
    transition: transition,
  });
}

export {
  checkEmail,
  checkMessageLimit,
  passwordCheck,
  successMessage,
  errorMessage,
  numberCheck,
};
