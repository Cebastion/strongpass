import React, { FC, useEffect, useState } from "react";
import "../config/li.css";
import "../config/shadowBlock.css";

type Props = {
  setIsCheckPass: React.Dispatch<React.SetStateAction<boolean>>;
};

const Warning = () => {
  return (
    <svg
      className="w-[29px] h-[29px] mr-2"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 7.1875C13.1641 7.1875 11.9453 7.51562 10.8438 8.17188C9.74219 8.80469 8.85156 9.69531 8.17188 10.8438C7.51562 11.9922 7.1875 13.2109 7.1875 14.5C7.1875 15.7891 7.51562 17.0078 8.17188 18.1562C8.85156 19.3047 9.74219 20.1953 10.8438 20.8281C11.9453 21.4844 13.1641 21.8125 14.5 21.8125C15.8359 21.8125 17.0547 21.4844 18.1562 20.8281C19.2578 20.1953 20.1484 19.3047 20.8281 18.1562C21.4844 17.0078 21.8125 15.7891 21.8125 14.5C21.8125 13.2109 21.4844 11.9922 20.8281 10.8438C20.1484 9.69531 19.2578 8.80469 18.1562 8.17188C17.0547 7.51562 15.8359 7.1875 14.5 7.1875ZM14.5 23.5C12.8594 23.4766 11.3594 23.0781 10 22.3047C8.64062 21.5078 7.53906 20.4062 6.69531 19C5.89844 17.5703 5.5 16.0703 5.5 14.5C5.5 12.9297 5.89844 11.4297 6.69531 10C7.53906 8.59375 8.64062 7.49219 10 6.69531C11.3594 5.92188 12.8594 5.52344 14.5 5.5C16.1406 5.52344 17.6406 5.92188 19 6.69531C20.3594 7.49219 21.4609 8.59375 22.3047 10C23.1016 11.4297 23.5 12.9297 23.5 14.5C23.5 16.0703 23.1016 17.5703 22.3047 19C21.4609 20.4062 20.3594 21.5078 19 22.3047C17.6406 23.0781 16.1406 23.4766 14.5 23.5ZM13.0938 17.3125H13.9375V15.0625H13.0938C12.5781 15.0156 12.2969 14.7344 12.25 14.2188C12.2969 13.7031 12.5781 13.4219 13.0938 13.375H14.7812C15.2969 13.4219 15.5781 13.7031 15.625 14.2188V17.3125H15.9062C16.4219 17.3594 16.7031 17.6406 16.75 18.1562C16.7031 18.6719 16.4219 18.9531 15.9062 19H13.0938C12.5781 18.9531 12.2969 18.6719 12.25 18.1562C12.2969 17.6406 12.5781 17.3594 13.0938 17.3125ZM14.5 12.25C14.1719 12.25 13.9023 12.1445 13.6914 11.9336C13.4805 11.7227 13.375 11.4531 13.375 11.125C13.375 10.7969 13.4805 10.5273 13.6914 10.3164C13.9023 10.1055 14.1719 10 14.5 10C14.8281 10 15.0977 10.1055 15.3086 10.3164C15.5195 10.5273 15.625 10.7969 15.625 11.125C15.625 11.4531 15.5195 11.7227 15.3086 11.9336C15.0977 12.1445 14.8281 12.25 14.5 12.25Z"
        fill="#E54545"
      />
    </svg>
  );
};
const OpenEye = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={onClick}
      className="absolute right-[20px] top-[35%] cursor-pointer"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.47917 11.6458C5.21991 12.3866 6.05324 12.9769 6.97917 13.4167C7.90509 13.8565 8.91204 14.088 10 14.1111C11.088 14.088 12.0949 13.8565 13.0208 13.4167C13.9468 12.9769 14.7801 12.3866 15.5208 11.6458C16.1458 11.044 16.6782 10.419 17.1181 9.77084C17.5579 9.14584 17.9167 8.55556 18.1944 8.00001C17.9167 7.44445 17.5579 6.85417 17.1181 6.22917C16.6782 5.58103 16.1458 4.95603 15.5208 4.35417C14.7801 3.61343 13.9468 3.02315 13.0208 2.58334C12.0949 2.14353 11.088 1.91204 10 1.8889C8.91204 1.91204 7.90509 2.14353 6.97917 2.58334C6.05324 3.02315 5.21991 3.61343 4.47917 4.35417C3.85417 4.95603 3.32176 5.58103 2.88194 6.22917C2.44213 6.85417 2.09491 7.44445 1.84028 8.00001C2.09491 8.55556 2.44213 9.14584 2.88194 9.77084C3.32176 10.419 3.85417 11.044 4.47917 11.6458ZM10 15.7778C8.1713 15.7315 6.57407 15.257 5.20833 14.3542C3.84259 13.4282 2.71991 12.3634 1.84028 11.1597C0.960648 9.95603 0.347222 8.90278 0 8.00001C0.347222 7.09723 0.960648 6.04399 1.84028 4.84028C2.71991 3.63658 3.84259 2.57177 5.20833 1.64584C6.57407 0.743062 8.1713 0.268525 10 0.222229C11.8287 0.268525 13.4259 0.743062 14.7917 1.64584C16.1806 2.57177 17.3032 3.63658 18.1597 4.84028C19.0394 6.04399 19.6528 7.09723 20 8.00001C19.6528 8.90278 19.0394 9.95603 18.1597 11.1597C17.3032 12.3634 16.1806 13.4282 14.7917 14.3542C13.4259 15.257 11.8287 15.7315 10 15.7778ZM10 10.7778C10.787 10.7546 11.4468 10.4884 11.9792 9.97917C12.4884 9.44677 12.7546 8.78704 12.7778 8.00001C12.7546 7.21297 12.4884 6.55325 11.9792 6.02084C11.4468 5.51158 10.787 5.24538 10 5.22223C9.81481 5.22223 9.62963 5.24538 9.44444 5.29167L10 8.00001L7.29167 7.44445C7.24537 7.62964 7.22222 7.81482 7.22222 8.00001C7.24537 8.78704 7.51157 9.44677 8.02083 9.97917C8.55324 10.4884 9.21296 10.7546 10 10.7778ZM5.55556 8.00001C5.55556 7.69908 5.5787 7.40973 5.625 7.13195L5.65972 7.09723C5.84491 6.2176 6.25 5.46528 6.875 4.84028C7.5 4.23843 8.25231 3.84491 9.13194 3.65973C9.40972 3.59028 9.69907 3.55556 10 3.55556C11.25 3.57871 12.3032 4.00695 13.1597 4.84028C13.9931 5.69677 14.4213 6.75001 14.4444 8.00001C14.4213 9.25001 13.9931 10.3032 13.1597 11.1597C12.3032 11.9931 11.25 12.4213 10 12.4445C8.75 12.4213 7.69676 11.9931 6.84028 11.1597C6.00694 10.3032 5.5787 9.25001 5.55556 8.00001Z"
        fill="#7A7E80"
      />
    </svg>
  );
};

