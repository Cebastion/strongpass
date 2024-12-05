"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import FormQuestion from "../Pop-Up/FormQuestion";
import Footer from "../components/Footer";
import FreeLicense from "../Pop-Up/FreeLicense";

type Props = {};

const GreenIconDownload = () => {
  return (
    <svg
    className="mr-2"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.28613 20.5V18.5714H18.7147V20.5H3.28613ZM11.7236 15.0357L11.0004 15.7991L10.3174 15.0357L5.17453 9.57143L4.49149 8.88839L5.89774 7.5625L6.58078 8.28571L10.0361 11.9821V2.5H11.9647V11.9821L15.4602 8.28571L16.1031 7.5625L17.5093 8.88839L16.8665 9.61161L11.7236 15.0759V15.0357Z"
        fill="#408077"
      />
    </svg>
  );
};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [isFormFreeLicense, setIsFormFreeLicense] = useState(false);

  return (
    <>
      <Header
        setIsFormQuestion={setIsFormQuestion}
        isFormQuestion={isFormQuestion}
        isFormFreeLicense={isFormFreeLicense}
        setIsFormFreeLicense={setIsFormFreeLicense}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      {isFormFreeLicense && <FreeLicense setIsFormFreeLicense={setIsFormFreeLicense} />}
      <main
        className={`flex-1 my-14 container max-w-[1300px] mx-auto ${
          isFormQuestion || isFormFreeLicense && "max-md:hidden"
        }`}
      >
        <h2 className="text-7xl text-center mb-10 leading-[120%] font-bold max-sm:text-[30px]">
          Скачать
        </h2>
        <span className="text-lg font-normal leading-[160%] text-center block max-w-[780px] mx-auto max-sm:px-5 max-sm:text-base">
          Если у вас нет купленной лицензии Strongpass, пожалуйста{" "}
          <span className="text-text-hover underline cursor-pointer hover:text-text-hover_primary transition-all" onClick={() => setIsFormFreeLicense(true)}>
            заполните форму
          </span>{" "}
          для получения временной полнофункциональной лицензии. Временная
          лицензия автоматически будет отправлена на электронную почту,
          указанную в запросе.
        </span>
        <div className="max-w-[1180px] w-full mx-auto mt-[60px] max-sm:px-5">
          <div className="p-12 bg-[#f2f5f4] rounded-[36px] flex gap-x-10">
            <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_223_7501)">
                  <path
                    d="M22.4685 2.81403L13.9997 0.00585938L5.53084 2.81403C3.61751 3.44869 2.33301 5.22786 2.33301 7.24386V13.958C2.33301 21.6195 10.5067 26.2979 13.008 27.5474L13.9483 28.0187L14.926 27.6267C17.4448 26.6117 25.6663 22.6275 25.6663 13.9569V7.24269C25.6663 5.22669 24.3807 3.44869 22.4685 2.81403ZM23.333 13.958C23.333 21.1657 16.2327 24.5852 14.0557 25.4625C11.853 24.3612 4.66751 20.2814 4.66751 13.958V7.24386C4.66751 6.23703 5.31034 5.34569 6.26584 5.02953L14.0008 2.46519L21.7358 5.02953C22.6913 5.34569 23.3342 6.23703 23.3342 7.24386L23.333 13.958ZM16.9163 11.0834C16.9163 12.2792 16.1965 13.307 15.1663 13.7562V18.6667H12.833V13.7562C11.8028 13.3059 11.083 12.2792 11.083 11.0834C11.083 9.47219 12.3885 8.16669 13.9997 8.16669C15.6108 8.16669 16.9163 9.47219 16.9163 11.0834Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_223_7501">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col gap-y-[30px]">
              <div className="flex flex-col gap-y-[10px]">
                <h3 className="text-[32px] font-semibold leading-[130%]">
                  Проактивная защита
                </h3>
                <span className="text-lg font-normal leading-[160%] block">
                  Проверка пароля в момент установки и блокировка операции, если
                  новый пароль считается слабым или скомпрометированным.
                </span>
                <a
                  href="/legal_landing"
                  className="text-text-hover underline cursor-pointer text-lg font-medium leading-[160%] hover:text-text-hover_primary transition-all"
                >
                  Документация
                </a>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <h6 className="text-lg font-semibold leading-[160%]">
                    Для доменных машин:
                  </h6>
                  <div className="flex gap-x-[36px] mt-[10px]">
                    <a href="#" className="flex text-lg font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"><GreenIconDownload/> Active Directory</a>
                    <a href="#" className="flex text-lg font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"><GreenIconDownload/> FreeIPA, ALD Pro</a>
                  </div>
                </div>
                <div>
                  <h6 className="text-lg font-semibold leading-[160%]">
                  Для недоменных машин:
                  </h6>
                  <div className="flex gap-x-[36px] mt-[10px]">
                    <a href="#" className="flex text-lg font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"><GreenIconDownload/> Сервер</a>
                    <a href="#" className="flex text-lg font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"><GreenIconDownload/> Клиент Windows</a>
                    <a href="#" className="flex text-lg font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"><GreenIconDownload/> Клиент Linux</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
