import Image from "next/image"
import { useState } from "react";
import '../animation/button.css'

const From = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    comment: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      console.log('Данные формы:', formData);
      alert('Форма отправлена!');
    }
  };

  return (
    <section id="form" className="mt-40 h-[682px] max-lg:h-auto bg-bg-custom_green rounded-[48px] max-sm:rounded-3xl p-10 max-[500px]:p-2 max-[500px]:py-4 flex justify-between max-lg:flex-col">
      <div className="flex flex-col justify-between px-[19px] py-[10px] max-sm:p-0">
        <div className="pt-[5px] pl-[5px]">
        <h3 className="text-6xl font-bold text-white mb-5 max-lg:text-[48px] max-sm:text-[27px] hidden max-lg:inline-block">Остались вопросы?</h3>
          <h3 className="text-6xl font-bold text-white mb-5 max-lg:text-[48px] max-lg:hidden">Остались <p className="mt-2 text-white max-lg:hidden">вопросы?</p></h3>
          <span className="text-base text-white">Заполните форму и наши специалисты <p className="mt-1 text-white">свяжутся с вами в ближайшее время.</p></span>
        </div>
        <div className="flex gap-2 pb-[5px] pl-[5px] max-lg:my-10">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white">
            <svg width="20.000000" height="15.000000" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs />
              <path id="Vector" d="M2.5 1.87C2.1 1.9 1.9 2.1 1.87 2.5L1.87 3.35L8.63 8.9C9.04 9.21 9.5 9.37 10 9.37C10.52 9.37 10.98 9.21 11.4 8.9L18.12 3.35L18.12 2.5C18.09 2.1 17.89 1.9 17.5 1.87L2.5 1.87ZM1.87 5.78L1.87 12.5C1.9 12.89 2.1 13.09 2.5 13.12L17.5 13.12C17.89 13.09 18.09 12.89 18.12 12.5L18.12 5.78L12.57 10.35C11.79 10.95 10.93 11.25 10 11.25C9.06 11.25 8.2 10.95 7.42 10.35L1.87 5.78ZM0 2.5C0.02 1.79 0.27 1.21 0.74 0.74C1.21 0.27 1.79 0.02 2.5 0L17.5 0C18.2 0.02 18.78 0.27 19.25 0.74C19.72 1.21 19.97 1.79 20 2.5L20 12.5C19.97 13.2 19.72 13.78 19.25 14.25C18.78 14.72 18.2 14.97 17.5 15L2.5 15C1.79 14.97 1.21 14.72 0.74 14.25C0.27 13.78 0.02 13.2 0 12.5L0 2.5Z" fill="#3C0F3C" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
          </div>
          <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white">
            <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <desc>
                Created with Pixso.
              </desc>
              <defs>
                <clipPath id="clip75_859">
                  <rect id="comments-question-check_8034096 1" rx="0.000000" width="19.960938" height="19.960938" transform="translate(0.019531 0.019531)" fill="white" fill-opacity="0" />
                </clipPath>
              </defs>
              <rect id="comments-question-check_8034096 1" rx="0.000000" width="19.960938" height="19.960938" transform="translate(0.019531 0.019531)" fill="#FFFFFF" fill-opacity="0" />
              <g clip-path="url(#clip75_859)">
                <path id="Vector" d="M20 13.33L20 20L13.33 20C10.87 20 8.72 18.65 7.56 16.66C8.2 16.65 8.83 16.58 9.43 16.45C10.35 17.59 11.75 18.33 13.33 18.33L18.33 18.33L18.33 13.33C18.33 11.75 17.59 10.35 16.45 9.43C16.58 8.83 16.65 8.2 16.66 7.56C18.65 8.72 20 10.87 20 13.33ZM10.05 14.54C9.25 14.83 8.39 15 7.5 15L0 15L0 7.5C0 3.36 3.36 0 7.5 0C11.63 0 15 3.36 15 7.5C15 10.11 13.65 12.4 11.63 13.75L12.9 14.99L16.08 11.9L17.24 13.09L14.08 16.18C13.76 16.5 13.34 16.66 12.91 16.66C12.49 16.66 12.06 16.5 11.73 16.17L10.05 14.54ZM7.5 13.33C10.71 13.33 13.33 10.71 13.33 7.5C13.33 4.28 10.71 1.66 7.5 1.66C4.28 1.66 1.66 4.28 1.66 7.5L1.66 13.33L7.5 13.33ZM7.94 3.37C7.2 3.23 6.46 3.44 5.89 3.91C5.32 4.39 5 5.09 5 5.83L6.66 5.83C6.66 5.58 6.77 5.35 6.96 5.19C7.15 5.03 7.4 4.96 7.65 5.01C7.98 5.07 8.26 5.34 8.31 5.67C8.39 6.11 8.14 6.42 7.9 6.56C7.19 6.95 6.66 7.89 6.66 8.75L6.66 9.16L8.33 9.16L8.33 8.75C8.33 8.49 8.55 8.1 8.7 8.02C9.64 7.5 10.14 6.44 9.96 5.38C9.78 4.37 8.95 3.54 7.94 3.37ZM6.66 11.66L8.33 11.66L8.33 10L6.66 10L6.66 11.66Z" fill="#3C0F3C" fill-opacity="1.000000" fill-rule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <form
      onSubmit={handleSubmit}
      className="p-9 flex flex-col gap-[0.75rem] max-lg:gap-[1rem] mx-5 my-6 max-lg:m-0 rounded-[48px] max-sm:p-4 max-sm:rounded-3xl bg-white w-[580px] h-[562px] max-lg:mx-auto max-lg:w-full max-lg:h-h-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="Фамилия Имя Отчество"
        value={formData.name}
        onChange={handleChange}
        className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
          errors.name ? 'border-[#E54545] text-[#E54545] placeholder-[#E54545]' : 'border-gray-300'
        }`}
      />

      <input
        type="email"
        name="email"
        placeholder="Электронная почта"
        value={formData.email}
        onChange={handleChange}
        className={`w-full py-3 px-6 rounded-xl border text-lg  text-text-form font-normal target:border-borderColor-custom ${
          errors.email ? 'border-[#E54545] text-[#E54545] placeholder-[#E54545]' : 'border-gray-300'
        }`}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Телефон"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full py-3 px-6 rounded-xl border text-lg text-text-form font-normal target:border-borderColor-custom ${
          errors.phone ? 'border-[#E54545] text-[#E54545] placeholder-[#E54545]' : 'border-gray-300'
        }`}
      />

      <textarea
        name="comment"
        placeholder="Комментарий"
        value={formData.comment}
        onChange={handleChange}
        className={`w-full resize-none h-[146px] py-3 px-6 text-text-form rounded-xl border text-lg font-normal target:border-borderColor-custom ${
          errors.comment ? 'border-[#E54545] text-[#E54545] placeholder-[#E54545]' : 'border-gray-300'
        }`}
      ></textarea>

      <button className="flex button-animation justify-between items-center mt-[13px] mr-[7px] max-lg:m-0">
        <div
          className="w-full py-3 border max-[500px]:w-[80%] border-solid border-borderColor-custom rounded-xl font-medium text-lg text-text-hover transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary"
        >
          Отправить
        </div>
        <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-text-hover hover:bg-bg-hover_primary transition-all">
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
        Нажимая "отправить"  я даю согласие на обработку моих персональных данных для цели ответа на мою заявку.
      </span>
    </form>
    </section>
  )
}

export default From
