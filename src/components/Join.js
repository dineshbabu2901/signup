import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { join } from "../apis/join";

function ContactForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [village, setVillage] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    join(email, street, village, fullAddress, age, location, phoneNumber).then(
      (res) => {
        console.log(res, "jack");
        navigate("/Fan");
      }
    );
    console.log({
      email,
      street,
      village,
      fullAddress,
      age,
      location,
      phoneNumber,
    });
  };

  return (
    <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Street:</label>
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Village:</label>
        <input
          type="text"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Full Address:</label>
        <textarea
          value={fullAddress}
          onChange={(e) => setFullAddress(e.target.value)}
          className="form-textarea mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number:</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="form-input mt-1 block w-full rounded-md border-gray-300"
        />
      </div>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
