'use client'

import Image from "next/image"
import Link from "next/link"

const Footer = () => {

  const Now = new Date().getFullYear()
  const Past = Now - 1

  return (
    <footer className="flex flex-col gap-[2.25rem] mt-20 w-full max-w-[1180px] mx-auto">
      <div className="flex justify-between flex-wrap max-[500px]:justify-around">
        <Link className="max-lg:hidden" href="/">
          <Image src="/logo-gray.svg" alt="logo" width={60} height={60} loading="lazy" />
        </Link>
        <ul className="flex flex-col gap-2">
          <li className="text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">Продукты и решения</li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Strongpass. <span className="max-lg:block">Проактивная защита.</span> </Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Strongpass. <span className="max-lg:block">Самопроверка.</span></Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Almetibin.</Link></li>
        </ul>
        <ul className="flex-col flex gap-[0.6rem]">
          <li className="hidden max-lg:block text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">Информация</li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Скачать</Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Купить</Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Статьи</Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Документация</Link></li>
          <li className="text-base font-medium max-lg:text-sm"><Link href="/#">Контакты</Link></li>
        </ul>
        <ul className="text-right flex flex-col gap-3 max-lg:hidden">
          <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">Коммерческие вопросы:</li>
          <li className="text-base font-medium max-lg:text-sm"><a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a></li>
          <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">Техническая поддержка:</li>
          <li className="text-base font-medium max-lg:text-sm"><a href="mailto:support@strongpass.ru">support@strongpass.ru</a></li>
          <li className="text-base font-semibold text-text-hover max-lg:text-sm"><Link href="#">Написать нам</Link></li>
        </ul>
      </div>
      <ul className="hidden text-right max-lg:flex flex-col gap-3 w-full p-4 bg-gray-100 items-center justify-center rounded-lg">
        <li className="text-base font-medium text-text-gray_custom max-lg:text-[12px]">Коммерческие вопросы:</li>
        <li className="text-base font-medium max-lg:text-sm"><a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a></li>
        <li className="text-base font-medium text-text-gray_custom max-lg:text-[12px]">Техническая поддержка:</li>
        <li className="text-base font-medium max-lg:text-sm"><a href="mailto:support@strongpass.ru">support@strongpass.ru</a></li>
        <li className="text-base font-semibold text-text-hover max-lg:text-sm"><Link href="#">Написать нам</Link></li>
      </ul>
      <div className="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-3">
        <span className="max-lg:text-sm text-text-gray_custom">© {Past}-{Now}</span>
        <a href="#" className="max-lg:text-sm text-text-gray_custom inline-block w-[55%] text-left">Политика конфиденциальности</a>
        <span className="flex gap-3 items-center max-lg:text-sm text-text-gray_custom">Сделано в <Image src="/ruso_logo.svg" alt="logo" width={52} height={11} /></span>
      </div>
    </footer>
  )
}

export default Footer
