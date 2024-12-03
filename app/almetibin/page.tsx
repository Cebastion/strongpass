"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import From from "../components/From";
import Carousel from "../components/Carousel";
import BlockTestPass from "../components/BlockTestPass";
import CheckPass from "../Pop-Up/CheckPass";
import FormQuestion from "../Pop-Up/FormQuestion";
import Image from "next/image";

type Props = {};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [isCheckPass, setIsCheckPass] = useState(false);

  return (
    <>
      <Header
        setIsFormQuestion={setIsFormQuestion}
        isFormQuestion={isFormQuestion}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      {isCheckPass && <CheckPass setIsCheckPass={setIsCheckPass} />}
      <main
        className={`flex-1 my-14 ${
          isFormQuestion || (isCheckPass && "max-md:hidden")
        }`}
      >
        <section className="flex max-w-[1180px] max-[1180px]:px-5 mx-auto justify-between max-md:mx-3 max-lg:flex-col-reverse max-lg:items-center max-sm:px-5">
          <div className="max-w-[680px] flex flex-col justify-center max-lg:text-center max-lg:mt-6">
            <h1 className="text-6xl leading-[120%] font-bold max-lg:text-center max-md:text-3xl">
              Безопасный и удобный способ обмена паролями
            </h1>
            <p className="text-lg mt-5 leading-[160%] font-normal max-lg:text-center max-md:text-base">
              Almetibin предоставляет удобный и безопасный способ обмена
              паролями, данными учетных записей, чувствительной информацией. С
              помощью Almetibin вы можете отказаться от обычных и небезопасных
              методов обмена чувствительной информацией, таких как электронная
              почта, мессенджеры, текстовые сообщения.
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
          <div className="w-96 h-[540px] bg-[url('/almetibin.png')] bg-cover bg-center rounded-3xl flex flex-col justify-between max-sm:w-60 max-sm:h-80">
            <div className="flex justify-start items-start">
              <div className="bg-[url('/mask/mask_4.svg')] w-[116px] h-[171px] max-sm:w-[120px] max-sm:h-[85px] bg-cover bg-center ">
                <svg
                  className="relative top-[10px] left-[-10px]"
                  width="110"
                  height="110"
                  viewBox="0 0 110 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M110 0V22.9167H87.0833V13.75H94.6183C91.3367 10.8488 87.0879 9.16667 82.5 9.16667C73.9796 9.16667 66.8663 15.0333 64.8175 22.9167H55.4125C57.6033 9.93208 68.8967 0 82.5 0C89.4575 0 95.8925 2.585 100.833 7.03083V0H110ZM82.5 45.8333C77.9442 45.8333 73.6588 44.1467 70.3725 41.25H77.9167V32.0833H55V55H64.1667V47.9829C69.1167 52.4104 75.5975 55 82.5 55C96.0988 55 107.392 45.0679 109.588 32.0833H100.183C98.1338 39.9667 91.0204 45.8333 82.5 45.8333ZM68.75 61.4763C71.6421 62.6496 74.7129 63.4517 77.9167 63.8504V90.6858C77.9167 103.368 58.3183 110 38.9583 110C19.5983 110 0 103.368 0 90.6858V20.625C0 19.745 0.582083 17.0225 0.582083 17.0225C3.62542 7.10875 19.085 0 38.9583 0C45.2283 0 51.0354 0.72875 56.1779 2.0075C53.8404 4.41833 51.8192 7.14083 50.2104 10.12C46.8279 9.52875 43.0696 9.16667 38.9583 9.16667C20.7717 9.16667 9.16667 15.95 9.16667 20.625C9.16667 25.3 20.7717 32.0833 38.9583 32.0833C41.3783 32.0833 43.6562 31.9413 45.8333 31.7213V40.9063C43.6058 41.1079 41.3325 41.25 38.9583 41.25C26.7438 41.25 16.2021 38.555 9.16667 34.1871V43.5417C9.16667 48.2167 20.7717 55 38.9583 55C41.3738 55 43.6608 54.8717 45.8333 54.6563V63.855C43.6058 64.0475 41.3233 64.1713 38.9583 64.1713C26.7438 64.1713 16.2021 61.4763 9.16667 57.1083V66.4629C9.16667 71.1379 20.7717 77.9212 38.9583 77.9212C57.145 77.9212 68.75 71.1379 68.75 66.4629V61.4763ZM68.75 90.6858V80.0204C61.7146 84.3929 51.1729 87.0833 38.9583 87.0833C26.7438 87.0833 16.2021 84.3883 9.16667 80.0204V90.6858C9.16667 94.1279 19.6808 100.833 38.9583 100.833C58.2358 100.833 68.75 94.1279 68.75 90.6858Z"
                    fill="#3C0F3C"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[120px] max-[1200px]:px-5 flex justify-between items-center max-w-[1180px] mx-auto max-[1100px]:flex-col-reverse  max-md:mx-3 max-sm:px-5">
          <div className="flex justify-end items-end h-[580px] w-full max-w-[580px] relative bg-gray-100 rounded-[36px] overflow-hidden max-[1100px]:mt-4 max-[500px]:w-[320px] max-[500px]:h-[320px]">
            <img
              className="absolute top-[70%] translate-y-[-50%] left-16 w-[866px] h-[460px] max-[500px]:w-[478px] max-[500px]:h-[253px] max-[500px]:top-6 max-[500px]:left-6"
              srcSet="/almetibin_bg.png x1, /almetibin_bg@2x.png 2x"
              width={866}
              height={460}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="max-w-[480px]">
            <h3 className="text-6xl font-bold leading-[120%] text-left max-[1100px]:text-3xl">
              Как это работает?
            </h3>
            <span className="text-lg font-normal leading-[160%] text-left mt-6 inline-block max-[1100px]:text-base">
              Almetibin предоставляет удобный и безопасный способ обмена
              паролями, данными учетных записей, чувствительной информацией. С
              помощью Almetibin вы можете отказаться от обычных и небезопасных
              методов обмена чувствительной информацией, таких как электронная
              почта, мессенджеры, текстовые сообщения.
            </span>
          </div>
        </section>
        <section className="max-w-[1180px] max-[1200px]:px-5 mx-auto mt-20 max-md:mx-3 max-sm:px-5">
          <h3 className="text-6xl font-bold leading-[120%] text-left mb-16 max-md:text-3xl max-md:mb-7">
            Преимущества
          </h3>
          <div>
            <div className="flex justify-between max-[1160px]:flex-col max-[1160px]:gap-8 max-[1160px]:items-center">
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-1.png 1x, /feat-1@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Установка на собственные сервера обеспечивает полный контроль
                  над всеми аспектами информационной безопасности.
                </span>
              </div>
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-2.png 1x, /feat-2@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Все заметки шифруются и дешифруются в браузере клиента. На
                  сервере заметки хранятся только в зашифрованном виде. При этом
                  ключи шифрования никогда не известны серверу и не хранятся на
                  сервере.
                </span>
              </div>
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-3.png 1x, /feat-3@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:flex-row max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Создавать заметки могут только зарегистрированные
                  пользователи. Это предотвращает использование сервиса
                  вредоносным ПО или в нелегитимных целях.
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-16 max-[1160px]:flex-col max-[1160px]:gap-8 max-[1160px]:items-center max-[1160px]:mt-8">
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-4.png 1x, /feat-4@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Поддерживается централизованная аутентификация через LDAP или
                  SSO/SAML.
                </span>
              </div>
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-5.png 1x, /feat-5@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Политики принудительно устанавливают параметры заметок: время
                  хранения, удаление сразу после прочтения, наличие
                  дополнительного пароля и минимальная длина пароля
                </span>
              </div>
              <div className="w-96 flex flex-col gap-6 max-[385px]:w-full max-[1160px]:flex-row max-[1160px]:w-full">
                <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
                  <img
                    srcSet="/feat-6.png 1x, /feat-6@2x.png 2x"
                    width={36}
                    height={36}
                    loading="lazy"
                    alt=""
                  />
                </div>
                <span className="text-[clamp(16px,4vw,18px)] font-normal leading-[160%] text-left max-[1160px]:w-[90%] max-[420px]:w-[70%]">
                  Через API можно создавать заметки, управлять пользователями.
                  Это позволяет использовать Almetibin в автоматизированных
                  процессах.
                </span>
              </div>
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
