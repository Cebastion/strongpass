import React, { FC } from "react";
import CheckPass from "../Pop-Up/CheckPass";

type Props = {
  setIsCheckPass: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlockTestPass:FC<Props> = ({setIsCheckPass}) => {
  return (
    <section className="bg-[#262f33] rounded-[48px] p-16 mt-32 max-md:mt-20 max-[1085px]:px-5 max-[1085px]:py-10 max-md:rounded-3xl">
      <div className="flex justify-between max-[1085px]:flex-col max-[1085px]:items-center">
        <div className="max-w-[580px] flex flex-col justify-between max-[1085px]:mb-[37px]">
          <div>
            <h3 className="font-semibold text-[35px] leading-[130%] text-white max-xl:text-[28px]">
              Проверьте пароль на надежность и соответствие требованиям
              парольных политик
            </h3>
            <br />
            <span className="text-white text-lg text-left leading-[160%] max-[1085px]:text-base">
              Технологии Strongpass доступны онлайн.
            </span>
          </div>
          <button className="flex items-center max-[1085px]:mt-5 group" onClick={() => setIsCheckPass(true)}>
            <div className="group-hover:opacity-[0.8] transition-all py-[14px] px-9 rounded-xl flex justify-center items-center border border-solid border-borderColor-custom_white font-semibold leading-[160%] text-lg text-white max-sm:text-base">Проверить пароль</div>
            <div className="group-hover:opacity-[0.8] transition-all rounded-xl bg-white w-[57px] h-[57px] flex items-center justify-center max-sm:h-[54px] max-sm:w-[54px]">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 16.3996L20.4705 16.3996L20.4705 9.96214L7.93261 22.5L6.5 21.0674L19.0379 8.52953L12.6004 8.52953L12.6004 6.5L22.5 6.50001L22.5 16.3996Z"
                  fill="#408077"
                />
              </svg>
            </div>
          </button>
        </div>
        <img srcSet="/pass.png 1x, /pass@2x.png 2x" alt="" />
      </div>
    </section>
  );
};

export default BlockTestPass;
