'use client'

import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type Props = {
  setIsFormQuestion: React.Dispatch<React.SetStateAction<boolean>>
}


const Footer:FC<Props> = ({setIsFormQuestion}) => {

  const ScrollToForm = () => {
    const form = document.querySelector("#form")
    if(form){
      form.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  const Now = new Date().getFullYear()
  const Past = Now - 1

  return (
    <footer className="flex flex-col gap-[2.25rem] mt-20 w-full max-w-[1180px] mx-auto pb-5 max-lg:px-3 max-md:mt-10">
      <div className="flex justify-between flex-wrap max-[500px]:justify-between">
        <Link className="max-lg:hidden" href="/">
          <Image src="/logo-gray.svg" alt="logo" width={60} height={60} loading="lazy" />
        </Link>
        <ul className="flex flex-col gap-2">
          <li className="text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">Продукты и решения</li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Strongpass. <span className="max-lg:block">Проактивная защита.</span> </Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Strongpass. <span className="max-lg:block">Самопроверка.</span></Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Almetibin.</Link></li>
        </ul>
        <ul className="flex-col flex gap-[0.6rem]">
          <li className="hidden max-lg:block text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">Информация</li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Скачать</Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Купить</Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Статьи</Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Документация</Link></li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><Link href="/#">Контакты</Link></li>
        </ul>
        <ul className="text-right flex flex-col gap-3 max-lg:hidden">
          <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">Коммерческие вопросы:</li>
          <li className="text-base font-medium  hover:opacity-[0.8] transition-all max-lg:text-sm"><a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a></li>
          <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">Техническая поддержка:</li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm"><a href="mailto:support@strongpass.ru">support@strongpass.ru</a></li>
          <li className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer" onClick={() => setIsFormQuestion(true)}>Написать нам</li>
        </ul>
      </div>
      <ul className="hidden text-right max-lg:flex flex-col w-full p-4 bg-bg-custom_gray items-center justify-center rounded-lg">
        <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">Коммерческие вопросы:</li>
        <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm"><a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a></li>
        <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">Техническая поддержка:</li>
        <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm"><a href="mailto:support@strongpass.ru">support@strongpass.ru</a></li>
        <li className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer" onClick={() => setIsFormQuestion(true)}>Написать нам</li>
      </ul>
      <div className="flex justify-between items-center max-lg:flex-col max-lg:items-center max-lg:gap-3">
        <span className="max-lg:text-sm text-text-gray_custom">© {Past}-{Now}</span>
        <a href="#" className="max-lg:text-sm hover:opacity-[0.8] transition-all text-text-gray_custom underline inline-block w-[55%] text-left max-lg:text-center">Политика конфиденциальности</a>
        <span className="flex gap-3 items-center hover:opacity-[0.8] transition-all max-lg:text-sm text-text-gray_custom">Сделано в <Image className="cursor-pointer" onClick={() => window.open("http://ruso.ru", "_blank")} src="/ruso_logo.svg" alt="logo" width={52} height={11} /></span>
      </div>
    </footer>
  )
}

export default Footer
