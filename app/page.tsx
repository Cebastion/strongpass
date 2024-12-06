'use client'
import From from "./components/From";
import './animation/button.css'
import FormQuestion from "./Pop-Up/FormQuestion";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './config/scrollbar.css'
import Carousel from "./components/Carousel";




export default function Home() {
  const [isFormQuestion, setIsFormQuestion] = useState(false);


  return (
    <>
    <Header isFormQuestion={isFormQuestion} setIsFormQuestion={setIsFormQuestion} />
    {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
    <main className={`flex-1 container max-w-[1300px] mx-auto my-14 max-md:mx-0 ${isFormQuestion && "max-md:hidden"}`}>
      <h1 className="text-7xl relative bottom-[-1rem] max-[1060px]:bottom-0 mx-auto max-w-[1180px] max-[1190px]:text-6xl font-bold max-md:mx-[15px] leading-[120%] max-[530px]:leading-[130%] max-lg:text-5xl max-lg:mb-4 max-[350px]:mx-[6px]">Ваша безопасность <p>начинается с паролей</p></h1>
      <span className=" mx-auto max-w-[1180px]  text-lg max-md:mx-[15px] font-normal hidden max-lg:inline-block max-lg:text-base max-[880px]:mb-5 max-[615px]:mb-0">Снизьте риска взлома инфраструктуры из-за слабых или украденных паролей.</span>

      <section className="relative mx-auto bg-[url('/bg_big.png')] max-md:w-[90%] max-lg:bg-[url('/bg.png')] w-full max-w-[1180px] z-[-1] bg-cover bg-center rounded-[48px] h-[560px] flex flex-col justify-between max-lg:mt-4 max-[500px]:h-[380px]">
        <span
          className="absolute top-[-2px] left-[-2px] w-full max-[850px]:w-[90%] max-md:w-[75%] h-[90%] bg-white bg-cover z-[0] max-sm:hidden"
          style={{
            maskImage: "url('/Subtract.svg')",
      WebkitMaskImage: "url('/Subtract.svg')",
      maskSize: "cover",
      WebkitMaskSize: "cover",
      maskPosition: "top",
      WebkitMaskPosition: "top",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      // Для старых браузеров без поддержки маски
      backgroundImage: "url('/Subtract.svg')",
      backgroundSize: "cover",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      
          }}
          aria-hidden="true"
        ></span>
        <span
          className="absolute hidden top-[-2px] left-[-2px] w-[50%] h-[50%] bg-white bg-cover z-[0] max-sm:block"
          style={{
            maskImage: "url('/Subtract2.svg')",
      WebkitMaskImage: "url('/Subtract2.svg')",
      maskSize: "contain",
      WebkitMaskSize: "contain",
      maskPosition: "top",
      WebkitMaskPosition: "top",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      // Для старых браузеров без поддержки маски
      backgroundImage: "url('/Subtract.svg')",
      backgroundSize: "contain",
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      
          }}
          aria-hidden="true"
        ></span>
        <div className="flex justify-between z-10 ">
          <div className=" relative top-2 rounded-xl w-[90%] h-14 flex items-center"><span className=" text-lg font-normal max-[1150px]:text-base max-lg:hidden">Снизьте риска взлома инфраструктуры из-за слабых или украденных паролей.</span></div>
          <img className="relative top-[-50px] right-[-40px] max-[1250px]:right-[-15px] max-[1080px]:top-[-30px] max-lg:right-[-18px] max-lg:w-[40%] z-0 max-[880px]:top-[-30px] max-[630px]:top-[-20px] max-[630px]:w-[60%] max-[350px]:right-[-16px]" src="___.svg" />
        </div>
        <div className="bg-white flex justify-between items-center p-4 w-60 mx-auto mb-3 rounded-[28px] z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-bg-custom_green rounded-[16px]">
            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip75_879">
                  <rect id="padlock-check_14897075 1" rx="0.000000" width="19.166666" height="19.166666" transform="translate(0.416667 0.416667)" fill="white" fill-opacity="0" />
                </clipPath>
              </defs>
              <rect id="padlock-check_14897075 1" rx="0.000000" width="19.166666" height="19.166666" transform="translate(0.416667 0.416667)" fill="#FFFFFF" fill-opacity="0" />
              <g clip-path="url(#clip75_879)">
                <path id="Vector" d="M7.93 18.33L2.5 18.33C2.04 18.33 1.66 17.95 1.66 17.5L1.66 8.33L9.45 8.33C10.74 7.29 12.38 6.66 14.16 6.66L14.16 5.83C14.16 2.61 11.55 0 8.33 0C5.11 0 2.5 2.61 2.5 5.83L2.5 6.66L0 6.66L0 17.5C0 18.87 1.12 20 2.5 20L9.45 20C8.86 19.52 8.35 18.96 7.93 18.33ZM4.16 5.83C4.16 3.53 6.03 1.66 8.33 1.66C10.63 1.66 12.5 3.53 12.5 5.83L12.5 6.66L4.16 6.66L4.16 5.83ZM17.49 13.43L14.61 16.26C14.35 16.52 14 16.66 13.63 16.66C13.26 16.66 12.91 16.52 12.65 16.25L11.11 14.76L12.27 13.57L13.63 14.88L16.32 12.24L17.49 13.43ZM14.16 8.33C11.84 8.33 9.84 9.69 8.9 11.66L7.5 11.66L7.5 15L8.4 15C8.8 17.82 11.23 20 14.16 20C17.38 20 20 17.38 20 14.16C20 10.95 17.38 8.33 14.16 8.33ZM14.16 18.33C11.86 18.33 10 16.46 10 14.16C10 11.86 11.86 10 14.16 10C16.46 10 18.33 11.86 18.33 14.16C18.33 16.46 16.46 18.33 14.16 18.33Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
              </g>
            </svg>
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-bg-custom_green rounded-[16px]">
            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip75_881">
                  <rect id="folder-tree_7661442 1" rx="0.000000" width="19.960938" height="19.960938" transform="translate(0.019531 0.019531)" fill="white" fill-opacity="0" />
                </clipPath>
              </defs>
              <rect id="folder-tree_7661442 1" rx="0.000000" width="19.960938" height="19.960938" transform="translate(0.019531 0.019531)" fill="#FFFFFF" fill-opacity="0" />
              <g clip-path="url(#clip75_881)">

                <path id="Vector" d="M20 9.16L20 4.16C20 2.78 18.87 1.66 17.5 1.66L15.34 1.66L13.67 0L10.83 0C9.45 0 8.33 1.12 8.33 2.5L8.33 4.16L1.66 4.16L1.66 0L0 0L0 14.16C0 15.54 1.12 16.66 2.5 16.66L8.33 16.66L8.33 20L20 20L20 15C20 13.62 18.87 12.5 17.5 12.5L15.34 12.5L13.67 10.83L10.83 10.83C9.45 10.83 8.33 11.95 8.33 13.33L8.33 15L2.5 15C2.04 15 1.66 14.62 1.66 14.16L1.66 5.83L8.33 5.83L8.33 9.16L20 9.16ZM10 2.5C10 2.03 10.37 1.66 10.83 1.66L12.98 1.66L14.65 3.33L17.5 3.33C17.95 3.33 18.33 3.7 18.33 4.16L18.33 7.5L10 7.5L10 2.5ZM10 13.33C10 12.87 10.37 12.5 10.83 12.5L12.98 12.5L14.65 14.16L17.5 14.16C17.95 14.16 18.33 14.54 18.33 15L18.33 18.33L10 18.33L10 13.33Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
              </g>
            </svg>
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-bg-custom_green rounded-[16px]">
            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip75_885">
                  <rect id="magnifying-glass-binary_17698343 1" rx="0.000000" width="19.166666" height="19.166666" transform="translate(0.416667 0.416667)" fill="white" fill-opacity="0" />
                </clipPath>
              </defs>
              <rect id="magnifying-glass-binary_17698343 1" rx="0.000000" width="19.166666" height="19.166666" transform="translate(0.416667 0.416667)" fill="#FFFFFF" fill-opacity="0" />
              <g clip-path="url(#clip75_885)">
                <path id="Vector" d="M6.68 3.33C6.68 1.49 5.19 0 3.35 0C1.51 0 0.02 1.49 0.02 3.33L0.02 5.83C0.02 7.67 1.51 9.16 3.35 9.16C5.19 9.16 6.68 7.67 6.68 5.83L6.68 3.33ZM5.02 5.83C5.02 6.75 4.27 7.5 3.35 7.5C2.43 7.5 1.68 6.75 1.68 5.83L1.68 3.33C1.68 2.41 2.43 1.66 3.35 1.66C4.27 1.66 5.02 2.41 5.02 3.33L5.02 5.83ZM4.18 10.83L4.18 20L2.52 20L2.52 13.64L1.2 14.99L0 13.83L2.93 10.83L4.18 10.83ZM9.51 4.16L8.32 3L11.24 0L12.5 0L12.5 9.16L10.83 9.16L10.83 2.8L9.51 4.16ZM19.96 18.78L17.63 16.46C18.07 15.8 18.33 15.01 18.33 14.16C18.33 11.86 16.46 10 14.16 10C11.86 10 10 11.86 10 14.16C10 16.46 11.86 18.33 14.16 18.33C15.01 18.33 15.8 18.07 16.46 17.63L18.78 19.96L19.96 18.78ZM14.16 16.66C12.78 16.66 11.66 15.54 11.66 14.16C11.66 12.78 12.78 11.66 14.16 11.66C15.54 11.66 16.66 12.78 16.66 14.16C16.66 15.54 15.54 16.66 14.16 16.66ZM10.07 18.32C10.56 18.8 11.13 19.19 11.76 19.48C11.25 19.8 10.65 19.99 10 19.99C8.16 19.99 6.66 18.5 6.66 16.66L6.66 14.16C6.66 12.55 7.81 11.21 9.33 10.9C8.7 11.83 8.33 12.95 8.33 14.16L8.33 16.66C8.33 17.58 9.08 18.33 10 18.33C10.02 18.33 10.05 18.32 10.07 18.32Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="mt-28 max-w-[1180px] mx-auto max-md:px-[15px] max-[500px]:mx-2">
        <h2 className="text-[64px] leading-[120%] font-bold max-lg:text-5xl max-md:text-[30px] mb-6">Продукты</h2>
        <span className=" text-lg leading-[160%] max-w-[780px] inline-block font-normal max-lg:text-base">Минимизируют вероятность взлома простыми средствами, помогут реализовать надежную парольную политику, обеспечат процессы, связанные с паролями.</span>
        <div className="flex justify-between mt-8 items-center gap-5 w-full h-full max-lg:flex-col">
          <div className="w-full h-[445px] p-8 bg-bg-custom_gray rounded-xl flex flex-col justify-between gap-4 max-w-sm max-h-[445px] max-lg:w-full max-lg:h-80 max-lg:p-6 max-lg:gap-3 max-lg:max-w-full max-md:h-full">
            <div className="w-[80px] h-[80px] flex items-center justify-center bg-bg-custom_green rounded-xl max-lg:w-[72px] max-lg:h-[72px] max-[500px]:mb-1">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>
                  Created with Pixso.
                </desc>
                <defs>
                  <clipPath id="clip28_2969">
                    <rect id="shield-keyhole" rx="0.000000" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)" fill="white" fill-opacity="0" />
                  </clipPath>
                </defs>
                <rect id="shield-keyhole" rx="0.000000" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)" fill="#FFFFFF" fill-opacity="0" />
                <g clip-path="url(#clip28_2969)">
                  <path id="Vector" d="M22.46 2.81L14 0L5.53 2.81C3.61 3.44 2.33 5.22 2.33 7.24L2.33 13.95C2.33 21.61 10.5 26.29 13 27.54L13.94 28.01L14.92 27.62C17.44 26.61 25.66 22.62 25.66 13.95L25.66 7.24C25.66 5.22 24.38 3.44 22.46 2.81ZM23.33 13.95C23.33 21.16 16.23 24.58 14.05 25.46C11.85 24.36 4.66 20.28 4.66 13.95L4.66 7.24C4.66 6.23 5.31 5.34 6.26 5.02L14 2.46L21.73 5.02C22.69 5.34 23.33 6.23 23.33 7.24L23.33 13.95ZM16.91 11.08C16.91 12.27 16.19 13.3 15.16 13.75L15.16 18.66L12.83 18.66L12.83 13.75C11.8 13.3 11.08 12.27 11.08 11.08C11.08 9.47 12.38 8.16 14 8.16C15.61 8.16 16.91 9.47 16.91 11.08Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                </g>
              </svg>
            </div>
            <div>
              <h3 className="text-[32px] font-semibold mb-3 leading-[130%] max-lg:text-2xl">Проактивная защита</h3>
              <span className="text-lg leading-[160%] max-lg:text-base"><span className="max-[350px]:block">Проверка пароля в момент</span> <span className="max-[350px]:block">установки и блокировка операции,</span> <span className="max-[350px]:block">если новый пароль считается</span> <span className="max-[350px]:block"> слабым или скомпрометированным.</span></span>
            </div>
            <div className="flex justify-between items-center max-md:mt-2">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <button className="flex button-animation" onClick={() => window.location.assign("/proactive_protection")}>
                <div className="h-[41px] px-5 border flex justify-center items-center border-solid border-borderColor-custom rounded-lg font-semibold text-base leading-[140%] text-text-hover  max-lg:px-0 max-lg:py-0 max-lg:w-[131px] max-lg:h-[38px] transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">Подробнее</div>
                <div className="h-[41px] w-[41px] flex items-center justify-center rounded-lg hover:bg-bg-hover_primary transition-all bg-text-hover max-lg:w-9 max-lg:h-9">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <desc>
                      Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M18.85 13.62L17.11 13.62L17.11 8.11L6.37 18.85L5.14 17.62L15.88 6.88L10.37 6.88L10.37 5.14L18.85 5.14L18.85 13.62Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full h-[445px] p-8 bg-bg-custom_gray rounded-xl flex flex-col justify-between gap-4 max-w-sm max-h-[445px] max-lg:w-full max-lg:h-80 max-lg:p-6 max-lg:gap-3 max-lg:max-w-full max-md:h-full">
            <div className="w-[80px] h-[80px] flex items-center justify-center bg-bg-custom_green rounded-xl max-lg:w-[72px] max-lg:h-[72px] max-[500px]:mb-1">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>
                  Created with Pixso.
                </desc>
                <defs>
                  <clipPath id="clip28_2990">
                    <rect id="password-scan" rx="0.000000" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)" fill="white" fill-opacity="0" />
                  </clipPath>
                </defs>
                <rect id="password-scan" rx="0.000000" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)" fill="#FFFFFF" fill-opacity="0" />
                <g clip-path="url(#clip28_2990)">
                  <path id="Vector" d="M3.5 25.66L8.16 25.66L8.16 28L3.5 28C1.57 28 0 26.42 0 24.5L0 19.83L2.33 19.83L2.33 24.5C2.33 25.14 2.85 25.66 3.5 25.66ZM25.66 24.5C25.66 25.14 25.14 25.66 24.5 25.66L19.83 25.66L19.83 28L24.5 28C26.42 28 28 26.42 28 24.5L28 19.83L25.66 19.83L25.66 24.5ZM24.5 0L19.83 0L19.83 2.33L24.5 2.33C25.14 2.33 25.66 2.85 25.66 3.5L25.66 8.16L28 8.16L28 3.5C28 1.57 26.42 0 24.5 0ZM2.33 3.5C2.33 2.85 2.85 2.33 3.5 2.33L8.16 2.33L8.16 0L3.5 0C1.57 0 0 1.57 0 3.5L0 8.16L2.33 8.16L2.33 3.5ZM16.09 10.25L14 12.35L11.9 10.25L10.25 11.9L12.35 14L10.25 16.09L11.9 17.74L14 15.64L16.09 17.74L17.74 16.09L15.64 14L17.74 11.9L16.09 10.25ZM21.24 17.74L23.33 15.64L25.42 17.74L27.07 16.09L24.98 14L27.07 11.9L25.42 10.25L23.33 12.35L21.24 10.25L19.59 11.9L21.68 14L19.59 16.09L21.24 17.74ZM6.75 10.25L4.66 12.35L2.57 10.25L0.92 11.9L3.01 14L0.92 16.09L2.57 17.74L4.66 15.64L6.75 17.74L8.4 16.09L6.31 14L8.4 11.9L6.75 10.25Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                </g>
              </svg>
            </div>
            <div className="h-[55%]">
              <h3 className="text-[32px] font-semibold mb-3 leading-[130%] max-lg:text-2xl">Самопроверка</h3>
              <span className="text-lg leading-[160%] max-lg:text-base"><span className="max-[350px]:block">Сервис самостоятельной проверки</span><span className="max-[350px]:block"> пароля на надежность.</span></span>
            </div>
            <div className="flex justify-between items-center max-md:mt-2">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <button className="flex button-animation" onClick={() => window.location.assign("/self_examination")}>
                <div className="h-[41px] px-5 border flex justify-center items-center border-solid border-borderColor-custom rounded-lg font-semibold text-base leading-[140%] text-text-hover  max-lg:px-0 max-lg:py-0 max-lg:w-[131px]  max-lg:h-[38px] transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">Подробнее</div>
                <div className="h-[41px] w-[41px] flex items-center justify-center rounded-lg hover:bg-bg-hover_primary transition-all bg-text-hover max-lg:w-9 max-lg:h-9">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <desc>
                      Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M18.85 13.62L17.11 13.62L17.11 8.11L6.37 18.85L5.14 17.62L15.88 6.88L10.37 6.88L10.37 5.14L18.85 5.14L18.85 13.62Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full h-[445px] p-8 bg-bg-custom_gray rounded-xl flex flex-col justify-between gap-4 max-w-sm max-h-[445px] max-lg:w-full max-lg:h-80 max-lg:p-6 max-lg:gap-3 max-lg:max-w-full max-md:h-full">
            <div className="w-[80px] h-[80px] flex items-center justify-center bg-bg-custom_green rounded-xl max-lg:w-[72px] max-lg:h-[72px] max-[500px]:mb-1"><svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs />
              <path id="Vector" d="M28 0L28 5.83L22.16 5.83L22.16 3.5L24.08 3.5C23.24 2.76 22.16 2.33 21 2.33C18.83 2.33 17.02 3.82 16.49 5.83L14.1 5.83C14.66 2.52 17.53 0 21 0C22.77 0 24.4 0.65 25.66 1.78L25.66 0L28 0ZM21 11.66C19.84 11.66 18.74 11.23 17.91 10.5L19.83 10.5L19.83 8.16L14 8.16L14 14L16.33 14L16.33 12.21C17.59 13.34 19.24 14 21 14C24.46 14 27.33 11.47 27.89 8.16L25.5 8.16C24.97 10.17 23.16 11.66 21 11.66ZM17.5 15.64C18.23 15.94 19.01 16.15 19.83 16.25L19.83 23.08C19.83 26.31 14.84 28 9.91 28C4.98 28 0 26.31 0 23.08L0 5.25C0 5.02 0.14 4.33 0.14 4.33C0.92 1.8 4.85 0 9.91 0C11.51 0 12.99 0.18 14.29 0.51C13.7 1.12 13.19 1.81 12.78 2.57C11.91 2.42 10.96 2.33 9.91 2.33C5.28 2.33 2.33 4.06 2.33 5.25C2.33 6.43 5.28 8.16 9.91 8.16C10.53 8.16 11.11 8.13 11.66 8.07L11.66 10.41C11.09 10.46 10.52 10.5 9.91 10.5C6.8 10.5 4.12 9.81 2.33 8.7L2.33 11.08C2.33 12.27 5.28 14 9.91 14C10.53 14 11.11 13.96 11.66 13.91L11.66 16.25C11.09 16.3 10.51 16.33 9.91 16.33C6.8 16.33 4.12 15.64 2.33 14.53L2.33 16.91C2.33 18.1 5.28 19.83 9.91 19.83C14.54 19.83 17.5 18.1 17.5 16.91L17.5 15.64ZM17.5 23.08L17.5 20.36C15.7 21.48 13.02 22.16 9.91 22.16C6.8 22.16 4.12 21.48 2.33 20.36L2.33 23.08C2.33 23.95 5 25.66 9.91 25.66C14.82 25.66 17.5 23.95 17.5 23.08Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg></div>
            <div className="h-[55%]">
              <h3 className="text-[32px] font-semibold mb-3 leading-[130%] max-lg:text-2xl">Almetibin</h3>
              <span className="text-lg leading-[160%] max-lg:text-base"><span className="max-[350px]:block">Безопасный обмен паролями,</span> <span className="max-[350px]:block">чувствительной информацией</span> <span className="max-[350px]:block">с контрагентами или внутри</span> <span className="max-[350px]:block"> компании.</span></span>
            </div>
            <div className="flex justify-between items-center max-md:mt-2">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <button className="flex button-animation" onClick={() => window.location.assign("/almetibin")}>
                <div className="h-[41px] px-5 border flex justify-center items-center border-solid border-borderColor-custom rounded-lg font-semibold text-base leading-[140%] text-text-hover  max-lg:px-0 max-lg:py-0 max-lg:w-[131px] max-lg:h-[38px] transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">Подробнее</div>
                <div className="h-[41px] w-[41px] flex items-center justify-center rounded-lg hover:bg-bg-hover_primary transition-all bg-text-hover max-lg:w-9 max-lg:h-9">
                  <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <desc>
                      Created with Pixso.
                    </desc>
                    <defs />
                    <path id="Vector" d="M18.85 13.62L17.11 13.62L17.11 8.11L6.37 18.85L5.14 17.62L15.88 6.88L10.37 6.88L10.37 5.14L18.85 5.14L18.85 13.62Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[9rem]  bg-bg-custom_gray rounded-[48px] max-md:rounded-3xl py-10 px-14 max-lg:overflow-hidden max-lg:py-10 max-lg:px-5">
        <div className="flex justify-between items-center max-lg:flex-col">
          <span className="text-[clamp(18px,4vw,28px)] font-[480] w-[680px] leading-[160%] max-lg:w-full max-lg:mb-10 max-lg:pl-[25px] max-md:pl-5"><p>Использование слабых и скомпрометированных</p> <p>паролей - один из основных способов</p> <p>проникновения злоумышленников</p> <p>в инфраструктуру.  Внедрение надежной</p> <p>парольной политики и безопасной работы</p> <p>с паролями снижает вероятность взлома</p> <p>на 60% (<a href="#" className="text-text-hover underline hover:text-black transition-all duration-500">по данным Лаборатории Касперского</a>).</p> </span>
          <div className="bg-[url('/image.png')] rounded-3xl max-sm:bg-cover max-sm:bg-center max-sm:w-full max-[500px]:bg-[url('/image_bg.png')]  w-[380px] h-[400px] flex items-end justify-end max-lg:mt-3 max-md:w-[320px] max-md:h-[340px] max-md:rounded-3xl">
            <div className="w-[188px] h-[116px] bg-[url('/mask/mask_1.svg')] max-md:bg-[url('/mask/mask_1_2.svg')] flex gap-2 items-end justify-end max-md:w-[158px] max-md:h-[97px]">
              <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-white max-md:w-12 max-md:h-12">
                <svg width="16.666748" height="20.000000" viewBox="0 0 16.6667 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <desc>
                    Created with Pixso.
                  </desc>
                  <defs />
                  <path id="Vector" d="M14.16 6.66L14.16 5.83C14.16 4.28 13.55 2.8 12.45 1.7C11.36 0.61 9.88 0 8.33 0C6.78 0 5.3 0.61 4.2 1.7C3.11 2.8 2.5 4.28 2.5 5.83L2.5 6.66L0 6.66L0 17.5C0 18.16 0.26 18.79 0.73 19.26C1.2 19.73 1.83 20 2.5 20L14.16 20C14.82 20 15.46 19.73 15.93 19.26C16.4 18.79 16.66 18.16 16.66 17.5L16.66 6.66L14.16 6.66ZM4.16 5.83C4.16 4.72 4.6 3.66 5.38 2.88C6.16 2.1 7.22 1.66 8.33 1.66C9.43 1.66 10.49 2.1 11.27 2.88C12.06 3.66 12.5 4.72 12.5 5.83L12.5 6.66L4.16 6.66L4.16 5.83ZM15 17.5C15 17.72 14.91 17.93 14.75 18.08C14.59 18.24 14.38 18.33 14.16 18.33L2.5 18.33C2.27 18.33 2.06 18.24 1.91 18.08C1.75 17.93 1.66 17.72 1.66 17.5L1.66 8.33L15 8.33L15 17.5Z" fill="#408077" fill-opacity="1.000000" fill-rule="nonzero" />
                  <path id="Vector" d="M7.5 11.66L9.16 11.66L9.16 15L7.5 15L7.5 11.66Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
                </svg>
              </div>
              <div className="flex justify-center items-center h-16 w-16 rounded-xl bg-white max-md:w-12 max-md:h-12">
                <svg width="64.000000" height="64.000000" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <desc>
                    Created with Pixso.
                  </desc>
                  <defs />
                  <rect id="Frame 37" rx="16.000000" width="64.000000" height="64.000000" fill="#FFFFFF" fill-opacity="1.000000" />
                  <path id="Vector" d="M26.16 39.5L32.83 39.5L32.83 42L26.16 42L26.16 39.5ZM34.5 42L37.83 42L37.83 39.5L34.5 39.5L34.5 42ZM31.16 37.83L37.83 37.83L37.83 35.33L31.16 35.33L31.16 37.83ZM26.16 35.33L26.16 37.83L29.5 37.83L29.5 35.33L26.16 35.33ZM42 32.39C42 30.89 41.46 29.44 40.48 28.31C39.5 27.18 38.13 26.45 36.65 26.25C36.13 25.01 35.27 23.95 34.16 23.19C33.05 22.44 31.75 22.02 30.4 22C29.52 21.98 28.64 22.14 27.82 22.47C27 22.8 26.26 23.29 25.63 23.91C25 24.53 24.51 25.27 24.17 26.09C23.83 26.9 23.66 27.78 23.66 28.66C23.66 29.19 23.69 29.72 23.77 30.24C23.22 30.69 22.77 31.26 22.46 31.91C22.15 32.56 21.99 33.27 22 33.98L22 33.98C22 34.02 22 34.05 22 34.08C22 34.95 22.24 35.81 22.68 36.56C23.12 37.31 23.74 37.94 24.5 38.38L24.5 34.08C24.5 34.05 24.5 34.02 24.5 33.98L24.5 33.98C24.49 33.56 24.61 33.13 24.84 32.77C25.06 32.4 25.38 32.11 25.77 31.91L26.77 31.4L26.37 30.35C26.2 29.81 26.13 29.23 26.16 28.66C26.15 28.11 26.26 27.55 26.47 27.04C26.68 26.53 27 26.06 27.39 25.67C27.79 25.28 28.26 24.98 28.78 24.78C29.3 24.57 29.85 24.48 30.4 24.5C31.35 24.54 32.26 24.87 33.01 25.46C33.75 26.05 34.29 26.86 34.55 27.77L34.8 28.63L35.71 28.66C36.7 28.66 37.66 29.04 38.37 29.74C39.08 30.44 39.49 31.4 39.5 32.39L39.5 37.58C40.27 36.96 40.9 36.17 41.33 35.28C41.76 34.38 41.99 33.41 42 32.41L42 32.39Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between sclrollbar items-center mt-14 gap-5 max-xl:gap-4 max-lg:overflow-x-scroll max-lg:w-full">
          <div className="w-96 h-80 p-9 rounded-3xl flex flex-col justify-between border border-solid border-[rgb(227, 229, 230)] max-lg:w-64 max-lg:h-60 max-lg:p-4 max-lg:flex-shrink-0">
            <div>
              <h3 className="text-3xl font-semibold mb-3 leading-[130%] max-lg:text-2xl">Быстрое развертывание</h3>
              <span className="text-lg font-normal leading-[160%] max-lg:text-base">Защита начинает работать сразу после установки.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <span className="text-base font-semibold text-text-hover">001</span>
            </div>
          </div>
          <div className="w-96 h-80 p-9 rounded-3xl flex flex-col justify-between border border-solid border-[rgb(227, 229, 230)] max-lg:w-64 max-lg:h-60 max-lg:p-4 max-lg:flex-shrink-0">
            <div>
              <h3 className="text-3xl font-semibold mb-3 leading-[130%] max-lg:text-2xl">Поддержка Windows и Linux</h3>
              <span className="text-lg font-normal leading-[160%] max-lg:text-base">Поддерживаются каталоги Active Directory, FreeIPA, ALD Pro.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <span className="text-base font-semibold text-text-hover">002</span>
            </div>
          </div>
          <div className="w-96 h-80 p-9 rounded-3xl flex flex-col justify-between border border-solid border-[rgb(227, 229, 230)] max-lg:w-64 max-lg:h-60 max-lg:p-4 max-lg:flex-shrink-0">
            <div>
              <h3 className="text-3xl font-semibold mb-3 leading-[130%] max-lg:text-2xl">Сделано в России</h3>
              <span className="text-lg font-normal leading-[160%] max-lg:text-base">Strongpass включен в Реестр российского программного обеспечения Минцифры.</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-custom_dark_purple font-bold">***</span>
              <span className="text-base font-semibold text-text-hover">003</span>
            </div>
          </div>
        </div>
      </section>
      <From />
      <Carousel />
    </main>
    <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
}
