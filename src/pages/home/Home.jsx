import React, { memo, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import img from "@/assets/img/user.png";
import { useNavigate } from "react-router-dom";
import { api } from "@/api";

const Home = () => {
  const [studentReload, setReload] = useState(false);
  const { data} = useFetch("/students", {}, studentReload);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    api
      .delete(`/students/${id}`)
      .then(() => setReload((p) => !p))
      .catch((err) => console.error(err));
  };
  if (!data)
    return (
      <div className="h-[100vh]">
        <div className="loader"></div>
      </div>
    );
  return (
    <div className="container">
      <p className="text-center text-[40px]">All Students</p>

      {data.length === 0 ? (
        <p className="text-center text-[20px] text-red-500">Ma'lumot yo'q</p>
      ) : (
        <div className="grid grid-cols-4 gap-[30px] py-[30px]">
          {data.map((student) => (
            <div key={student.id} className="rounded-2xl shadow-xl">
              <div>
                <img
                  src={img}
                  alt=""
                  className="bg-contain p-[1rem] size-[150px] mx-auto"
                />
              </div>
              <div className="p-[1rem]">
                <h2>
                  Fullname: {student.fname} {student.lname}
                </h2>
                <p>Phone: {student.phone}</p>
                <p>Address: {student.address}</p>
                <p>Gender: {student.gender}</p>
                <p>Birthdate: {student.birthdate}</p>
                <div className="flex gap-[10px] mt-[10px]">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="bg-[dodgerblue] p-[10px] w-full border border-[dodgerblue] text-white hover:text-[dodgerblue] hover:bg-white duration-300 rounded-3xl"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/edit/${student.id}`)}
                    className="bg-[dodgerblue] p-[10px] w-full border border-[dodgerblue] text-white hover:text-[dodgerblue] hover:bg-white duration-300 rounded-3xl"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default memo(Home);
