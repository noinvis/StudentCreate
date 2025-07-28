import React, { memo, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "@/api";

const UpdateStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get(`/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData);

    api
      .put(`/students/${id}`, updatedData)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

 if (loading || !student) return(
    <div className="h-[100vh]">
      <div className="loader"></div>
    </div>
  ) 

  return (
    <div className="container">
        <p className="text-center text-[40px]">Update</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[10px] bg-[dodgerblue] w-[650px] p-[30px] rounded-[5px] mx-auto my-[30px]"
      >
        <input
          name="fname"
          defaultValue={student.fname}
          required
          placeholder="First Name"
          className="bg-white p-[10px] rounded-2xl indent-2.5 outline-0"
        />
        <input
          name="lname"
          defaultValue={student.lname}
          required
          placeholder="Last Name"
          className="bg-white p-[10px] rounded-2xl indent-2.5 outline-0"
        />
        <input
          name="phone"
          defaultValue={student.phone}
          required
          placeholder="Phone"
          className="bg-white p-[10px] rounded-2xl indent-2.5 outline-0"
        />
        <input
          name="address"
          defaultValue={student.address}
          required
          placeholder="Address"
          className="bg-white p-[10px] rounded-2xl indent-2.5 outline-0"
        />

        <div className="flex items-center justify-evenly my-2 text-white">
          <label className="flex items-center gap-2">
            Male
            <input
              type="radio"
              name="gender"
              value="male"
            />
          </label>
          <label className="flex items-center gap-2">
            Female
            <input
              type="radio"
              name="gender"
              value="female"
            />
          </label>
        </div>

        <input
          name="birthdate"
          type="date"
          required
          className="bg-white p-[10px] rounded-2xl indent-2.5 outline-0"
        />

        <div className="flex gap-[10px]">
          <button
            type="submit"
            className="w-full text-[dodgerblue] bg-white py-[10px] font-medium rounded-2xl mt-[30px] hover:bg-[dodgerblue] hover:text-white border border-white duration-300"
          >
            Update
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

export default memo(UpdateStudent);
