import React, { FC, useState } from "react";
import "../config/start.css";
import "../config/tip.css";

type Props = {
  setIsFormFreeLicense: React.Dispatch<React.SetStateAction<boolean>>;
};

const FreeLicense: FC<Props> = ({ setIsFormFreeLicense }) => {
  const Spoiler = () => {
    return (
      <div className="absolute hidden group-hover:block shadow p-5 rounded-2xl bg-white w-[532px] -top-[25.7rem] -right-[30rem] max-md:-right-[31rem] max-[535px]:w-[300px]">
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
          onClick={async () => {await navigator.clipboard.writeText('get-aduser -filter *|where {$_.enabled -eq True}).count')}}
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
        <span className="font-normal text-base leading-[150%] max-[535px]:text-sm">в Linux:</span>
        <div className="flex justify-between bg-[#f2f5f4] px-[12px] py-[6px] rounded-lg items-center mt-[10px]">
          <span className="font-normal text-base leading-[150%] max-w-[434px] max-[535px]:text-sm max-[535px]:max-w-[100px]">
            ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b
            ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc
            -l
          </span>
          <svg
          onClick={async () => {await navigator.clipboard.writeText('ldapsearch -h localhost -p 389 -D cn="Directory Manager" -W -b ou=people,dc=[ваш_домен],dc=[ваш_домен] "uid=*" uid | grep uid: | wc -l')}}
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
          className="absolute right-[89.5%] bottom-[-19px] max-md:right-[92.5%]"
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
      <div
        onClick={() => setIsFormFreeLicense(false)}
        className="fixed top-0 z-[60] left-0 w-full h-full bg-[#262f33] opacity-[0.75]"
      ></div>
      <div
        className="fixed top-4 z-[60] right-4 w-[57px] h-[57px] rounded-xl bg-bg-custom_green hover:bg-[#1B6B60] transition-all flex justify-center items-center cursor-pointer max-md:hidden"
        onClick={() => setIsFormFreeLicense(false)}
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
      <div className="fixed top-1/2 z-[60] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[36px] p-16 w-[780px] max-[780px]:rounded-none max-[780px]:w-full max-[780px]:h-full max-[780px]:p-5 max-[780px]:overflow-y-scroll">
      <div
        className="fixed hidden max-md:flex top-24 z-[70] right-0 w-[57px] h-[57px] justify-center items-center cursor-pointer"
        onClick={() => setIsFormFreeLicense(false)}
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
          Запросить бесплатную тестовую лицензию
        </h3>
        <span className="text-[17px] font-normal leading-[160%] max-md:text-base max-[355px]:inline-block max-[355px]:w-[290px]">
          Временная лицензия автоматически будет отправлена на электронную
          почту, указанную в запросе.{" "}
          <span className="font-semibold">
            Срок действия временной лицензии - 21 день.
          </span>
        </span>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[0.75rem] mt-8 max-[355px]:w-[290px]"
        >
          <div className="flex justify-between gap-x-5 max-[780px]:flex-col">
            <div className="flex flex-col w-full">
              <span className="text-base leading-[150%] font-normal pb-[8px]">
                Контактное лицо <span className="start">*</span>
              </span>
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
            </div>

            <div className="flex flex-col w-full">
              <span className="text-base leading-[150%] font-normal pb-[8px]">
                Компания <span className="start">*</span>
              </span>
              <input
                required
                type="text"
                name="email"
                placeholder="Название или ссылка на сайт"
                value={formData.company}
                onChange={handleChange}
                className={`w-full py-3 px-6 rounded-xl border text-lg  text-text-form font-normal target:border-borderColor-custom ${
                  errors.company
                    ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>

          <div className="flex justify-between gap-x-5 max-[780px]:flex-col">
            <div className="flex flex-col w-full">
              <span className="text-base leading-[150%] font-normal pb-[8px]">
                Электронная почта <span className="start">*</span>
              </span>
              <input
                required
                type="email"
                name="name"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={handleChange}
                className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
                  errors.email
                    ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                    : "border-gray-300"
                }`}
              />
            </div>

            <div className="flex flex-col w-full">
              <span className="text-base leading-[150%] font-normal pb-[8px]">
                Телефон
              </span>
              <input
                type="tel"
                name="name"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChangePhone}
                className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom`}
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <span className="text-base leading-[150%] font-normal pb-[8px]">
              Кол-во учетных записей <span className="start">*</span>
            </span>
            <input
              required
              type="text"
              name="name"
              placeholder="10"
              value={formData.account}
              onChange={handleChange}
              className={`w-full py-3 px-6 rounded-xl border text-lg font-normal text-text-form target:border-borderColor-custom ${
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

          <div className="flex flex-col w-full">
            <span className="text-base leading-[150%] font-normal pb-[8px]">
              Комментарий <span className="start">*</span>
            </span>
            <textarea
              required
              name="comment"
              placeholder="Дополнительная информация"
              value={formData.comment}
              onChange={handleChange}
              className={`w-full resize-none h-[146px] py-3 px-6 text-text-form rounded-xl border text-lg font-normal target:border-borderColor-custom ${
                errors.comment
                  ? "border-[#E54545] text-[#E54545] placeholder-[#E54545]"
                  : "border-gray-300"
              }`}
            ></textarea>
          </div>

          <button className="flex button-animation justify-between items-center mt-8 mr-[7px] max-lg:m-0">
            <div className="w-full py-3 border border-solid border-borderColor-custom rounded-xl font-medium text-lg text-text-hover transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">
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
          <span className="text-sm font-normal text-left text-gray-400 mt-4">
            Нажимая кнопку «Отправить», вы даете свое конкретное,
            информированное и сознательное согласие на обработку и хранение
            ваших персональных данных и соглашаетесь с{" "}
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

export default FreeLicense;