const CloseEye = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      onClick={onClick}
      className="absolute right-[20px] top-[35%] cursor-pointer"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 3.46875L5.75 5.96875C6.45833 5.38542 7.25 4.91667 8.125 4.5625C9 4.20833 9.95833 4.02083 11 4C12.6458 4.04167 14.0833 4.46875 15.3125 5.28125C16.5625 6.11458 17.5729 7.07292 18.3438 8.15625C19.1354 9.23958 19.6875 10.1875 20 11C19.7917 11.5417 19.4688 12.1667 19.0312 12.875C18.5729 13.5833 18.0208 14.2917 17.375 15L20.4062 17.3438L21 17.8125L20.0938 19L19.5 18.5312L1.59375 4.65625L1 4.1875L1.90625 3L2.5 3.46875ZM6.96875 6.90625L8.34375 8C8.88542 7.54167 9.51042 7.23958 10.2188 7.09375C10.4688 7.03125 10.7292 7 11 7C12.125 7.02083 13.0729 7.40625 13.8438 8.15625C14.5938 8.92708 14.9792 9.875 15 11C15 11.6667 14.8542 12.2708 14.5625 12.8125L16.1875 14.0938C17.1875 12.9896 17.9167 11.9583 18.375 11C18.125 10.5 17.8021 9.96875 17.4062 9.40625C17.0104 8.82292 16.5312 8.26042 15.9688 7.71875C15.3021 7.05208 14.5521 6.52083 13.7188 6.125C12.8854 5.72917 11.9792 5.52083 11 5.5C9.45833 5.54167 8.11458 6.01042 6.96875 6.90625ZM13.3438 11.875C13.4479 11.6042 13.5 11.3125 13.5 11C13.4792 10.2917 13.2396 9.69792 12.7812 9.21875C12.3021 8.76042 11.7083 8.52083 11 8.5C10.8333 8.5 10.6667 8.52083 10.5 8.5625L10.7812 9.875L13.3438 11.875ZM13.5938 15.9375L14.9062 16.9688C13.7604 17.6354 12.4583 17.9792 11 18C9.35417 17.9583 7.91667 17.5312 6.6875 16.7188C5.45833 15.8854 4.44792 14.9271 3.65625 13.8438C2.86458 12.7604 2.3125 11.8125 2 11C2.3125 10.1667 2.875 9.20833 3.6875 8.125L4.84375 9.03125C4.32292 9.73958 3.92708 10.3958 3.65625 11C3.88542 11.5 4.19792 12.0312 4.59375 12.5938C4.98958 13.1771 5.46875 13.7396 6.03125 14.2812C6.69792 14.9479 7.44792 15.4792 8.28125 15.875C9.11458 16.2708 10.0208 16.4792 11 16.5C11.9375 16.5 12.8021 16.3125 13.5938 15.9375ZM7 11C7 10.9167 7 10.8333 7 10.75L8.75 12.125C9.10417 12.8125 9.66667 13.25 10.4375 13.4375L12.1875 14.8125C11.8125 14.9375 11.4167 15 11 15C9.875 14.9792 8.92708 14.5938 8.15625 13.8438C7.40625 13.0729 7.02083 12.125 7 11Z"
        fill="#7A7E80"
      />
    </svg>
  );
};

