"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../config/start.css'
import FormQuestion from "../Pop-Up/FormQuestion";

type Props = {};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Какие существуют версии продукта и чем они отличаются?",
      answer:
        "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
    },
    {
      question: "Как лицензируется продукт?",
      answer:
        "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
    },
    {
      question: "Что произойдет после окончания тестового периода?",
      answer:
        "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
    },
    {
      question: "Что требуется для установки Strongpass?",
      answer:
        "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
    },
    {
      question: "Каким способом можно оплатить лицензию?",
      answer:
        "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
    },
    {
        question: "Как поставляется продукт и лицензия?",
        answer:
          "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
      },
      {
        question: "Как осуществляется техническая поддержка?",
        answer:
          "Для установки Strongpass требуются права доменного администратора. Продукт устанавливается на все контроллеры домена кроме read-only контроллеров. Так же возможно тестирование продукта на недоменной машине.",
      },
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Spoiler = () => {
    return (
      <div className="absolute hidden group-hover:block p-5 rounded-2xl shadow-lg bg-white w-[532px] -top-[25rem] max-md:-top-[25.5rem] max-[535px]:-top-[35.5rem] -right-[16.9rem] max-md:-right-[31rem] max-[535px]:w-[300px] max-[535px]:-right-[16rem]">
        <span className="font-normal text-base leading-[150%] max-[535px]:text-sm">
          Для расчета стоимости лицензии нам необходимо знать количество
          активных учетных записей, которые вы хотите защитить.
          <p>
            Количество защищаемых учетных записей можно получить выполнив на
            контроллере домена команду:
          </p>
        </span>
        <br />
        <span className="font-normal text-base leading-[150%] max-[535px]:text-sm">
          в Windows (powershell):
        </span>
        <div className="flex justify-between bg-[#f2f5f4] px-[12px] py-[6px] rounded-lg mt-[10px]">
          <span className="font-normal text-base leading-[150%] max-[535px]:text-sm">
            get-aduser -filter *|where ${`{$_.enabled -eq True})`}.count
          </span>
          <svg
            onClick={async () => {
              await navigator.clipboard.writeText(
                "get-aduser -filter *|where {$_.enabled -eq True}).count"
              );
            }}
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4H18C18.5625 4.02083 19.0312 4.21875 19.4062 4.59375C19.7812 4.96875 19.9792 5.4375 20 6V13C19.9792 13.5625 19.7812 14.0312 19.4062 14.4062C19.0312 14.7812 18.5625 14.9792 18 15H11C10.4375 14.9792 9.96875 14.7812 9.59375 14.4062C9.21875 14.0312 9.02083 13.5625 9 13V6C9.02083 5.4375 9.21875 4.96875 9.59375 4.59375C9.96875 4.21875 10.4375 4.02083 11 4ZM6 9H8V10.5H6C5.6875 10.5208 5.52083 10.6875 5.5 11V18C5.52083 18.3125 5.6875 18.4792 6 18.5H13C13.3125 18.4792 13.4792 18.3125 13.5 18V16H15V18C14.9792 18.5625 14.7812 19.0312 14.4062 19.4062C14.0312 19.7812 13.5625 19.9792 13 20H6C5.4375 19.9792 4.96875 19.7812 4.59375 19.4062C4.21875 19.0312 4.02083 18.5625 4 18V11C4.02083 10.4375 4.21875 9.96875 4.59375 9.59375C4.96875 9.21875 5.4375 9.02083 6 9Z"
              fill="#408077"
            />
          </svg>
        </div>
        <br />
        <span className="font-normal text-base leading-[150%] max-[535px]:text-sm">
          в Linux:
        </span>
        <div className="flex justify-between bg-[#f2f5f4] px-[12px] py-[6px] rounded-lg items-center mt-[10px]">
          <span className="font-normal text-base leading-[150%] max-w-[434px] max-[535px]:text-sm max-[535px]:max-w-[100px]">
            ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b
            ou=people,<br className="hidden max-[535px]:block" /> dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc
            -l
          </span>
          <svg
            onClick={async () => {
              await navigator.clipboard.writeText(
                'ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc -l'
              );
            }}
            className="cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4H18C18.5625 4.02083 19.0312 4.21875 19.4062 4.59375C19.7812 4.96875 19.9792 5.4375 20 6V13C19.9792 13.5625 19.7812 14.0312 19.4062 14.4062C19.0312 14.7812 18.5625 14.9792 18 15H11C10.4375 14.9792 9.96875 14.7812 9.59375 14.4062C9.21875 14.0312 9.02083 13.5625 9 13V6C9.02083 5.4375 9.21875 4.96875 9.59375 4.59375C9.96875 4.21875 10.4375 4.02083 11 4ZM6 9H8V10.5H6C5.6875 10.5208 5.52083 10.6875 5.5 11V18C5.52083 18.3125 5.6875 18.4792 6 18.5H13C13.3125 18.4792 13.4792 18.3125 13.5 18V16H15V18C14.9792 18.5625 14.7812 19.0312 14.4062 19.4062C14.0312 19.7812 13.5625 19.9792 13 20H6C5.4375 19.9792 4.96875 19.7812 4.59375 19.4062C4.21875 19.0312 4.02083 18.5625 4 18V11C4.02083 10.4375 4.21875 9.96875 4.59375 9.59375C4.96875 9.21875 5.4375 9.02083 6 9Z"
              fill="#408077"
            />
          </svg>
        </div>
        <svg
          className="absolute right-1/2 translate-y-[-50%] bottom-[-19px] max-md:bottom-[-29px] max-md:right-[93%] max-[535px]:right-[83%] "
          width="28"
          height="20"
          viewBox="0 0 28 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 20L0 0L28 2.01894e-06L14 20Z" fill="#FAFCFC" />
        </svg>
      </div>
    );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    company: "",
    account: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    comment: false,
    company: false,
    account: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      account: !formData.account.trim(),
      comment: !formData.comment.trim(),
      company: !formData.company.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Данные формы:", formData);
      alert("Форма отправлена!");
    }
  };


  const formatPhoneNumber = (value: any) => {
    const cleaned = value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (cleaned.length <= 1) {
      return `+${cleaned}`;
    }
    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    } else {
      // Строим номер частично, если пользователь еще не закончил ввод
      if (cleaned.length <= 4) return `+7 (${cleaned.slice(1)}`;
      if (cleaned.length <= 7)
        return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4)}`;
      if (cleaned.length <= 9)
        return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(
          7
        )}`;
      return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(
        7,
        9
      )}-${cleaned.slice(9, 11)}`;
    }
  };

  const handleChangePhone = (e: any) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedValue });
  };

  return (
    <>
      <Header
        isFormQuestion={isFormQuestion}
        setIsFormQuestion={setIsFormQuestion}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      <main
        className={`flex-1 my-14 ${
          isFormQuestion || (isFormQuestion && "max-md:hidden")
        }`}
      >
        <h2 className="text-7xl font-bold leading-[120%] text-center mb-10 max-sm:text-[42px] max-sm:px-5 max-sm:mb-5">
          Купить
        </h2>
        <span className="text-lg font-normal leading-[160%] text-center block max-w-[580px] mx-auto max-sm:px-5 max-sm:text-base">
          Пожалуйста, отправьте нам заявку, чтобы получить расчет. Если у вас
          есть вопросы о лицензировании, мы будем рады помочь.
          <span className="inline-block mt-3">
            Вы можете заполнить форму или написать нам по адресу{" "}
            <a
              href="mailto:contact@strongpass.ru"
              className="text-text-hover underline"
            >
              contact@strongpass.ru
            </a>{" "}
            и наш менеджер свяжется с вами
          </span>
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-5 max-w-[780px] mx-auto mt-[60px] w-full max-[785px]:px-5 max-sm:mt-10 max-sm:gap-y-4"
        >
          <div className="flex w-full justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Контактное лицо <span className="start">*</span>
            </span>
            <input
              required
              type="text"
              name="name"
              placeholder="Фамилия Имя Отчество"
              value={formData.name}
              onChange={handleChange}
              className={`w-[480px] max-[785px]:w-full max-sm:text-base  py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
                errors.name
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex w-full justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Компания <span className="start">*</span>
            </span>
            <input
              required
              type="text"
              name="email"
              placeholder="Название или ссылка на сайт"
              value={formData.company}
              onChange={handleChange}
              className={`w-[480px] max-[785px]:w-full max-sm:text-base  py-3 px-6 rounded-xl border text-lg  text-text-form font-normal target:border-borderColor-custom ${
                errors.company
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            />
          </div>

          <div className="flex w-full justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Электронная почта <span className="start">*</span>
            </span>
            <input
              required
              type="email"
              name="name"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={handleChange}
              className={`w-[480px] max-[785px]:w-full max-sm:text-base py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
                errors.email
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            />
          </div>

          <div className="flex w-full justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Телефон
            </span>
            <input
              type="tel"
              name="name"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => { handleChangePhone(e)}}
              className={`w-[480px] max-[785px]:w-full max-sm:text-base py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom`}
            />
          </div>

          <div className="flex w-full  justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Кол-во учетных записей <span className="start">*</span>
            </span>
            <div className="flex flex-col">
            <input
              required
              type="text"
              name="name"
              placeholder="10"
              value={formData.account}
              onChange={handleChange}
              className={`w-[480px] max-[785px]:w-full  py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
                errors.account
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            />
            <div className="flex gap-x-[5px] pt-[8px]">
              <div className="relative group">
                <Spoiler />
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5.3125C9.96094 5.3125 9.01302 5.56771 8.15625 6.07812C7.29948 6.57031 6.60677 7.26302 6.07812 8.15625C5.56771 9.04948 5.3125 9.9974 5.3125 11C5.3125 12.0026 5.56771 12.9505 6.07812 13.8438C6.60677 14.737 7.29948 15.4297 8.15625 15.9219C9.01302 16.4323 9.96094 16.6875 11 16.6875C12.0391 16.6875 12.987 16.4323 13.8438 15.9219C14.7005 15.4297 15.3932 14.737 15.9219 13.8438C16.4323 12.9505 16.6875 12.0026 16.6875 11C16.6875 9.9974 16.4323 9.04948 15.9219 8.15625C15.3932 7.26302 14.7005 6.57031 13.8438 6.07812C12.987 5.56771 12.0391 5.3125 11 5.3125ZM11 18C9.72396 17.9818 8.55729 17.6719 7.5 17.0703C6.44271 16.4505 5.58594 15.5938 4.92969 14.5C4.3099 13.388 4 12.2214 4 11C4 9.77865 4.3099 8.61198 4.92969 7.5C5.58594 6.40625 6.44271 5.54948 7.5 4.92969C8.55729 4.32812 9.72396 4.01823 11 4C12.276 4.01823 13.4427 4.32812 14.5 4.92969C15.5573 5.54948 16.4141 6.40625 17.0703 7.5C17.6901 8.61198 18 9.77865 18 11C18 12.2214 17.6901 13.388 17.0703 14.5C16.4141 15.5938 15.5573 16.4505 14.5 17.0703C13.4427 17.6719 12.276 17.9818 11 18ZM9.90625 13.1875H10.5625V11.4375H9.90625C9.50521 11.401 9.28646 11.1823 9.25 10.7812C9.28646 10.3802 9.50521 10.1615 9.90625 10.125H11.2188C11.6198 10.1615 11.8385 10.3802 11.875 10.7812V13.1875H12.0938C12.4948 13.224 12.7135 13.4427 12.75 13.8438C12.7135 14.2448 12.4948 14.4635 12.0938 14.5H9.90625C9.50521 14.4635 9.28646 14.2448 9.25 13.8438C9.28646 13.4427 9.50521 13.224 9.90625 13.1875ZM11 9.25C10.7448 9.25 10.5352 9.16797 10.3711 9.00391C10.207 8.83984 10.125 8.63021 10.125 8.375C10.125 8.11979 10.207 7.91016 10.3711 7.74609C10.5352 7.58203 10.7448 7.5 11 7.5C11.2552 7.5 11.4648 7.58203 11.6289 7.74609C11.793 7.91016 11.875 8.11979 11.875 8.375C11.875 8.63021 11.793 8.83984 11.6289 9.00391C11.4648 9.16797 11.2552 9.25 11 9.25Z"
                    fill="#7A7E80"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium leading-[140%] text-[#7a7e80]">
                Как посчитать количество учетных записей?
              </span>
            </div>
            </div>
          </div>

          <div className="flex w-full  justify-between max-[785px]:flex-col">
            <span className="text-base leading-[150%] font-normal pb-[8px] w-[280px] inline-block">
              Комментарий <span className="start">*</span>
            </span>
            <textarea
              required
              name="comment"
              placeholder="Дополнительная информация"
              value={formData.comment}
              onChange={handleChange}
              className={`w-[480px] max-[785px]:w-full max-sm:text-base resize-none h-[146px] py-3 px-6 text-text-form rounded-xl border text-lg font-normal target:border-borderColor-custom ${
                errors.comment
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            ></textarea>
          </div>

          <div className="w-full flex flex-col items-end">
          <div className="flex flex-col w-[480px] max-[785px]:w-full ">
          <button className="flex button-animation  items-center mr-[7px] max-lg:m-0">
            <div className="w-[230px] max-[785px]:w-full py-3 border border-solid border-borderColor-custom rounded-xl font-medium text-lg text-text-hover transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">
              Отправить заявку
            </div>
            <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-text-hover transition-all">
              <svg
                width="28.000000"
                height="28.000000"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M22 15.89L19.97 15.89L19.97 9.46L7.43 22L6 20.56L18.53 8.02L12.1 8.02L12.1 6L22 6L22 15.89Z"
                  fill="#FFFFFF"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </button>
          <span className="text-base font-normal text-left text-gray-400 mt-4 max-sm:text-sm">
            Нажимая кнопку «Отправить», вы даете свое конкретное,
            информированное и сознательное согласие на обработку и хранение
            ваших персональных данных и соглашаетесь с{" "}
            <a
              href="/privacy_policy"
              className="text-text-hover underline hover:text-text-hover_primary transition-all"
            >
              Политикой конфиденциальности
            </a>
            .
          </span>
          </div>
          </div>
        </form>
        <section className="mt-[120px] max-w-[780px] mx-auto max-sm:px-5 max-[785px]:max-w-full max-[785px]:px-5">
          <h3 className="font-bold text-[48px] leading-[120%] text-center mb-[60px] max-md:text-[26px]">
            Часто задаваемые вопросы
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-t overflow-hidden`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex gap-2 items-center pt-4"
                >
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8417 14L10.8417 22L9.15918 20.3175L15.4767 14L9.15918 7.68247L10.8417 6L18.8417 14Z"
                        fill="#408077"
                      />
                    </svg>
                  </span>
                  <span className="text-[20px] font-semibold leading-[140%] max-sm:text-lg">{faq.question}</span>
                </button>
                {activeIndex === index && (
                  <div className="pl-[35px] pt-[18px]">
                    <p className="text-lg leading-[160%] font-normal max-md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
