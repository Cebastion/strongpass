import React, { FC, useState } from "react";
import "../config/scrollbar.css"

type Props = {
  setIsFormQuestion: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormQuestion: FC<Props> = ({ setIsFormQuestion }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    comment: false,
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
      phone: !formData.phone.trim(),
      comment: !formData.comment.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Данные формы:", formData);
      alert("Форма отправлена!");
    }
  };
  return (
    <>
      <div
        onClick={() => setIsFormQuestion(false)}
        className="fixed top-0 z-[60] left-0 w-full h-full bg-[#262f33] opacity-[0.75]"
      ></div>
      <div
        className="fixed top-4 z-[60] right-4 w-[57px] h-[57px] rounded-xl bg-bg-custom_green hover:bg-[#1B6B60] transition-all flex justify-center items-center cursor-pointer max-md:hidden"
        onClick={() => setIsFormQuestion(false)}
      >
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.1938 10.2938L16.9875 15.5L22.1938 20.7063C22.6021 21.2021 22.6021 21.6979 22.1938 22.1938C21.6979 22.6021 21.2021 22.6021 20.7063 22.1938L15.5 16.9875L10.2938 22.1938C9.79792 22.6021 9.30208 22.6021 8.80625 22.1938C8.39792 21.6979 8.39792 21.2021 8.80625 20.7063L14.0125 15.5L8.80625 10.2938C8.39792 9.79792 8.39792 9.30208 8.80625 8.80625C9.30208 8.39792 9.79792 8.39792 10.2938 8.80625L15.5 14.0125L20.7063 8.80625C21.2021 8.39792 21.6979 8.39792 22.1938 8.80625C22.6021 9.30208 22.6021 9.79792 22.1938 10.2938Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="fixed top-1/2 overflow-y-scroll sclrollbar max-h-[836px] h-full max-md:max-h-full z-[60] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[36px] p-16 w-[580px] max-md:rounded-none max-md:w-full max-md:h-full max-md:p-5 max-md:overflow-y-scroll">
        <div
          className="fixed hidden max-md:flex top-24 z-[70] right-0 w-[57px] h-[57px] justify-center items-center cursor-pointer"
          onClick={() => setIsFormQuestion(false)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6938 9.79375L16.4875 15L21.6938 20.2063C22.1021 20.7021 22.1021 21.1979 21.6938 21.6938C21.1979 22.1021 20.7021 22.1021 20.2063 21.6938L15 16.4875L9.79375 21.6938C9.29792 22.1021 8.80208 22.1021 8.30625 21.6938C7.89792 21.1979 7.89792 20.7021 8.30625 20.2063L13.5125 15L8.30625 9.79375C7.89792 9.29792 7.89792 8.80208 8.30625 8.30625C8.80208 7.89792 9.29792 7.89792 9.79375 8.30625L15 13.5125L20.2063 8.30625C20.7021 7.89792 21.1979 7.89792 21.6938 8.30625C22.1021 8.80208 22.1021 9.29792 21.6938 9.79375Z"
              fill="#262F33"
            />
          </svg>
        </div>
        <h3 className="text-5xl font-bold leading-[120%] mb-3 max-md:mt-28 max-md:text-[26px] max-[355px]:w-[290px]">
          Задать вопрос
        </h3>
        <span className="text-lg font-normal leading-[160%] max-md:text-base max-[355px]:inline-block max-[355px]:w-[290px]">
          Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время
          и ответит на все вопросы.
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[0.75rem] mt-8 max-[355px]:w-[290px]"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Фамилия Имя Отчество"
            value={formData.name}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
              errors.name
                ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                : "border-gray-300"
            }`}
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg  text-text-form font-normal target:border-borderColor-custom ${
              errors.email
                ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                : "border-gray-300"
            }`}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full py-3 px-6 rounded-xl border text-lg text-text-form font-normal target:border-borderColor-custom ${
              errors.phone
                ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                : "border-gray-300"
            }`}
          />

          <textarea
            required
            name="comment"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={handleChange}
            className={`w-full resize-none h-[174px] py-3 px-6 text-text-form rounded-xl border text-lg font-normal target:border-borderColor-custom ${
              errors.comment
                ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                : "border-gray-300"
            }`}
          ></textarea>

          <button className="flex button-animation justify-between items-center mt-[13px] mr-[7px] max-lg:m-0">
            <div className="w-full py-3 border border-solid border-borderColor-custom rounded-xl font-medium text-lg text-text-hover transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">
              Отправить
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
          <span className="text-sm font-normal text-center text-gray-400 mt-4">
            Нажимая кнопку «Отправить», вы даете свое конкретное,
            информированное и сознательное согласие на обработку и хранение
            ваших персональных данных и соглашаетесь с 
            <a
              href="/privacy_policy"
              className="text-text-hover hover:text-text-hover_primary transition-all"
            >
              Политикой конфиденциальности
            </a>
            .
          </span>
        </form>
      </div>
    </>
  );
};

export default FormQuestion;
