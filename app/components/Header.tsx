"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import "../animation/button.css";

type Props = {
  setIsFormQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  isFormQuestion: boolean;
  setIsCheckPass?: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckPass?: boolean;
  setIsFormFreeLicense?: React.Dispatch<React.SetStateAction<boolean>>;
  isFormFreeLicense?: boolean;
};

const Header: FC<Props> = ({
  setIsFormQuestion,
  isFormQuestion,
  setIsCheckPass,
  isCheckPass,
  setIsFormFreeLicense,
  isFormFreeLicense,
}) => {
  const [Active, SetActive] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Состояние для dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleToggle = () => {
    SetActive(!Active);
  };

  return (
    <header
  className={`flex container max-w-[1180px] max-[1200px]:px-5 mx-auto justify-between items-center w-full transition-transform duration-300 z-50 
    max-md:z-[70] max-md:pt-[15px] max-lg:m-0 max-lg:px-3 max-md:px-5
    ${Active ? "fixed fixed-header top-[15px] left-0" : ""}
    ${isFormQuestion || isCheckPass || isFormFreeLicense ? "max-md:fixed max-md:bg-white max-md:top-0 max-md:mt-0" : ""}`}
>
      <button
        onClick={handleToggle}
        className="hidden w-[46px] h-[46px] max-lg:flex items-center justify-center bg-teal-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 z-20 relative"
      >
        <div className="space-y-1">
          <span
            className={`block w-5 h-0.5 rounded-xl bg-white transition-transform duration-300 relative ${
              Active ? "rotate-45 top-[6px] " : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 rounded-xl bg-white transition-opacity duration-300 relative ${
              Active ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 rounded-xl bg-white transition-transform duration-300 relative ${
              Active ? "-rotate-45 top-[-6px]" : ""
            }`}
          ></span>
        </div>
      </button>
      <div className="z-20 relative max-lg:mx-auto">
        <Link href="/">
          <Image src="/logo.svg" width={60} height={60} alt="" loading="lazy" />
        </Link>
      </div>
      <div
        className={`${
          Active &&
          "hidden max-lg:block fixed w-full h-screen bg-white top-0 left-0"
        }`}
      ></div>
      <ul
        className={`flex gap-9 mr-32 max-[1110px]:mr-20 max-[1070px]:mr-0 max-lg:gap-0 ${
          Active
            ? "flex z-10 fixed top-[30%] left-0 py-4 max-lg:overflow-y-auto w-full h-full bg-white flex-col items-center justify-start max-lg:max-h-[70vh]"
            : "max-lg:hidden"
        }`}
      >
        <li
          className="relative max-lg:flex max-lg:flex-col py-4 max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:p-5 max-lg:w-[50%]"
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdown}
          onClick={toggleDropdown}
        >
          <span
            className={`font-semibold text-text-primary text-base hover:text-text-hover ${
              isDropdownOpen && "text-text-hover"
            } cursor-pointer max-lg:mb-3 flex gap-2 items-center`}
          >
            <Image
              className="relative left-[7px]"
              src="/menu.svg"
              width={22}
              height={22}
              alt=""
              loading="lazy"
            />
            Продукты
            <svg
              width="10.000000"
              height="6.051514"
              viewBox="0 0 10 6.05151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 ease-in-out transform ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M5 6.05L0 1.05L1.05 0L5 3.94L8.94 0L10 1.05L5 6.05Z"
                fill={isDropdownOpen ? "#408077" : "#262F33"}
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </span>

          {isDropdownOpen && (
            <ul className="absolute left-[-50%] top-12 mt-2 bg-white shadow-lg rounded-xl w-72 max-lg:border max-lg:border-gray-200 z-10 max-lg:relative max-lg:top-0 max-lg:shadow-none max-lg:left-0  max-lg:border-none max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-lg:justify-center">
              <li className="flex  items-center justify-center border-b-2 border-b-gray-50 border-solid h-16 font-semibold text-base hover:bg-text-hover hover:text-white rounded-t cursor-pointer max-lg:border-b-0 max-lg:h-5">
                <Link href="/proactive_protection">Проактивная защита</Link>
              </li>
              <li className="flex  items-center justify-center border-b-2 border-b-gray-50 border-solid h-16 font-semibold text-base hover:bg-text-hover hover:text-white rounded-t cursor-pointer max-lg:border-b-0 max-lg:h-5 max-lg:my-2">
                <Link href="/self_examination">Самопроверка</Link>
              </li>
              <li className="flex  items-center justify-center h-16 font-semibold text-base hover:bg-text-hover hover:text-white rounded-b cursor-pointer max-lg:h-5">
                <Link href="/almetibin">Almetibin</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="font-semibold py-4 text-base text-text-primary hover:text-text-hover cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:w-[50%] max-lg:p-5">
          <Link href="/download">Скачать</Link>
        </li>
        <li className="font-semibold py-4 text-base text-text-primary hover:text-text-hover cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:w-[50%] max-lg:p-5">
          <Link href="/buy">Купить</Link>
        </li>
        <li className="font-semibold py-4 text-base text-text-primary hover:text-text-hover cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:w-[50%] max-lg:p-5">
          <Link href="/articles">Статьи</Link>
        </li>
        <li className="font-semibold py-4 text-base text-text-primary hover:text-text-hover cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:w-[50%] max-lg:p-5">
          <Link href="/legal_landing">Документация</Link>
        </li>
        <li className="font-semibold py-4 text-base text-text-primary hover:text-text-hover cursor-pointer max-lg:flex max-lg:flex-col max-lg:items-center max-lg:border-b max-lg:border-gray-200 max-lg:w-[50%] max-lg:p-5">
          <Link href="/contact">Контакты</Link>
        </li>
      </ul>
      <div className="flex items-center">
        <button
          className="flex items-center button-animation transition-all"
          onClick={() => setIsFormQuestion(true)}
        >
          <div className="px-[24px] py-[10px] font-medium border border-solidborder-borderColor-custom rounded-xl text-base leading-[150%] text-text-hover max-lg:hidden">
            Задать вопрос
          </div>
          <div className="px-[12px] py-[12px] flex justify-center items-center rounded-xl  bg-text-hover max-lg:hidden">
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M18.85 13.62L17.11 13.62L17.11 8.11L6.37 18.85L5.14 17.62L15.88 6.88L10.37 6.88L10.37 5.14L18.85 5.14L18.85 13.62Z"
                fill="#FFFFFF"
                fill-opacity="1.000000"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </button>
        <button
          onClick={() => setIsFormQuestion(true)}
          className="w-12 h-12 rounded-xl bg-gray-100 items-center justify-center hidden max-lg:flex relative z-[11]"
        >
          <svg
            width="24.000000"
            height="24.000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc>Created with Pixso.</desc>
            <defs />
            <path
              id="Vector"
              d="M4.68 5.25L19.31 5.25C20.22 5.25 21 6.02 21 6.93C21 7.5 20.71 7.99 20.29 8.3L12.66 14.03C12.24 14.35 11.71 14.35 11.29 14.03L3.66 8.3C3.24 7.99 3 7.5 3 6.93C3 6.02 3.73 5.25 4.68 5.25ZM3 9.18L10.62 14.95C11.43 15.55 12.52 15.55 13.33 14.95L21 9.18L21 16.5C21 17.76 19.98 18.75 18.75 18.75L5.25 18.75C3.98 18.75 3 17.76 3 16.5L3 9.18Z"
              fill="#408077"
              fill-opacity="1.000000"
              fill-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
