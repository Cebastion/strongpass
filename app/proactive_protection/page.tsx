'use client'
import Carousel from "../components/Carousel"
import From from "../components/From"

const page = () => {
  return (
    <main className="flex-1 my-14 ">
      <section className="flex justify-between max-lg:flex-col-reverse max-lg:items-center">
        <div className="max-w-[680px] max-lg:text-center max-lg:mt-6">
          <h1 className="text-6xl leading-[120%] font-bold max-lg:text-center max-md:text-3xl">Проактивная защита от использования слабых паролей</h1>
          <p className="text-lg mt-5 leading-[160%] font-normal max-lg:text-center max-md:text-base">При наличии индивидуального списка запрещенных паролей, составленного внутри компании, проводятся дополнительные проверки. На основании проверки разрешается или запрещается установка нового пароля.</p>
          <div className="flex items-center mt-10 max-lg:justify-center">
            <button className="w-72 h-14 text-text-hover border border-solid border-borderColor-custom rounded-xl text-lg font-semibold max-md:w-64 max-md:text-base">Попробовать бесплатно</button>
            <button className="w-14 h-14 flex items-center justify-center rounded-xl bg-text-hover">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>
                  Created with Pixso.
                </desc>
                <defs />
                <path id="Vector" d="M22 15.89L19.97 15.89L19.97 9.46L7.43 22L6 20.56L18.53 8.02L12.1 8.02L12.1 6L22 6L22 15.89Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-96 h-[540px] bg-[url('/bg2.png')] bg-cover bg-center rounded-3xl flex flex-col justify-between max-sm:w-60 max-sm:h-80">
          <div className="flex justify-start items-start">
            <div className="bg-[url('/mask/mask_2.svg')] w-[171px] h-[116px] max-sm:w-[120px] max-sm:h-[85px] bg-cover bg-center ">
              <svg className="ml-3 max-sm:w-[60px] max-sm:h-[70px]" width="91.624512" height="110.000000" viewBox="0 0 91.6245 110" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>
                  Created with Pixso.
                </desc>
                <defs />
                <path id="Vector" d="M79.06 11.02L45.81 0L12.55 11.02C5.04 13.51 0 20.5 0 28.42L0 54.78C0 84.87 32.09 103.24 41.91 108.14L45.61 110L49.44 108.46C59.34 104.47 91.62 88.83 91.62 54.78L91.62 28.41C91.62 20.5 86.57 13.51 79.06 11.02ZM82.46 54.78C82.46 83.08 54.58 96.51 46.03 99.96C37.38 95.63 9.16 79.61 9.16 54.78L9.16 28.42C9.16 24.46 11.69 20.96 15.44 19.72L45.81 9.65L76.19 19.72C79.94 20.96 82.46 24.46 82.46 28.42L82.46 54.78ZM57.26 43.49C57.26 48.19 54.43 52.23 50.39 53.99L50.39 73.27L41.23 73.27L41.23 53.99C37.18 52.22 34.35 48.19 34.35 43.49C34.35 37.17 39.48 32.04 45.81 32.04C52.13 32.04 57.26 37.17 57.26 43.49Z" fill="#3C0F3C" fill-opacity="1.000000" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="px-6 py-5 mx-auto bg-white rounded-3xl max-w-[340px] max-sm:px-2 max-sm:py-3 max-sm:w-[214px]">
              <span className="leading-[150%] text-base font-semibold mb-4 inline-block max-sm:text-[10px]">Автоматическая проверка</span>
              <div className="bg-bg-custom_beige rounded-xl flex gap-2 p-1">
                <svg className="w-11 h-7 max-sm:w-7" width="21.000000" height="21.000000" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <desc>
                    Created with Pixso.
                  </desc>
                  <defs />
                  <path id="Vector" d="M10.5 4.81C9.46 4.81 8.51 5.06 7.65 5.57C6.79 6.07 6.1 6.76 5.57 7.65C5.06 8.54 4.81 9.49 4.81 10.5C4.81 11.5 5.06 12.45 5.57 13.34C6.1 14.23 6.79 14.92 7.65 15.42C8.51 15.93 9.46 16.18 10.5 16.18C11.53 16.18 12.48 15.93 13.34 15.42C14.2 14.92 14.89 14.23 15.42 13.34C15.93 12.45 16.18 11.5 16.18 10.5C16.18 9.49 15.93 8.54 15.42 7.65C14.89 6.76 14.2 6.07 13.34 5.57C12.48 5.06 11.53 4.81 10.5 4.81ZM10.5 17.5C9.22 17.48 8.05 17.17 7 16.57C5.94 15.95 5.08 15.09 4.42 14C3.81 12.88 3.5 11.72 3.5 10.5C3.5 9.27 3.81 8.11 4.42 7C5.08 5.9 5.94 5.04 7 4.42C8.05 3.82 9.22 3.51 10.5 3.5C11.77 3.51 12.94 3.82 14 4.42C15.05 5.04 15.91 5.9 16.57 7C17.18 8.11 17.5 9.27 17.5 10.5C17.5 11.72 17.18 12.88 16.57 14C15.91 15.09 15.05 15.95 14 16.57C12.94 17.17 11.77 17.48 10.5 17.5ZM9.4 12.68L10.06 12.68L10.06 10.93L9.4 10.93C9 10.9 8.78 10.68 8.75 10.28C8.78 9.88 9 9.66 9.4 9.62L10.71 9.62C11.11 9.66 11.33 9.88 11.37 10.28L11.37 12.68L11.59 12.68C11.99 12.72 12.21 12.94 12.25 13.34C12.21 13.74 11.99 13.96 11.59 14L9.4 14C9 13.96 8.78 13.74 8.75 13.34C8.78 12.94 9 12.72 9.4 12.68ZM10.5 8.75C10.24 8.75 10.03 8.66 9.87 8.5C9.7 8.33 9.62 8.13 9.62 7.87C9.62 7.61 9.7 7.41 9.87 7.24C10.03 7.08 10.24 7 10.5 7C10.75 7 10.96 7.08 11.12 7.24C11.29 7.41 11.37 7.61 11.37 7.87C11.37 8.13 11.29 8.33 11.12 8.5C10.96 8.66 10.75 8.75 10.5 8.75Z" fill="#E54545" fill-opacity="1.000000" fill-rule="nonzero" />
                </svg>
                <div>
                  <h6 className="text-sm leading-[150%] font-semibold max-sm:text-[9px]">Пароль скомпрометирован.</h6>
                  <span className="text-sm leading-[150%] font-normal inline-block mt-1 max-sm:text-[9px]">Попытка смены пароля для учетной записи была заблокирована!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <From />
      <Carousel />
    </main>
  )
}

export default page
