import React, { useState } from "react";
import BreadCrumb from "../../Common/BreadCrumb/BreadCrumb";
import { checkEmail, checkMessageLimit } from "../../../utils/Utils";
import { MdErrorOutline } from "react-icons/md";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
import { toast, Bounce } from "react-toastify";

const Contact = () => {
  const [loading, setloading] = useState(false);

  const [contactInfo, setcontactInfo] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [contactInfoError, setcontactInfoError] = useState({
    NameError: "",
    EmailError: "",
    EmailValidate: "",
    MessageError: "",
    MessageWordLimit: "",
  });

  // HandlePost

  const HandlePost = () => {
    const { Name, Email, Message } = contactInfo;
    if (Name === "") {
      setcontactInfoError({
        ...contactInfoError,
        NameError: "Type your name",
      });
    } else if (Email === "") {
      setcontactInfoError({
        ...contactInfoError,
        EmailError: "Type your email",
        NameError: "",
      });
    } else if (!checkEmail(Email)) {
      setcontactInfoError({
        ...contactInfoError,
        EmailValidate: "Email not valid",
        EmailError: "",
      });
    } else if (Message === "") {
      setcontactInfoError({
        ...contactInfoError,
        MessageError: "Type your message",
        EmailValidate: "",
        EmailError: "",
      });
    } else if (!checkMessageLimit(Message)) {
      setcontactInfoError({
        ...contactInfoError,
        MessageError: "",
        MessageWordLimit: "Character limit 50",
      });
    } else {
      setcontactInfoError({
        ...contactInfoError,
        MessageError: "",
        EmailValidate: "",
        NameError: "",
        EmailError: "",
        MessageWordLimit: "",
      });
      setloading(true);
      addDoc(collection(db, "contactInfo"), contactInfo)
        .then(() => {
          toast.success("Post complete", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .catch(() => {
          toast.error("Error", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
        .finally(() => {
          setloading(false);
          setcontactInfo({
            ...contactInfo,
            Name: "",
            Email: "",
            Message: "",
          });
        });
    }
  };

  // HandleInput
  const HandleInput = (event) => {
    setcontactInfo({
      ...contactInfo,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <div className="py-12 lg:py-32 px-4 lg:px-0">
        <div className="container">
          <div className="pb-16">
            <h1 className="text-3xl lg:text-5xl font-DMsans font-bold text-primaryFontColor pb-2">
              Contacts
            </h1>
            <BreadCrumb />
          </div>

          <div className="max-w-[600px]">
            <form action="#" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h2 className="text-[24px] lg:text-[38px] font-DMsans font-bold text-primaryFontColor pb-5 lg:pb-10">
                  Fill up a Form
                </h2>
                <div className="w-full pb-2 lg:pb-6">
                  <h4 className="text-sm lg:text-base font-DMsans font-bold text-primaryFontColor">
                    Name
                  </h4>
                  <input
                    type="text"
                    placeholder="Your name here"
                    id="Name"
                    name="name"
                    className={`pl-2 lg:py-4 py-2 w-full placeholder:lg:ext-sm placeholder:text-xs placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal ${contactInfoError.NameError ? "border-red-600 border-2" : "border-b-2"}`}
                    onChange={HandleInput}
                    value={contactInfo.Name}
                  />
                  {contactInfoError.NameError && (
                    <p className="text-xs lg:text-sm font-DMsans font-medium text-red-700 flex items-center gap-x-1 pt-1">
                      <MdErrorOutline className="text-md" />{" "}
                      {contactInfoError.NameError}
                    </p>
                  )}
                </div>
                <div className="w-full pb-2 lg:pb-6">
                  <h4 className="text-sm lg:text-base font-DMsans font-bold text-primaryFontColor">
                    Email
                  </h4>
                  <input
                    type="text"
                    placeholder="Your email here"
                    id="Email"
                    name="email"
                    className={`pl-2 py-2 lg:py-4 w-full placeholder:lg:text-sm placeholder:text-xs placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal ${contactInfoError.EmailError ? "border-red-600 border-2" : "border-b-2"}`}
                    onChange={HandleInput}
                    value={contactInfo.Email}
                  />
                  {contactInfoError.EmailError ? (
                    <p className="text-xs lg:text-sm font-DMsans font-medium text-red-700 flex items-center gap-x-1 pt-1">
                      <MdErrorOutline className="text-md" />{" "}
                      {contactInfoError.EmailError}
                    </p>
                  ) : (
                    contactInfoError.EmailValidate && (
                      <p className="text-xs lg:text-sm font-DMsans font-medium text-red-700 flex items-center gap-x-1 pt-1">
                        <MdErrorOutline className="text-md" />{" "}
                        {contactInfoError.EmailValidate}
                      </p>
                    )
                  )}
                </div>
                <div className="w-full">
                  <h4 className="text-sm lg:text-base font-DMsans font-bold text-primaryFontColor">
                    Message
                  </h4>
                  <textarea
                    type="text"
                    placeholder="Your message here"
                    id="Message"
                    name="message"
                    className={`pl-2 py-2 lg:py-4 w-full placeholder:lg:text-sm placeholder:text-xs placeholder:font-DMsans placeholder:text-secondaryFontColor placeholder:font-normal ${contactInfoError.MessageError ? "border-red-600 border-2" : "border-b-2"}`}
                    onChange={HandleInput}
                    value={contactInfo.Message}
                  />
                  {contactInfoError.MessageError ? (
                    <p className="text-xs lg:text-sm font-DMsans font-medium text-red-700 flex items-center gap-x-1 pt-1">
                      <MdErrorOutline className="text-md" />
                      {contactInfoError.MessageError}
                    </p>
                  ) : (
                    contactInfoError.MessageWordLimit && (
                      <p className="text-xs lg:text-sm font-DMsans font-medium text-red-700 flex items-center gap-x-1 pt-1">
                        <MdErrorOutline className="text-md" />
                        {contactInfoError.MessageWordLimit}
                      </p>
                    )
                  )}
                </div>
                <div className="pt-7" onClick={HandlePost}>
                  <button className="lg:py-4 py-2 text-sm lg:text-base lg:px-20 px-14 bg-primaryFontColor text-primaryBgColor font-DMsans font-bold">
                    {loading ? "Loading..." : "Post"}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955468198!2d90.36556225849755!3d23.747049949770997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1717837710940!5m2!1sen!2sbd"
              className="w-full lg:h-[500px] h-[300px] lg:pt-32 pt-20"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