const Positive = () => {
  return (
    <svg
      className="w-[28px] h-[28px] absolute left-0"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.7186 7.31461C24.1681 7.82397 24.1681 8.31835 23.7186 8.79775L11.8535 20.6629C11.3741 21.1124 10.8797 21.1124 10.3703 20.6629L4.25797 14.5506C3.83849 14.0712 3.83849 13.5768 4.25797 13.0674C4.76733 12.6479 5.27669 12.6479 5.78606 13.0674L11.1344 18.4157L22.2355 7.31461C22.7449 6.89513 23.2392 6.89513 23.7186 7.31461Z"
        fill="#408077"
      />
    </svg>
  );
};

const Negative = () => {
  return (
    <svg
      className="w-[28px] h-[28px] absolute left-0"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6938 8.79375L15.4875 14L20.6938 19.2063C21.1021 19.7021 21.1021 20.1979 20.6938 20.6938C20.1979 21.1021 19.7021 21.1021 19.2063 20.6938L14 15.4875L8.79375 20.6938C8.29792 21.1021 7.80208 21.1021 7.30625 20.6938C6.89792 20.1979 6.89792 19.7021 7.30625 19.2063L12.5125 14L7.30625 8.79375C6.89792 8.29792 6.89792 7.80208 7.30625 7.30625C7.80208 6.89792 8.29792 6.89792 8.79375 7.30625L14 12.5125L19.2063 7.30625C19.7021 6.89792 20.1979 6.89792 20.6938 7.30625C21.1021 7.80208 21.1021 8.29792 20.6938 8.79375Z"
        fill="#E54545"
      />
    </svg>
  );
};

