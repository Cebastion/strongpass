"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../config/li_legal_landing.css";
import FormQuestion from "../Pop-Up/FormQuestion";

type Props = {};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);

  return (
    <>
      <Header
        isFormQuestion={isFormQuestion}
        setIsFormQuestion={setIsFormQuestion}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      <main
        className={`flex-1 my-14 mt-16 max-md:mt-10 ${
          isFormQuestion || (isFormQuestion && "max-md:hidden")
        }`}
      >
        <h2 className="text-7xl max-[1200px]:px-5  text-center leading-[120%] font-bold max-sm:text-[30px]">
          Проактивная защита <br /> от использования <br /> слабых паролей
        </h2>
        <span className="text-lg max-[1200px]:px-5  leading-[160%] font-normal block mt-[60px] max-w-[780px] w-full mx-auto max-sm:text-base max-sm:px-5 max-sm:mt-10">
          Программа для ЭВМ «Strongpass» (далее - Strongpass) - это инструмент
          проактивной защиты от использования слабых паролей. В момент, когда
          пользователь или администратор пытается установить новый пароль для
          учетной записи, Strongpass проверяет новый пароль на надежность. Если
          пароль по результатам проверок признается небезопасным, то
          пользователь или администратор не сможет установить новый пароль.
          <span className="block mt-2">
            Strongpass не заменяет настройки групповых политик Windows или
            Linux, устанавливающие требования к сложности пароля, а дополняет их
            и предназначен для совместной работы с ними. За счет собственных
            проверок Strongpass позволяет минимальными средствами резко повысить
            сложность атаки на инфраструктуру компании и минимизировать риски
            проникновения с использованием слабых паролей пользователей.
          </span>
          Основные результаты, которые достигаются при использовании Strongpass:
          <ul className="dash-list mt-2">
            <li className="text-lg font-normal leading-[140%] mb-[2px] max-sm:text-base">
              для атакующего резко повышается время подбора пароля. Особенно
              сильно это будет проявляться при онлайн атаках подбора пароля и
              при наличии средств защиты ограничивающих количество запросов в
              единицу времени (rate limit). В зависимости от целей атакующего
              данный вектор может быть признан бесперспективным и атака будет
              прекращена по инициативе самого атакующего;
            </li>
            <li className="text-lg font-normal leading-[140%] max-sm:text-base">
              за счет повышенного количества событий неудачных аутентификаций у
              службы ИБ появляется дополнительное время и данные для обнаружения
              и блокировки атакующего.
            </li>
          </ul>
        </span>
        <div className="max-w-[780px] max-[785px]:px-5  w-full mx-auto mt-10 max-sm:px-5">
          <h5 className="mb-5 text-2xl font-semibold leading-[140%] max-sm:text-[20px]">
            Документы
          </h5>
          <a href="/#" className="font-normal text-text-hover text-lg leading-[160%] underline max-sm:text-base">Описание функциональных характеристик </a>
          <a href="/#" className="font-normal text-text-hover text-lg leading-[160%] underline my-2 block max-sm:text-base">
            Инструкция администратора (включает инструкцию по установке)
          </a>
          <a href="/#" className="font-normal text-text-hover text-lg leading-[160%] underline max-sm:text-base">Информация о процессах разработки и поддержки</a>
        </div>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
