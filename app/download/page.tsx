"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import FormQuestion from "../Pop-Up/FormQuestion";
import Footer from "../components/Footer";
import FreeLicense from "../Pop-Up/FreeLicense";
import '../animation/button.css'

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
      {isFormFreeLicense && (
        <FreeLicense setIsFormFreeLicense={setIsFormFreeLicense} />
      )}
      <main
        className={`flex-1 my-14 container max-w-[1300px] mx-auto max-[1180px]:px-5 ${
          isFormQuestion || (isFormFreeLicense && "max-md:hidden")
        }`}
      >
        <h2 className="text-7xl text-center mb-10 leading-[120%] font-bold max-sm:text-[30px] max-md:mb-5">
          Скачать
        </h2>
        <span className="text-lg font-normal leading-[160%] text-center block max-w-[780px] mx-auto max-sm:text-base">
          Если у вас нет купленной лицензии Strongpass, пожалуйста{" "}
          <span
            className="text-text-hover underline cursor-pointer hover:text-text-hover_primary transition-all"
            onClick={() => setIsFormFreeLicense(true)}
          >
            заполните форму
          </span>{" "}
          для получения временной полнофункциональной лицензии. Временная
          лицензия автоматически будет отправлена на электронную почту,
          указанную в запросе.
        </span>
        <div className="max-w-[1180px] w-full mx-auto mt-[60px] max-md:mt-10">
          <div className="p-12 bg-[#f2f5f4] mb-[27px] rounded-[36px] flex gap-x-10 max-sm:p-[30px] max-md:flex-col">
            <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center max-md:mb-[10px]">
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
                <h3 className="text-[32px] font-semibold leading-[130%] max-md:text-[21px]">
                  Проактивная защита
                </h3>
                <span className="text-lg font-normal leading-[160%] block max-md:text-base">
                  Проверка пароля в момент установки и блокировка операции, если
                  новый пароль считается слабым или скомпрометированным.
                </span>
                <a
                  href="/legal_landing"
                  className="text-text-hover underline cursor-pointer text-lg max-md:text-base font-medium leading-[160%] hover:text-text-hover_primary transition-all"
                >
                  Документация
                </a>
              </div>
              <div className="flex flex-col gap-y-5">
                <div className="">
                  <h6 className="text-lg font-semibold leading-[160%] max-md:text-base">
                    Для доменных машин:
                  </h6>
                  <div className="flex gap-x-[36px] mt-[10px] max-sm:flex max-sm:flex-col gap-y-[10px]">
                    <a
                      href="#"
                      className="flex text-lg max-md:text-base font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"
                    >
                      <GreenIconDownload /> Active Directory
                    </a>
                    <a
                      href="#"
                      className="flex text-lg max-md:text-base font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"
                    >
                      <GreenIconDownload /> FreeIPA, ALD Pro
                    </a>
                  </div>
                </div>
                <div>
                  <h6 className="text-lg font-semibold leading-[160%] max-md:text-base">
                    Для недоменных машин:
                  </h6>
                  <div className="flex gap-x-[36px] mt-[10px] max-sm:flex max-sm:flex-col gap-y-[10px]">
                    <a
                      href="#"
                      className="flex text-lg max-md:text-base font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"
                    >
                      <GreenIconDownload /> Сервер
                    </a>
                    <a
                      href="#"
                      className="flex text-lg max-md:text-base font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"
                    >
                      <GreenIconDownload /> Клиент Windows
                    </a>
                    <a
                      href="#"
                      className="flex text-lg max-md:text-base font-semibold leading-[160%] text-text-hover hover:text-text-hover_primary transition-all items-center"
                    >
                      <GreenIconDownload /> Клиент Linux
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 max-[1200px]:grid-cols-1">
            <div className="w-[580px] max-[1200px]:w-full p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Самопроверка</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                  Сервис самостоятельной проверки пароля на надежность.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[580px] max-[1200px]:w-full  p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Расширенная база паролей</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                Сервис самостоятельной проверки пароля на надежность.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[580px] max-[1200px]:w-full p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Уведомления</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                  Сервис самостоятельной проверки пароля на надежность.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[580px] max-[1200px]:w-full  p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Смена пароля</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                  Сервис самостоятельной проверки пароля на надежность.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[580px] max-[1200px]:w-full  p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Поиск слабых паролей</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                  Сервис самостоятельной проверки пароля на надежность.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[580px] max-[1200px]:w-full  p-12 bg-[#f2f5f4] rounded-[36px] max-[580px]:w-full max-[580px]:rounded-3xl max-[580px]:p-[30px]">
              <div className="w-20 h-20 rounded-2xl bg-bg-custom_green flex items-center justify-center mb-10 max-md:mb-5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_223_7683)">
                    <path
                      d="M3.5 25.6667H8.16667V28H3.5C1.57033 28 0 26.4297 0 24.5V19.8333H2.33333V24.5C2.33333 25.144 2.85717 25.6667 3.5 25.6667ZM25.6667 24.5C25.6667 25.144 25.1428 25.6667 24.5 25.6667H19.8333V28H24.5C26.4297 28 28 26.4297 28 24.5V19.8333H25.6667V24.5ZM24.5 0H19.8333V2.33333H24.5C25.1428 2.33333 25.6667 2.85717 25.6667 3.5V8.16667H28V3.5C28 1.57033 26.4297 0 24.5 0ZM2.33333 3.5C2.33333 2.85717 2.85717 2.33333 3.5 2.33333H8.16667V0H3.5C1.57033 0 0 1.57033 0 3.5V8.16667H2.33333V3.5ZM16.0918 10.2585L14 12.3503L11.9082 10.2585L10.2585 11.9082L12.3503 14L10.2585 16.0918L11.9082 17.7415L14 15.6497L16.0918 17.7415L17.7415 16.0918L15.6497 14L17.7415 11.9082L16.0918 10.2585ZM21.2415 17.7415L23.3333 15.6497L25.4252 17.7415L27.0748 16.0918L24.983 14L27.0748 11.9082L25.4252 10.2585L23.3333 12.3503L21.2415 10.2585L19.5918 11.9082L21.6837 14L19.5918 16.0918L21.2415 17.7415ZM6.7585 10.2585L4.66667 12.3503L2.57483 10.2585L0.925167 11.9082L3.017 14L0.925167 16.0918L2.57483 17.7415L4.66667 15.6497L6.7585 17.7415L8.40817 16.0918L6.31633 14L8.40817 11.9082L6.7585 10.2585Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_223_7683">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col gap-y-[30px] max-md:gap-y-5">
                <div>
                <h4 className="text-[32px] leading-[130%] font-semibold mb-[10px] max-md:text-[21px]">Almetibin</h4>
                <span className="text-lg leading-[160%] font-normal max-md:text-base">
                Безопасный обмен паролями, чувствительной информацией с контрагентами или внутри компании.
                </span>
                </div>
                <div className="w-full flex justify-between items-center max-[450px]:flex-col max-[450px]:gap-y-5">
                  <a href="/legal_landing" className="text-lg leading-[160%] font-medium underline text-text-hover hover:text-text-hover_primary transition-all max-md:text-base">Документация</a>
                  <button className="flex items-center button-animation max-[450px]:w-full max-[450px]:justify-center">
                    <div className="h-[57px] w-[145px] max-[450px]:w-[203px] flex justify-center items-center border border-solid border-borderColor-hover rounded-xl text-lg leading-[160%] font-semibold text-text-hover">Скачать</div>
                    <div className="w-[57px] h-[57px] flex items-center justify-center bg-bg-custom_green rounded-xl">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.78613 20.5V18.5714H19.2147V20.5H3.78613ZM12.2236 15.0357L11.5004 15.7991L10.8174 15.0357L5.67453 9.57143L4.99149 8.88839L6.39774 7.5625L7.08078 8.28571L10.5361 11.9821V2.5H12.4647V11.9821L15.9602 8.28571L16.6031 7.5625L18.0093 8.88839L17.3665 9.61161L12.2236 15.0759V15.0357Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </button>
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
