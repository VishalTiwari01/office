import React, { useState } from "react";
import bannerImg from "../assets/PartnerImage.png";

const PartnerForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   mobile: '',
  //   city: '',
  //   profession: '',
  //   gender: 'Female',
  //   consent: false,
  // });

  // console.log(formData);

  // const [submittedList, setSubmittedList] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === 'checkbox' ? checked : value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isFormValid) {
  //     setSubmittedList([...submittedList, formData]);
  //     alert('Form submitted successfully!');
  //     setFormData({
  //       name: '',
  //       mobile: '',
  //       city: '',
  //       profession: '',
  //       gender: 'Female',
  //       consent: false,

  //     });
  //     console.log(setFormData);
  //   }
  // };

  // const isFormValid =
  //   formData.name &&
  //   formData.mobile &&
  //   formData.city &&
  //   formData.profession &&
  //   formData.gender &&
  //   formData.consent;

  const [status, setStatus] = useState("");
  const [agreed, setAgreed] = useState(false); // Checkbox state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    profession: "",
    gender: "",
    // message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setAgreed(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const { name, email, mobile, city, profession, gender, message } = formData;
    const emailRegex = /\S+@\S+\.\S+/;
    const mobileRegex = /^[0-9]{10}$/;

    return (
      name &&
      emailRegex.test(email) &&
      mobileRegex.test(mobile) &&
      city &&
      profession &&
      gender &&
      agreed 
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus(
        "Please fill out all fields correctly and agree before submitting."
      );
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "fda635c8-fa6e-4cfe-a139-14b5a85bfac0", // Use your own key
        subject: "New Message from DOOR2FY",
        ...formData,
      }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        profession: "",
        gender: "",
      });
      setAgreed(false);
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className=" bg-blue-50 flex flex-col lg:flex-row items-center justify-center p-2 gap-8">
      {/* Left Text Block */}
      <div className=" flex flex-col justify-center items-start px-4 mr-5 z-10 ">
        <h2 className="text-lg font-medium text-gray-800">Be Your Own Boss</h2>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
          Earn upto <br />
          <span className="text-[#0e7490] font-extrabold">₹70,000/month</span>
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Join 5,000+ partners across 48+ cities in India.
        </p>
      </div>

      {/* Form & Image Section */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0 gap-0">
        {/* Image */}
        <div className="hidden lg:inline-flex max-w-xs ">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full h-auto max-h-[900px] object-contain rounded-t-full shadow-lg"
          />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-xl p-6 w-full"
        >
          <h3 className="text-lg font-semibold mb-4">
            Submit your Details & get started!
          </h3>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          />
          <input
            name="mobile"
            type="text"
            placeholder="Mobile No."
            value={formData.mobile}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          />

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Other">Other</option>
          </select>

          <input
            name="profession"
            type="text"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded"
          >
            <option value="female">Female</option>
            <option value="male">male</option>
            {/* <option value="other">other</option> */}
          </select>

          

          {/* Checkbox for agreement */}
          <div className="flex items-center gap-3 text-sm text-black mb-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleChange}
              className="mr-2"
            />
            <span>I confirm that the above information is correct</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg hover:bg-[#0e7490] bg-[#78c3d7]  cursor-pointer text-sm font-medium "
          >
            Submit now
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.toLowerCase().includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
