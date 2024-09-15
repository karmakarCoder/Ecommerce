import React, { useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import {
  checkEmail,
  errorMessage,
  passwordCheck,
  successMessage,
} from "../../../utils/Utils";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google.png";
import { getDatabase, ref, set } from "firebase/database";
const Login = () => {
  const db = getDatabase();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const auth = getAuth();
  const [passwordShow, setpasswordShow] = useState(false);
  // input value store
  const [loginData, setloginData] = useState({
    Email: "",
    Password: "",
  });

  // input Error value store
  const [loginDataError, setloginDataError] = useState({
    EmailError: "",
    EmailCheck: "",
    PasswordError: "",
    passwordLength: "",
    PasswordValidate: "",
  });

  // HandleLogin Button
  const HandleLogIn = () => {
    const { Email, Password } = loginData;
    if (!Email) {
      setloginDataError({
        ...loginDataError,
        EmailError: "Enter your email",
      });
    } else if (!checkEmail(Email)) {
      setloginDataError({
        ...loginDataError,
        EmailCheck: "Email is not valid",
        EmailError: "",
      });
    } else if (!Password) {
      setloginDataError({
        ...loginDataError,
        PasswordError: "Enter your password",
        EmailCheck: "",
        EmailError: "",
      });
    } else if (Password.length < 8) {
      setloginDataError({
        ...loginDataError,
        PasswordError: "",
        passwordLength: "Password must be at least 8 characters long",
      });
    } else if (!passwordCheck(Password)) {
      setloginDataError({
        ...loginDataError,
        passwordLength: "",
        PasswordValidate:
          "Password is not valid & The password must be a combination of lowercase letters, uppercase letters, numbers and special characters",
      });
    } else {
      signInWithEmailAndPassword(auth, Email, Password)
        .then((user) => {
          successMessage("Login done");
          navigate("/checkout");
        })
        .catch((err) => {
          errorMessage("Invalid user", "top-right", "dark", 1000);
        })
        .finally(() => {
          setloginDataError({
            ...loginDataError,
            passwordLength: "",
            PasswordValidate: "",
            EmailError: "",
          });
        });
    }
  };

  // HandleInput
  const HandleInput = (event) => {
    setloginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  // password show & unshow Handle
  const Handleshow = () => {
    setpasswordShow(!passwordShow);
  };

  // Login with google

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const { localId, email, displayName, photoUrl, emailVerified } =
          user?.reloadUserInfo;

        localStorage.setItem("current", JSON.stringify(auth.currentUser));
        set(ref(db, "users/" + localId), {
          userId: localId,
          username: displayName,
          email: email,
          profile_picture: photoUrl,
          emailverify: emailVerified,
        }).then(() => {
          successMessage("Successfully Log in");
          navigate("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <>
      <div className="py-24 px-4 lg:px-0">
        <div className="container">
          <div className="lg:pb-14 pb-8">
            <h1 className="lg:text-[48px] text-3xl font-DMsans font-bold text-primaryFontColor pb-2">
              Login
            </h1>
            <BreadCrumb />
          </div>

          <div className="w-full pb-16">
            <h2 className="lg:text-[38px] text-[30px] font-DMsans font-bold text-primaryFontColor pb-9">
              Returning Customer
            </h2>
            <form action="#">
              <div className="flex items-center flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-12">
                <div className="w-full">
                  <h3 className="text-base font-DMsans font-bold text-primaryFontColor">
                    Email address
                  </h3>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="company@domain.com"
                    className={`border-b-2 py-4 w-full pl-2 ${loginDataError.EmailError ? "border-b-red-600" : loginDataError.EmailCheck && "border-b-red-600"}`}
                    onChange={HandleInput}
                    value={loginData.Email}
                  />
                  {loginDataError.EmailError ? (
                    <p className="pt-2 text-sm font-DMsans font-normal text-red-600 flex items-center gap-x-1">
                      <RiErrorWarningFill /> {loginDataError.EmailError}
                    </p>
                  ) : (
                    loginDataError.EmailCheck && (
                      <p className="pt-2 text-sm font-DMsans font-normal text-red-600 flex items-center gap-x-1">
                        <RiErrorWarningFill /> {loginDataError.EmailCheck}
                      </p>
                    )
                  )}
                </div>
                <div className="w-full ">
                  <h3 className="text-base font-DMsans font-bold text-primaryFontColor">
                    Password
                  </h3>

                  <div className="relative">
                    <input
                      type={passwordShow ? "text" : "password"}
                      id="Password"
                      name="Password"
                      placeholder="Password"
                      className={`border-b-2 py-4 w-full ${loginDataError.PasswordError ? "border-b-red-600" : loginDataError.PasswordValidate ? "border-b-red-600" : loginDataError.passwordLength && "border-b-red-600"}`}
                      onChange={HandleInput}
                      value={loginData.Password}
                    />
                    <div
                      className="absolute top-[50%] -translate-y-[50%] right-5 cursor-pointer"
                      onClick={Handleshow}
                    >
                      <span className="text-xl">
                        {passwordShow ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {loginDataError.PasswordError ? (
                    <p className="pt-2 text-sm font-DMsans font-normal text-red-600 flex items-center gap-x-1">
                      <RiErrorWarningFill /> {loginDataError.PasswordError}
                    </p>
                  ) : loginDataError.PasswordValidate ? (
                    <p className="pt-2 text-sm font-DMsans font-normal text-red-600 flex items-start gap-x-1">
                      <RiErrorWarningFill className="text-xl" />{" "}
                      {loginDataError.PasswordValidate}
                    </p>
                  ) : (
                    loginDataError.passwordLength && (
                      <p className="pt-2 text-sm font-DMsans font-normal text-red-600 flex items-center gap-x-1">
                        <RiErrorWarningFill /> {loginDataError.passwordLength}
                      </p>
                    )
                  )}
                </div>
              </div>
            </form>

            <div className="mt-7" onClick={HandleLogIn}>
              <button className="lg:py-4 py-3 px-10 lg:x-16 text-sm font-DMsans z-50 font-bold text-primaryFontColor border-2 border-primaryFontColor relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primaryFontColor after:-z-50 after:origin-right after:transition-transform after:duration-200 after:scale-x-0 hover:after:scale-x-100 hover:text-white active:scale-95">
                Log in
              </button>
            </div>
            {/* Continue with google */}
            <div className="mt-6">
              <button
                onClick={loginWithGoogle}
                className="bg-primaryFontColor flex items-center gap-x-1 py-2 px-5 text-primaryBgColor font-DMsans font-medium text-base"
              >
                Continue with google{" "}
                <img src={googleLogo} alt={googleLogo} className="w-5" />
              </button>
            </div>
          </div>

          <div className="pt-14 border-t-2">
            <h2 className="lg:text-[38px] text-[30px] font-DMsans font-bold text-primaryFontColor">
              New Customer
            </h2>
            <p className="text-sm lg:text-base font-DMsans font-normal text-secondaryFontColor pt-5 lg:pt-9 pb-4 lg:pb-7 max-w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
            <Link to={"/registration"}>
              <button className="text-sm font-DMsans font-bold text-primaryBgColor py-3 px-8 lg:py-4 lg:px-16 bg-primaryFontColor">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