const CircularProgress = ({
  current,
  total,
  color,
}: {
  current: number;
  total: number;
  color: string;
}) => {
  const progress = (current / total) * 100;
  const radius = 36; // Радиус круга
  const strokeWidth = 5; // Толщина линии
  const circumference = radius * 2 * Math.PI; // Длина окружности
  const offset = circumference - (progress / 100) * circumference;

  if (current === 0) {
    return (
      <svg
        width="81"
        height="81"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.5001 80.5C18.4087 80.5 0.500105 62.5914 0.500105 40.5C0.500106 18.4086 18.4087 0.499997 40.5001 0.499998C62.5914 0.499999 80.5 18.4086 80.5 40.5C80.5 62.5914 62.5914 80.5 40.5001 80.5ZM40.5001 4.5C20.6178 4.5 4.50011 20.6177 4.50011 40.5C4.5001 60.3822 20.6178 76.5 40.5001 76.5C60.3823 76.5 76.5 60.3823 76.5 40.5C76.5 20.6177 60.3823 4.5 40.5001 4.5Z"
          fill="#E54545"
        />
        <path
          d="M38 53.92V49.942H42.338V53.92H38ZM38 47.44V28H42.338V47.44H38Z"
          fill="#E54545"
        />
      </svg>
    );
  } else {
    return (
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Фон кольца */}
        <svg
          className="transform -rotate-90"
          width="80"
          height="80"
          viewBox="0 0 80 80" // Важный параметр
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#e5e7eb" // Серый цвет для фона
            strokeWidth={strokeWidth}
          />
        </svg>

        {/* Анимированный прогресс */}
        <svg
          className="absolute transform -rotate-90"
          width="80"
          height="80"
          viewBox="0 0 80 80" // Обеспечивает корректное отображение
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // Для сглаженного края
            className="transition-all duration-500 ease-out"
          />
        </svg>

        {/* Текст в центре */}
        <span
          className="absolute text-[28px] leading-[140%] font-bold"
          style={{ color }}
        >
          {current}/{total}
        </span>
      </div>
    );
  }
};

const Text = ({ current }: { current: number }) => {
  if (current === 0) {
    return (
      <>
        <h5 className="font-semibold text-lg text-center leading-[160%] mb-[5px] mt-[15px] max-sm:text-base">
          Неизвестный результат <p>проверки пароля.</p>
        </h5>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          Проверьте журнал
        </p>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          приложения
        </p>
      </>
    );
  } else if (current === 1) {
    return (
      <>
        <h5 className="font-semibold text-lg text-center leading-[160%] mb-[5px] mt-[15px] max-sm:text-base">
          Пароль ненадежный!
        </h5>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          Пароль достаточно
        </p>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          легко угадать.
        </p>
      </>
    );
  } else if (current <= 3 && current !== 1) {
    return (
      <>
        <h5 className="font-semibold text-lg text-center leading-[160%] mb-[5px] mt-[15px] max-sm:text-base">
          Пароль ненадежный!
        </h5>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          Пароль содержит
        </p>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          запрещенное слово или
        </p>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          {" "}
          комбинацию символов.
        </p>
      </>
    );
  } else if (current <= 5 && current > 3) {
    return (
      <>
        <h5 className="font-semibold text-lg text-center leading-[160%] mb-[5px] mt-[15px] max-sm:text-base">
          Хороший пароль! <p>Поздравляем!</p>
        </h5>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          Ваш пароль
        </p>
        <p className="font-normal text-base text-center leading-[150%] text-[#7a7e80] max-sm:text-[14px]">
          достаточно надежный
        </p>
      </>
    );
  }
};

