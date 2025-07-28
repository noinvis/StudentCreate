import React, { memo } from 'react'
import { LINKS, LINKS2, SOCIAL } from "@/static/index";

const Footer = () => {
  return (
    <footer className="max-[450px]:py-[30px] bg-[dodgerblue] opacity-90 py-[50px] flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-6 max-[950px]:grid-cols-3 max-[450px]:grid-cols-1">
          <div className="col-span-3 flex-row max-[450px]:col-span-1">
            <div className="flex items-center gap-[1rem]">
              <p className="text-[23px] text-[#F5F1E9] font-bold">
                UserCreate
              </p>
            </div>
            <p className="text-[14px] text-[#FCFAF6] font-normal">
              Be the first to know about new users
            </p>
          </div>
          <div className="flex-row">
            <p className="uppercase text-[12px] text-[#F5F1E9] font-bold mt-[10px]">
              Shop
            </p>
            <ul className="grid gap-2.5">
              {LINKS.map((item, inx) => {
                return (
                  <li key={inx}>
                    <a href="#">
                      <span className="text-[16px] text-[#F5F1E9] opacity-60 font-normal hover:underline">
                        {item}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-row">
            <p className="uppercase text-[12px] text-[#F5F1E9] font-bold mt-[10px]">
              Company
            </p>
            <ul className="grid gap-2.5">
              {LINKS2.map((item, inx) => {
                return (
                  <li key={inx}>
                    <a href="#">
                      <span className="text-[16px] text-[#F5F1E9] opacity-60 font-normal hover:underline">
                        {item}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-row">
            <p className="uppercase text-[12px] text-[#F5F1E9] font-bold mt-[10px]">
              SOcial
            </p>
            <ul className="grid gap-2.5">
              {SOCIAL.map((item, inx) => {
                return (
                  <li key={inx}>
                    <a href="#">
                      <span className="text-[16px] text-[#F5F1E9] opacity-60 font-normal hover:underline">
                        {item}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)