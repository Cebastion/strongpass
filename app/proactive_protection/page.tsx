'use client'
import Image from "next/image"
import Carousel from "../components/Carousel"
import From from "../components/From"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from "react"
import FormQuestion from "../Pop-Up/FormQuestion"

const page = () => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);

  return (
    <>
    <Header isFormQuestion={isFormQuestion} setIsFormQuestion={setIsFormQuestion} />
    <main className="flex-1 my-14 ">
    {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      <section className="flex max-w-[1180px] mx-auto justify-between max-md:mx-3 max-lg:flex-col-reverse max-lg:items-center">
        <div className="max-w-[680px] flex flex-col justify-center max-lg:text-center max-lg:mt-6">
          <h1 className="text-6xl leading-[120%] font-bold max-lg:text-center max-md:text-3xl">Проактивная защита от использования слабых паролей</h1>
          <p className="text-lg mt-5 leading-[160%] font-normal max-lg:text-center max-md:text-base">При наличии индивидуального списка запрещенных паролей, составленного внутри компании, проводятся дополнительные проверки. На основании проверки разрешается или запрещается установка нового пароля.</p>
          <div className="flex items-center mt-10 max-lg:justify-center">
            <button className="w-72 h-14 text-text-hover border border-solid border-borderColor-custom rounded-xl text-lg font-semibold max-md:w-64 max-md:text-base transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">Попробовать бесплатно</button>
            <button className="w-14 h-14 flex items-center justify-center rounded-xl bg-text-hover hover:bg-bg-hover_primary transition-all">
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
      <section className="mt-20 max-w-[780px] mx-auto flex justify-between max-md:mx-3 items-center max-[800px]:flex-col max-[800px]:gap-5">
        <Image width={285} height={48} alt="image" src="/image_2.png" loading="lazy" />
        <Image width={178} height={48} alt="image" src="/image_1.png" loading="lazy" />
        <Image width={194} height={44} alt="image" src="/image_3.png" loading="lazy" />
      </section>
      <section className="mt-[120px] flex justify-between items-center max-w-[1180px] mx-auto max-[1100px]:flex-col-reverse  max-md:mx-3 max-[600px]:px-3">
        <div className="flex justify-end items-end h-[580px] w-full max-w-[580px] relative bg-gray-100 rounded-[36px] overflow-hidden max-[1100px]:mt-4 max-[500px]:w-[320px] max-[500px]:h-[320px]">
          <Image className="absolute top-10 left-16 w-[866px] h-[460px] max-[500px]:w-[478px] max-[500px]:h-[253px] max-[500px]:top-6 max-[500px]:left-6" src='/bg_2.png' width={866} height={460} loading="lazy" alt="" />
          <div className="h-[117px] w-[334px] bg-[url('/mask/mask_3.svg')] flex justify-end items-end pr-3 pb-2 max-[500px]:relative max-[500px]:z-10">
            <button className="text-lg font-semibold text-text-hover leading-[160%] border border-solid border-borderColor-hover rounded-xl px-5 py-3 transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">Смотреть видео</button>
            <button className="bg-bg-custom_green rounded-xl w-[57px] h-[57px] flex items-center justify-center hover:bg-bg-hover_primary transition-all">
              <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <desc>
                  Created with Pixso.
                </desc>
                <defs />
                <path id="Vector" d="M9.04 4.95L21.04 12.29C21.65 12.7 21.97 13.27 22 14C21.97 14.75 21.65 15.31 21.04 15.7L9.04 23.04C8.37 23.43 7.7 23.44 7.04 23.08C6.37 22.69 6.02 22.11 6 21.33L6 6.66C6.02 5.88 6.37 5.3 7.04 4.91C7.7 4.55 8.37 4.56 9.04 4.95Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-[480px]">
          <h3 className="text-6xl font-bold leading-[120%] text-left max-[1100px]:text-3xl">Как это работает?</h3>
          <span className="text-lg font-normal leading-[160%] text-left mt-6 inline-block max-[1100px]:text-base">В момент попытки установить новый пароль инициируется проверка надежности пароля с помощью Strongpass. Проверка производится по более чем 866 миллионам слабых паролей. При наличии индивидуального списка запрещенных паролей, составленного внутри компании, проводятся дополнительные проверки. На основании проверки разрешается или запрещается установка нового пароля. Strongpass должен быть установлен на всех контроллерах домена (Windows, Linux), кроме read-only контроллеров. Для работы приложения права доменного администратора не требуются.</span>
        </div>
      </section>
      <section className="max-w-[1180px] mx-auto mt-20 max-md:mx-3">
        <h3 className="text-6xl font-bold leading-[120%] text-left mb-16 max-md:text-3xl max-md:mb-7">Почему нужен <p className="text-text-hover">Strongpass <span>?</span></p></h3>
        <div className="w-full flex justify-between gap-5 max-lg:flex-col">
          <div className="bg-bg-custom_gray rounded-3xl p-12 w-[50%] max-lg:w-full max-lg:flex max-lg:flex-col">
            <Image src='/image_6.png' width={484} height={320} loading="lazy" alt="" />
            <h4 className="text-3xl font-semibold leading-[130%] text-left mt-6 mb-4 max-md:text-[22px]">Подбор паролей — одна из самых результативных атак</h4>
            <span className="text-lg font-normal leading-[160%] text-left max-md:text-base">По данным отчетов компаний <span className="underline text-text-hover cursor-pointer">Позитив Текнолоджиз</span> и <span className="underline text-text-hover cursor-pointer">Лаборатории Касперского</span> атаки подбора пароля были успешны в 71% случаев при проникновении во внутреннюю сеть компании снаружи и в 58% при получении максимальных привилегий. Причина такой высокой успешности атак - слабые или скомпрометированные пароли.</span>
          </div>
          <div className="bg-bg-custom_gray rounded-3xl p-12 w-[50%] max-lg:w-full max-lg:flex max-lg:flex-col">
            <Image src='/image_5.png' width={484} height={320} loading="lazy" alt="" />
            <h4 className="text-3xl font-semibold leading-[130%] text-left mt-6 mb-4 max-md:text-[22px]">Возможности групповых политик недостаточны</h4>
            <span className="text-lg font-normal leading-[160%] text-left max-md:text-base">Групповые политики позволяют настроить минимальную длину пароля, наличие букв, цифр, специальных символов. Однако, это не мешает пользователям создавать пароли, отвечающие требованиям политик, но при этом быть легко угадываемыми или часто используемыми. </span>
          </div>
        </div>
        <div className="mt-5 bg-bg-custom_gray rounded-3xl p-12 flex justify-between items-center max-lg:flex-col">
            <div className="max-w-[532px] max-lg:max-w-full">
              <h4 className="text-3xl font-semibold leading-[130%] text-left mb-4 max-md:text-[22px]">Скомпрометированные пароли</h4>
              <span className="text-lg font-normal leading-[160%] text-left max-md:text-base">Скомпрометированный пароль - это пароль, ставший известным в результате публичной утечки. Такой пароль, нельзя больше использовать, даже если он сложный. Злоумышленники знают, что один и тот же пароль часто используется повторно и используют это в атаках. При использовании публичных утечек время подбора скомпрометированного пароля будет исчисляться минутами.</span>
            </div>
            <Image className="max-md:mt-6" src='/image_4.png' width={484} height={320} loading="lazy" alt="" />
          </div>
      </section>
      <section className="max-w-[1180px] mx-auto mt-20 max-md:mx-3">
        <h3 className="text-6xl font-bold leading-[120%] text-left mb-16 max-md:text-3xl max-md:mb-7">Преимущества</h3>
        <div>
        <div className="flex justify-between max-[1160px]:flex-col max-[1160px]:gap-8 max-[1160px]:items-center">
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/shield.png 1x, /shield@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Проактивная защита</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Проверка проводится в момент установки нового пароля. Новый пароль будет установлен только, если он соответствует всем требованиям</span>
          </div>
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/internet.png 1x, /internet@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Не требуется доступ в интернет</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Все проверки проводятся локально, без использования облачных сервисов. Пароли никогда не покидают ваши сервера.</span>
          </div>
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/database.png 1x, /database@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Большая база паролей</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Для проверки используется постоянно пополняемая база, содержащая на текущий момент более 866 миллионов паролей, которые встречались в публичных утечках.</span>
          </div>
        </div>
        <div className="flex justify-between mt-16 max-[1160px]:flex-col max-[1160px]:gap-8 max-[1160px]:items-center max-[1160px]:mt-8">
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/sliders.png 1x, /sliders@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Минимальные затраты на управление</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Все настройки хранятся в текстовых файлах. Изменения применяются без перезагрузки сервера. Текстовый формат конфигурационных файлов позволяет легко автоматизировать управление.</span>
          </div>
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/pass-2.png 1x, /pass-2@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Индивидуальные политики</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Возможность указать свой индивидуальный список паролей, которые не должны считаться надежными. Исключение из проверок пользователей, паролей, групп пользователей.</span>
          </div>
          <div className="w-96 flex flex-col gap-6">
            <div className="w-20 h-20 bg-bg-custom_green rounded-2xl flex justify-center items-center">
              <img srcSet="/laptop.png 1x, /laptop@2x.png 2x" width={36} height={36} loading="lazy" alt="" />
            </div>
            <h3 className="text-[32px] font-semibold leading-[130%] text-left">Интеграция с Windows и Свпях</h3>
            <span className="text-lg font-normal leading-[160%] text-left">Приложение работает как с Windows (Active Directory), так и с Linux (FreeIPA, ALD Pro). Контролируются все методы установки пароля администраторами и пользователями.</span>
          </div>
        </div>
        </div>
      </section>
      <section className="bg-bg-custom_gray py-10 mt-20 rounded-[48px]">
  <div className="max-w-6xl mx-auto px-4">
    {/* Заголовок */}
    <h2 className="text-3xl font-semibold text-center mb-8">
      Сравнение с групповыми политиками
    </h2>

    {/* Таблица */}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-md">
        {/* Заголовок таблицы */}
        <thead>
          <tr className="bg-bg-custom_gray border-b bg-bg-custom_gray">
            <th className="py-4 px-6 text-left bg-bg-custom_gray font-medium">Функциональность</th>
            <th className="py-4 px-6 text-center bg-bg-custom_gray font-medium">Strongpass</th>
            <th className="py-4 px-6 text-center bg-bg-custom_gray font-medium">Групповые политики</th>
          </tr>
        </thead>

        {/* Тело таблицы */}
        <tbody>
          <tr className="border-b bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Требование использовать в пароле все 4 типа символов (символы в нижнем и верхнем регистре, цифры, спец. символы)
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
          <tr className="bg-bg-custom_gray border-b bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Запрет использования пароля из публичных утечек
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
          <tr className="border-b bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Собственный список запрещенных слов
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
          <tr className="bg-bg-custom_gray border-b bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Запрет повторяющихся символов («1111», «bbbb» и т.д.)
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
          <tr className="border-b bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Запрет последовательных символов («1234», «abcd» и т.д.)
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
          <tr className="bg-bg-custom_gray">
            <td className="py-3 px-6 bg-bg-custom_gray">
              Запрет последовательностей символов, расположенных на соседних клавишах («qwerty», «qazxcvb» и т.д.)
            </td>
            <td className="py-3 px-6 text-center text-green-600">✔</td>
            <td className="py-3 px-6 text-center text-red-600">✘</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

      <From />
      <Carousel />
    </main>
    <Footer setIsFormQuestion={setIsFormQuestion}/>
    </>
  )
}

export default page
