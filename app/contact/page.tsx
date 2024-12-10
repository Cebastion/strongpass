"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../config/start.css";
import FormQuestion from "../Pop-Up/FormQuestion";
import '../config/scroll.css'

type Props = {};

const page = (props: Props) => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);

  useEffect(() => {
    if (isFormQuestion) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Убираем класс при размонтировании компонента
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isFormQuestion]);

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
        <h2 className="text-7xl font-bold leading-[120%] text-center mb-10 max-sm:text-[42px] max-sm:px-5 max-sm:mb-5">
        Контакты
        </h2>
        <span className="text-lg font-normal leading-[160%] text-center block max-w-[580px] mx-auto max-sm:px-5 max-sm:text-base">
        Мы будем благодарны за любую обратную связь и предложения! Вы можете связаться с нами по контактам или заполнив форму.
        </span>
        <div className="max-w-[580px] w-full flex justify-between mx-auto mt-10 max-[500px]:flex-col max-[500px]:gap-y-5 max-[500px]:items-center">
            <div className="w-[280px]">
                <span className="text-sm font-normal leading-[140%] text-center inline-block w-full max-sm:text-xs">Коммерческие вопросы:</span>
                <br />
                <a href="mailto:contact@strongpass.ru" className="text-center text-lg font-semibold leading-[160%]  inline-block w-full max-sm:text-base">contact@strongpass.ru</a>
            </div>
            <div className="w-[280px]">
                <span className="text-sm font-normal leading-[140%] text-center inline-block w-full max-sm:text-xs">Техническая поддержка:</span>
                <br />
                <a href="mailto:support@strongpass.ru" className="text-center text-lg font-semibold leading-[160%]  inline-block w-full max-sm:text-base">support@strongpass.ru</a>
            </div>
        </div>
        <section className="mt-20 max-sm:mt-[60px]">
            <h4 className="font-semibold text-[32px] leading-[130%] text-center max-sm:text-[22px]">Форма обратной связи</h4>
        <form
          onSubmit={handleSubmit}
          className="p-9 flex flex-col gap-y-5 max-lg:gap-[8px] mx-auto max-lg:m-0 rounded-[48px] max-sm:p-4 max-sm:rounded-3xl bg-white w-[580px] max-lg:mx-auto max-[580px]:w-full max-[580px]:h-h-auto"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Фамилия Имя Отчество"
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom
          ${
            errors.name
              ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
              : "border-[#e3e5e5] placeholder-[#7a7e80]"
          }
        `}
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom
          ${
            errors.name
              ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
              : "border-[#e3e5e5] placeholder-[#7a7e80]"
          }
        `}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom
          ${
            errors.name
              ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
              : "border-[#e3e5e5] placeholder-[#7a7e80]"
          }
        `}
          />

          <textarea
            required
            name="comment"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={handleChange}
            className={`w-full resize-none h-[174px] py-3 px-6 text-text-form rounded-xl border text-lg font-normal target:border-borderColor-custom 
          ${
            errors.comment
              ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
              : "border-[#e3e5e5] placeholder-[#7a7e80]"
          }
        `}
          ></textarea>

          <button className="flex button-animation justify-between items-center mt-[10px] max-lg:m-0">
            <div className="w-[93%] py-3 border border-solid border-borderColor-custom rounded-xl font-medium text-lg text-text-hover transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary max-lg:w-[94%]">
              Отправить
            </div>
            <div className="h-14 w-14 max-[500px]:p-[0.8rem] flex items-center justify-center rounded-xl bg-text-hover hover:bg-bg-hover_primary transition-all">
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
          <span className="text-base font-normal text-center text-gray-400 max-sm:text-sm">
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
        </form>
        </section>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
