"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import From from "../components/From";
import Carousel from "../components/Carousel";
import BlockTestPass from "../components/BlockTestPass";
import CheckPass from "../Pop-Up/CheckPass";
import FormQuestion from "../Pop-Up/FormQuestion";

type Props = {};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [isCheckPass, setIsCheckPass] = useState(false);

  return (
    <>
      <Header
        setIsFormQuestion={setIsFormQuestion}
        isFormQuestion={isFormQuestion}
        isCheckPass={isCheckPass}
        setIsCheckPass={setIsCheckPass}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      {isCheckPass && <CheckPass setIsCheckPass={setIsCheckPass} />}
      <main
        className={`flex-1 my-14 container max-w-[1300px] mx-auto ${
          isFormQuestion || (isCheckPass && "max-md:hidden")
        }`}
      >
        <section className="flex max-w-[1180px] max-[1180px]:px-5 mx-auto justify-between max-md:mx-3 max-lg:flex-col-reverse max-lg:items-center max-sm:px-5">
          <div className="max-w-[680px] flex flex-col justify-center max-lg:text-center max-lg:mt-6 max-sm:max-w-full">
            <h1 className="text-6xl leading-[120%] font-bold max-lg:text-center max-md:text-3xl">
              Проверка <p>надежности пароля</p>
            </h1>
            <p className="text-lg mt-5 leading-[160%] font-normal max-lg:text-center max-md:text-base">
              Сервис для самостоятельной проверки пароля на надежность.
              Устанавливается в собственную инфраструктуру.
            </p>
            <button
              onClick={() => setIsCheckPass(true)}
              className="flex items-center mt-10 max-lg:justify-center button-animation"
            >
              <div className="w-72 h-14 text-text-hover flex items-center justify-center border border-solid border-borderColor-custom rounded-xl text-lg font-semibold max-md:w-64 max-md:text-base transition-all hover:text-text-hover_primary">
                Попробовать бесплатно
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-text-hover transition-all">
                <svg
                  width="28.000000"
                  height="28.000000"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="Vector"
                    d="M22 15.89L19.97 15.89L19.97 9.46L7.43 22L6 20.56L18.53 8.02L12.1 8.02L12.1 6L22 6L22 15.89Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="w-96 h-[480px] bg-[url('/bg_3.png')] bg-cover bg-center rounded-3xl flex flex-col justify-between max-sm:w-60 max-sm:h-80">
            <div className="flex justify-start items-start">
              <div className="bg-[url('/mask/mask_4.svg')] max-sm:bg-[url('/mask/mask_4_bg.svg')] w-[116px] h-[171px] max-sm:w-[70px] max-sm:h-[103px] bg-cover bg-center ">
                <svg
                  className="relative left-[-20px] top-2 max-sm:w-[66px] max-sm:h-[66px] max-sm:top-0 max-sm:left-[-10px]"
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 100.833H32.0833V110H13.75C6.16917 110 0 103.831 0 96.25V77.9167H9.16667V96.25C9.16667 98.78 11.2246 100.833 13.75 100.833ZM100.833 96.25C100.833 98.78 98.7754 100.833 96.25 100.833H77.9167V110H96.25C103.831 110 110 103.831 110 96.25V77.9167H100.833V96.25ZM96.25 0H77.9167V9.16667H96.25C98.7754 9.16667 100.833 11.2246 100.833 13.75V32.0833H110V13.75C110 6.16917 103.831 0 96.25 0ZM9.16667 13.75C9.16667 11.2246 11.2246 9.16667 13.75 9.16667H32.0833V0H13.75C6.16917 0 0 6.16917 0 13.75V32.0833H9.16667V13.75ZM63.2179 40.3013L55 48.5192L46.7821 40.3013L40.3013 46.7821L48.5192 55L40.3013 63.2179L46.7821 69.6988L55 61.4808L63.2179 69.6988L69.6988 63.2179L61.4808 55L69.6988 46.7821L63.2179 40.3013ZM83.4488 69.6988L91.6667 61.4808L99.8846 69.6988L106.365 63.2179L98.1475 55L106.365 46.7821L99.8846 40.3013L91.6667 48.5192L83.4488 40.3013L76.9679 46.7821L85.1858 55L76.9679 63.2179L83.4488 69.6988ZM26.5513 40.3013L18.3333 48.5192L10.1154 40.3013L3.63458 46.7821L11.8525 55L3.63458 63.2179L10.1154 69.6988L18.3333 61.4808L26.5513 69.6988L33.0321 63.2179L24.8142 55L33.0321 46.7821L26.5513 40.3013Z"
                    fill="#3C0F3C"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full mb-3">
              <div className=" h-[72px] w-[272px] max-sm:w-[174px] max-sm:h-[43px] max-sm:rounded-[15px] p-2 bg-white rounded-3xl flex items-center gap-3 ml-5">
                <svg
                className="max-sm:w-[29px] max-sm:h-[29px]"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7247 30.2245C15.1398 30.2245 14.5948 30.1048 14.0897 29.8656C13.5845 29.621 13.1485 29.286 12.7816 28.8606C12.4201 28.4352 12.1595 27.9407 12 27.3771L13.8504 26.8826C13.9248 27.191 14.0604 27.4569 14.2571 27.6802C14.4592 27.9035 14.6932 28.0763 14.959 28.1986C15.2302 28.3209 15.5093 28.3821 15.7965 28.3821C16.1687 28.3821 16.509 28.2917 16.8174 28.1109C17.1258 27.9301 17.3704 27.6882 17.5511 27.3851C17.7319 27.0767 17.8223 26.7364 17.8223 26.3642C17.8223 25.992 17.7293 25.6543 17.5432 25.3513C17.3624 25.0429 17.1178 24.8009 16.8094 24.6255C16.501 24.4447 16.1634 24.3543 15.7965 24.3543C15.3551 24.3543 14.9883 24.434 14.6958 24.5936C14.4087 24.7531 14.188 24.9232 14.0338 25.104L12.3908 24.5776L12.7417 18.5001H18.9788V20.3026H13.7706L14.4884 19.6246L14.2332 23.8518L13.8823 23.4211C14.18 23.1499 14.5257 22.9479 14.9191 22.815C15.3126 22.682 15.6928 22.6156 16.0597 22.6156C16.7775 22.6156 17.4129 22.7804 17.9659 23.1101C18.5242 23.4344 18.9602 23.8784 19.2739 24.442C19.5929 25.0056 19.7525 25.6464 19.7525 26.3642C19.7525 27.082 19.5664 27.7334 19.1942 28.3182C18.822 28.8978 18.3301 29.3604 17.7186 29.706C17.1125 30.0517 16.4478 30.2245 15.7247 30.2245Z"
                    fill="#408077"
                  />
                  <path
                    d="M24.5688 18.5001H26.499L23.4363 29.9852H21.5061L24.5688 18.5001Z"
                    fill="#408077"
                  />
                  <path
                    d="M31.9722 30.2245C31.3873 30.2245 30.8423 30.1048 30.3372 29.8656C29.8321 29.621 29.3961 29.286 29.0292 28.8606C28.6676 28.4352 28.4071 27.9407 28.2475 27.3771L30.0979 26.8826C30.1724 27.191 30.3079 27.4569 30.5047 27.6802C30.7067 27.9035 30.9407 28.0763 31.2066 28.1986C31.4777 28.3209 31.7569 28.3821 32.044 28.3821C32.4162 28.3821 32.7565 28.2917 33.0649 28.1109C33.3733 27.9301 33.6179 27.6882 33.7987 27.3851C33.9795 27.0767 34.0699 26.7364 34.0699 26.3642C34.0699 25.992 33.9768 25.6543 33.7907 25.3513C33.6099 25.0429 33.3653 24.8009 33.0569 24.6255C32.7485 24.4447 32.4109 24.3543 32.044 24.3543C31.6027 24.3543 31.2358 24.434 30.9434 24.5936C30.6562 24.7531 30.4356 24.9232 30.2814 25.104L28.6384 24.5776L28.9893 18.5001H35.2263V20.3026H30.0182L30.736 19.6246L30.4808 23.8518L30.1298 23.4211C30.4276 23.1499 30.7732 22.9479 31.1667 22.815C31.5601 22.682 31.9403 22.6156 32.3072 22.6156C33.025 22.6156 33.6604 22.7804 34.2134 23.1101C34.7717 23.4344 35.2077 23.8784 35.5215 24.442C35.8405 25.0056 36 25.6464 36 26.3642C36 27.082 35.8139 27.7334 35.4417 28.3182C35.0695 28.8978 34.5777 29.3604 33.9662 29.706C33.36 30.0517 32.6954 30.2245 31.9722 30.2245Z"
                    fill="#408077"
                  />
                  <path
                    opacity="0.25"
                    d="M24 48C29.7145 48 35.2414 45.961 39.5868 42.2497C43.9321 38.5385 46.8106 33.3985 47.7045 27.7544C48.5985 22.1103 47.4492 16.3324 44.4634 11.46C41.4776 6.58764 36.8512 2.94051 31.4164 1.17464C25.9816 -0.591227 20.0951 -0.359945 14.8156 1.82689C9.53616 4.01372 5.21022 8.01259 2.61591 13.1042C0.0215905 18.1959 -0.670831 24.0461 0.663184 29.6027C1.9972 35.1593 5.2701 40.0575 9.8932 43.4164L11.3039 41.4748C7.1431 38.4518 4.19748 34.0433 2.99687 29.0424C1.79626 24.0415 2.41944 18.7763 4.75432 14.1938C7.0892 9.61133 10.9826 6.01235 15.7341 4.0442C20.4856 2.07605 25.7835 1.8679 30.6748 3.45718C35.5661 5.04646 39.7298 8.32888 42.417 12.714C45.1043 17.0992 46.1386 22.2993 45.3341 27.379C44.5295 32.4587 41.9389 37.0846 38.0281 40.4248C34.1173 43.7649 29.1431 45.6 24 45.6L24 48Z"
                    fill="#408077"
                  />
                  <path
                    d="M48 24C48 37.2549 37.2548 48.0001 24 48.0001C10.7452 48.0001 0 37.2549 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM2.4 24C2.4 35.9294 12.0707 45.6001 24 45.6001C35.9293 45.6001 45.6 35.9294 45.6 24C45.6 12.0707 35.9293 2.4 24 2.4C12.0707 2.4 2.4 12.0707 2.4 24Z"
                    fill="#408077"
                  />
                </svg>
                <span className="leading-[150%] text-base font-semibold inline-block max-sm:text-[10px]">
                  Ваш пароль надежный.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-[1180px] mx-auto mt-[120px] max-[1180px]:px-5 max-md:p-0">
          <div className="w-full grid grid-cols-4 gap-x-5 gap-y-10 max-[1150px]:grid-cols-2">
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
              <img alt="" className='w-12 h-12'  srcSet="electro.png x1, electro@2x.png 2x" />
              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Не зависит от того находится компьютер в домене или нет.
                Работает автономно.
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
              <img alt="" className='w-12 h-12'  srcSet="bd.png x1, bd@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Все проверки производятся локально на сервере и не требуют
                доступа в Интернет.
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img className='w-12 h-12' alt="" srcSet="pc.png x1, pc@2x.png 2x" />
              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Не зависит от операционной системы.
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img alt="" className='w-12 h-12'  srcSet="cross.png x1, cross@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Развертывание в собственной инфраструктуре.
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img alt="" className='w-12 h-12'  srcSet="code.png x1, code@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Используются те же технологии и алгоритмы что и в Strongpass.
                Проактивная защита.
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img alt="" className='w-12 h-12'  srcSet="branch.png x1, branch@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Можно использовать как самостоятельно, так и вместе с
                "Strongpass. Проактивная защита".
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img alt="" className='w-12 h-12'  srcSet="study.png x1, study@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center ">
                Простое обучение пользователей созданию надежных паролей
              </span>
            </div>
            <div className="w-[280px] h-[155px] flex flex-col gap-5 max-[1150px]:mx-auto max-sm:w-[150px] max-sm:h-[224px] max-sm:items-center">
            <img alt="" className='w-12 h-12'  srcSet="paint.png x1, paint@2x.png 2x" />

              <span className="text-lg font-medium leading-[160%] text-left max-sm:text-base max-sm:text-center">
                Стилизация интерфейса для соответствия корпоративному стилю.
              </span>
            </div>
          </div>
        </section>
        <BlockTestPass setIsCheckPass={setIsCheckPass} />
        <From />
        <Carousel />
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
