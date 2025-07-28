import { api } from "@/api";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    api
      .post("/students", data)
      .then((res) => {
        e.target.reset();
        navigate("/")
      })
      .catch((err) => console.error(err));
  };
  

  return (
    <div className="container">
      <p className="text-center text-[40px]">Create</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] bg-[dodgerblue] w-[650px] p-[30px] rounded-[5px] mx-auto my-[30px]"
      >
        <div className="flex flex-col gap-[5px]">
          <label className="font-medium text-[#fff]">First Name</label>
          <input
            required
            name="fname"
            className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
            type="text"
            autoComplete="off"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label className="font-medium text-[#fff]">Last Name</label>
          <input
            required
            name="lname"
            className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
            type="text"
            autoComplete="off"
            placeholder="Last name"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label className="font-medium text-[#fff]">Phone Number</label>
          <input
            required
            name="phone"
            className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
            type="number"
            autoComplete="off"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label className="font-medium text-[#fff]">Address</label>
          <input
            required
            name="address"
            className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
            type="text"
            autoComplete="off"
            placeholder="Address"
          />
        </div>
        <div className="flex items-center justify-evenly my-2 text-white">
          <label htmlFor="male" className="text-lg flex items-center gap-3">
            <span>Male</span>
            <input type="radio" required id="male" name="gender" value="male" />
          </label>
          <label htmlFor="female" className="text-lg flex items-center gap-3">
            <span>Female</span>
            <input
              type="radio"
              required
              id="female"
              name="gender"
              value="female"
            />
          </label>
        </div>
        <div className="flex flex-col gap-[5px]">
          <label className="font-medium text-[#fff]">Date</label>
          <input
            required
            name="birthdate"
            className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
            type="date"
            autoComplete="off"
          />
        </div>
        <div className="flex gap-[10px]">
          <button
            type="submit"
            className="w-full text-[dodgerblue] bg-white py-[10px] font-medium rounded-2xl mt-[30px] hover:cursor-pointer outline-0 hover:text-white hover:bg-[dodgerblue] duration-300 border border-[white]"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full text-[dodgerblue] bg-white py-[10px] font-medium rounded-2xl mt-[30px] hover:bg-[dodgerblue] hover:text-white border border-white duration-300"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(CreateStudent);
