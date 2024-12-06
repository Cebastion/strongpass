"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

type Props = {
  setIsFormQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: FC<Props> = ({ setIsFormQuestion }) => {
  const pathname = usePathname();

  const Now = new Date().getFullYear();
  const Past = Now - 1;

  if (
    pathname === "/legal_landing" ||
    pathname === "/buy" ||
    pathname === "/privacy_policy" ||
    pathname === "/contact" ||
    pathname === "/download" ||
    pathname === '/articles'
  ) {
    return (
      <footer
        className={` w-full border-t border-[#e3e5e5] pb-5 max-lg:px-3 max-sm:px-5`}
      >
        <div className="flex flex-col gap-[2.25rem] max-w-[1180px] mx-auto pt-[60px]">
          <div className="flex justify-between flex-wrap max-[500px]:justify-between">
            <Link className="max-lg:hidden" href="/">
              <Image
                src="/logo-gray.svg"
                alt="logo"
                width={60}
                height={60}
                loading="lazy"
              />
            </Link>
            <ul className="flex flex-col gap-2 pl-10 max-lg:p-0">
              <li className="text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">
                Продукты и решения
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/proactive_protection">
                  Strongpass.{" "}
                  <span className="max-lg:block">Проактивная защита.</span>{" "}
                </Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/self_examination">
                  Strongpass.{" "}
                  <span className="max-lg:block">Самопроверка.</span>
                </Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/almetibin">Almetibin.</Link>
              </li>
            </ul>
            <ul className="flex-col flex gap-[0.6rem] max-sm:pr-10">
              <li className="hidden max-lg:block text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">
                Информация
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/download">Скачать</Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/buy">Купить</Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/articles">Статьи</Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/legal_landing">Документация</Link>
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <Link href="/contact">Контакты</Link>
              </li>
            </ul>
            <ul className="text-right flex flex-col gap-3 max-lg:hidden">
              <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">
                Коммерческие вопросы:
              </li>
              <li className="text-base font-medium  hover:opacity-[0.8] transition-all max-lg:text-sm">
                <a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a>
              </li>
              <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">
                Техническая поддержка:
              </li>
              <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
                <a href="mailto:support@strongpass.ru">support@strongpass.ru</a>
              </li>
              <li
                className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer"
                onClick={() => setIsFormQuestion(true)}
              >
                Написать нам
              </li>
            </ul>
          </div>
          <ul className="hidden text-right max-lg:flex flex-col w-full p-4 bg-bg-custom_gray items-center justify-center rounded-lg">
            <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">
              Коммерческие вопросы:
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm">
              <a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a>
            </li>
            <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">
              Техническая поддержка:
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm">
              <a href="mailto:support@strongpass.ru">support@strongpass.ru</a>
            </li>
            <li
              className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer"
              onClick={() => setIsFormQuestion(true)}
            >
              Написать нам
            </li>
          </ul>
          <div className="flex justify-between items-center max-lg:flex-col max-lg:items-center max-lg:gap-3">
            <span className="max-lg:text-sm text-text-gray_custom">
              © {Past}-{Now}
            </span>
            <a
              href="/privacy_policy"
              className="max-lg:text-sm hover:opacity-[0.8] transition-all text-text-gray_custom underline inline-block w-[55%] text-left max-lg:text-center"
            >
              Политика конфиденциальности
            </a>
            <span className="flex gap-3 items-center hover:opacity-[0.8] transition-all max-lg:text-sm text-text-gray_custom">
              Сделано в{" "}
              <Image
                className="cursor-pointer"
                onClick={() => window.open("http://ruso.ru", "_blank")}
                src="/ruso_logo.svg"
                alt="logo"
                width={52}
                height={11}
              />
            </span>
          </div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer
        className={`flex container  flex-col gap-[2.25rem] w-full max-w-[1180px] mx-auto pb-5 max-lg:px-3 max-sm:px-5`}
      >
        <div className="flex justify-between flex-wrap max-[500px]:justify-between">
          <Link className="max-lg:hidden" href="/">
            <Image
              src="/logo-gray.svg"
              alt="logo"
              width={60}
              height={60}
              loading="lazy"
            />
          </Link>
          <ul className="flex flex-col gap-2 pl-10 max-lg:p-0">
            <li className="text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">
              Продукты и решения
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/proactive_protection">
                Strongpass.{" "}
                <span className="max-lg:block">Проактивная защита.</span>{" "}
              </Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/self_examination">
                Strongpass. <span className="max-lg:block">Самопроверка.</span>
              </Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/almetibin">Almetibin.</Link>
            </li>
          </ul>
          <ul className="flex-col flex gap-[0.6rem] max-sm:pr-10">
            <li className="hidden max-lg:block text-base font-medium text-text-gray_custom mb-2 max-lg:text-sm">
              Информация
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/download">Скачать</Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/buy">Купить</Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/articles">Статьи</Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/legal_landing">Документация</Link>
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
          <ul className="text-right flex flex-col gap-3 max-lg:hidden">
            <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">
              Коммерческие вопросы:
            </li>
            <li className="text-base font-medium  hover:opacity-[0.8] transition-all max-lg:text-sm">
              <a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a>
            </li>
            <li className="text-sm font-medium text-text-gray_custom max-lg:text-sm">
              Техническая поддержка:
            </li>
            <li className="text-base font-medium hover:opacity-[0.8] transition-all max-lg:text-sm">
              <a href="mailto:support@strongpass.ru">support@strongpass.ru</a>
            </li>
            <li
              className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer"
              onClick={() => setIsFormQuestion(true)}
            >
              Написать нам
            </li>
          </ul>
        </div>
        <ul className="hidden text-right max-lg:flex flex-col w-full p-4 bg-bg-custom_gray items-center justify-center rounded-lg">
          <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">
            Коммерческие вопросы:
          </li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm">
            <a href="mailto:contact@strongpass.ru">contact@strongpass.ru</a>
          </li>
          <li className="text-base font-medium text-text-gray_custom mb-[4px] max-lg:text-[12px]">
            Техническая поддержка:
          </li>
          <li className="text-base font-medium hover:opacity-[0.8] transition-all mb-[12px] max-lg:text-sm">
            <a href="mailto:support@strongpass.ru">support@strongpass.ru</a>
          </li>
          <li
            className="text-base font-semibold text-text-hover max-lg:text-sm cursor-pointer"
            onClick={() => setIsFormQuestion(true)}
          >
            Написать нам
          </li>
        </ul>
        <div className="flex justify-between items-center max-lg:flex-col max-lg:items-center max-lg:gap-3">
          <span className="max-lg:text-sm text-text-gray_custom">
            © {Past}-{Now}
          </span>
          <a
            href="/privacy_policy"
            className="max-lg:text-sm hover:opacity-[0.8] transition-all text-text-gray_custom underline inline-block w-[55%] text-left max-lg:text-center"
          >
            Политика конфиденциальности
          </a>
          <span className="flex gap-3 items-center hover:opacity-[0.8] transition-all max-lg:text-sm text-text-gray_custom">
            Сделано в{" "}
            <Image
              className="cursor-pointer"
              onClick={() => window.open("http://ruso.ru", "_blank")}
              src="/ruso_logo.svg"
              alt="logo"
              width={52}
              height={11}
            />
          </span>
        </div>
      </footer>
    );
  }
};

export default Footer;