const CheckPass:FC<Props> = ({setIsCheckPass}) => {
  const [ShowPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<number[]>();
  const [Color, setColor] = useState("#e54545");
  const [validLength, setValidLength] = useState(false);
  const [validUppercase, setValidUppercase] = useState(false);
  const [validLowercase, setValidLowercase] = useState(false);
  const [validNumber, setValidNumber] = useState(false);
  const [validSpecialChar, setValidSpecialChar] = useState(false);

  const checkPassword = () => {
    const validChecks: number[] = [];

    // Условия проверки
    if (password.length >= 9 && password.length !== 0) validChecks.push(1); // Пароль длиной 9+
    if (/[\p{Lu}]/u.test(password)) validChecks.push(2); // Есть заглавная буква
    if (/[\p{Ll}]/u.test(password)) validChecks.push(3); // Есть строчная буква
    if (/[0-9]/.test(password)) validChecks.push(4); // Есть число
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) validChecks.push(5); // Есть спецсимвол

    setValidLength(password.length >= 9);

    // Проверка наличия заглавной буквы
    setValidUppercase(/[\p{Lu}]/u.test(password));

    // Проверка наличия строчной буквы
    setValidLowercase(/[\p{Ll}]/u.test(password));

    // Проверка наличия цифры
    setValidNumber(/[0-9]/.test(password));

    // Проверка наличия спецсимвола
    setValidSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));

    if (validChecks.length <= 3 && validChecks.length !== 1) {
      setColor("#f0c800");
    }
    if (validChecks.length <= 5 && validChecks.length > 3) {
      setColor("#408077");
    }
    if (validChecks.length <= 1) {
      setColor("#e54545");
    }

    setResult(validChecks);
  };

  useEffect(() => {
    checkPassword()
  },[password])

  return (
    <>
      <div onClick={() => setIsCheckPass(false)} className="fixed top-0 z-[60] left-0 w-full h-full bg-[#262f33] opacity-[0.75] max-md:hidden"></div>
      <div onClick={() => setIsCheckPass(false)} className="fixed top-4 z-[60] right-4 w-[57px] h-[57px] rounded-xl bg-bg-custom_green hover:bg-[#1B6B60] transition-all flex justify-center items-center cursor-pointer max-md:hidden">
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
      <div className="fixed top-1/2 z-[60] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[36px] p-16 max-w-[1300px] w-full flex gap-16 max-md:rounded-none max-md:w-full max-md:h-full max-sm:p-0 max-sm:pt-[7.75rem] max-md:pt-[7.75rem] max-[1180px]:flex-col max-[1180px]:items-center max-[1180px]:h-[80%]">
        <div className=" max-[1180px]:overflow-y-scroll flex gap-16 max-[1180px]:flex-col max-[1180px]:items-center hidden-overflow-y-scroll max-[1180px]:gap-10 max-sm:p-5">
        <div className="max-w-[560px] w-[560px] flex flex-col justify-between max-sm:w-full max-sm:max-w-full ">
          <h4 className="font-semibold text-[32px] leading-[130%] mb-[10px] max-md:text-[22px] max-md:leading-[140%]">
            Проверка надежности пароля
          </h4>
          <span className="font-normal text-lg text-left leading-[160%] max-md:text-base max-md:leading-[150%] ">
            Публичная версия сервиса предназначена для быстрой и удобной
            проверки пароля на надежность, а так же демонстрации возможностей
            решения Strongpass для проактивной борьбы со слабыми паролями.
          </span>
          <div className="mt-8 mb-5 w-full flex justify-between items-center gap-5 max-sm:flex-col">
            <div className="relative max-sm:w-full">
              <input
                className="relative border border-[#e3e5e5] rounded-2xl py-[14px] px-5 w-[371px] h-[57px] font-medium text-lg max-sm:w-full max-sm:max-w-full "
                type={ShowPass ? "text" : "password"}
                placeholder="Ваш пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {ShowPass ? (
                <CloseEye onClick={() => setShowPass(!ShowPass)} />
              ) : (
                <OpenEye onClick={() => setShowPass(!ShowPass)} />
              )}
            </div>
            <button
            disabled={result?.length !== 5}
            className={`py-[14px] px-9 rounded-xl flex justify-center items-center transition-all bg-bg-custom_green duration-500 font-semibold leading-[160%] text-lg text-white max-sm:w-full ${
              result?.length === 5 ? 'cursor-pointer hover:bg-[#1b6b60]' : 'cursor-not-allowed'
            }`}
            >
              Проверить
            </button>
          </div>
          <div className="p-[10px] border border-[#e3e5e5] rounded-2xl flex justify-between items-center gap-8 max-sm:flex-col ">
            {result && (
              <div className="flex flex-col justify-center items-center px-5 py-[25px] w-full max-w-[255px] bg-[#f2f5f4] rounded-[10px] max-sm:w-full max-sm:max-w-full ">
              <CircularProgress
                current={result.length}
                total={5}
                color={Color}
              />
              <div>
                <Text current={result.length} />
              </div>
            </div>
            )}
            <div className=" rounded-md space-y-2 w-full max-w-[255px] mx-auto max-sm:w-full max-sm:max-w-full max-sm:flex max-sm:flex-col max-sm:items-center ">
              <h2 className="font-semibold text-lg leading-[160%] text-center max-sm:text-base">
                Требования к паролю:
              </h2>
              <ul className="pl-5 text-gray-600 list-none max-sm:mr-7">
                <li className="font-medium text-lg leading-[160%] relative pl-8 max-sm:text-base">
                  {validLength ? <Positive /> : <Negative />} Не менее 9
                  символов
                </li>
                <li className="font-medium text-lg leading-[160%] relative pl-8 max-sm:text-base">
                  {validUppercase ? <Positive /> : <Negative />} Заглавная буква
                </li>
                <li className="font-medium text-lg leading-[160%] relative pl-8 max-sm:text-base">
                  {validLowercase ? <Positive /> : <Negative />} Строчная буква
                </li>
                <li className="font-medium text-lg leading-[160%] relative pl-8 max-sm:text-base">
                  {validNumber ? <Positive /> : <Negative />} Цифра
                </li>
                <li className="font-medium text-lg leading-[160%] relative pl-8 max-sm:text-base">
                  {validSpecialChar ? <Positive /> : <Negative />} Спецсимвол
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p-9  h-full shadowblock rounded-[36px] max-w-[560px] w-full bg-[#f2f5f4] overflow-hidden max-[1180px]:overflow-visible max-[1180px]:h-full max-sm:w-full  max-sm:p-5">
          <div className="h-full pb-[70px] max-h-[500px] overflow-y-auto hidden-overflow-y-scroll max-[1180px]:h-full max-[1180px]:max-h-full max-[1180px]:pb-0 ">
            <h6 className="flex text-lg font-semibold leading-[160%] mb-[10px] max-sm:text-base max-sm:leading-[150%]">
              <Warning /> Мы никак не собираем и не храним пароли, которые
              вы вводите.
            </h6>
            <span className="text-lg font-normal leading-[160%] mb-[10px] inline-block max-sm:text-base">
              Если у вас есть сомнения относительно использования общедоступной
              версии сервиса, вы можете развернуть его в своей инфраструктуре.
              Все проверки проводятся локально. Доступ в интернет не требуется.
              <br />В зависимости от целей и задач требования к паролю могут
              быть разными. Настройки публичной версии сервиса предъявляют
              следующие требования:
            </span>
            <ol className="numbered-list">
              <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                Длина пароля должна быть не менее 9 символов.
              </li>
              <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                Пароль должен включать в себя символы из всех следующих наборов:
                <ul className="dash-list">
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                    латинские заглавные буквы (от A до Z).
                  </li>
                  <li className="text-lg font-normal leading-[160%]mb-[2px] max-sm:text-base">
                    латинские строчные буквы (от a до z).
                  </li>
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                    цифры (от 0 до 9).
                  </li>
                  <li className="text-lg font-normal leading-[160%] max-sm:text-base">
                    специальные символы (например: !, $, #, %).
                  </li>
                </ul>
              </li>
              <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                Запрещено использование в пароле:
                <ul className="dash-list">
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                  Названий месяцев года.
                  </li>
                  <li className="text-lg font-normal leading-[160%]mb-[2px] max-sm:text-base">
                  повторяющихся подряд 3-х и более одинаковых символов ("111", "bbb" и т.д.)
                  </li>
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                  последовательностей из 3-х и более элементов("123", "321", "1234", "abc", "abcd" и т.д. )
                  </li>
                  <li className="text-lg font-normal leading-[160%] max-sm:text-base">
                  последовательностей символов, расположенных на соседних клавишах и состоящих из 3х и более элементов ("qwe", "qwerty", "qaz" и т.д.).
                  </li>
                  <li className="text-lg font-normal leading-[160%] max-sm:text-base">
                  последовательностей символов, расположенных на соседних клавишах и состоящих из 3х и более элементов ("qwe", "qwerty", "qaz" и т.д.).
                  </li>
                  слова "strongpass" (см. <a href="https://doc.strongpass.ru/passwords.html#nechetkij-poisk">Нечеткий поиск</a>)
                </ul>
              </li>
              <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
              Отсутствие в базе паролей из публичных утечек.
              <span>Примеры слабых паролей: </span>
                <ul className="dash-list">
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                  $Tr0ngpass1
                  </li>
                  <li className="text-lg font-normal leading-[160%]mb-[2px] max-sm:text-base">
                  P@ssw0rd1234567
                  </li>
                  <li className="text-lg font-normal leading-[160%] mb-[2px] max-sm:text-base">
                  N0vember20!0
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CheckPass;
