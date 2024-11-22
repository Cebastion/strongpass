import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const text =
    "Сегодня исследовательская группа Specops публикует новые данные о паролях VPN, украденных вредоносным ПО. В общей сложности наша исследовательская группа по анализу угроз обнаружила 2 151 523 пароля VPN, которые были скомпрометированы вредоносным ПО за последний год. Все это реальные украденные пароли, выбранные конечными пользователями для доступа к VPN, и все они…";

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const articles = [
    {
      id: 1,
      date: "20 сентября 2024",
      title: "Создание легко запоминаемых и надежных паролей",
      imgSrc: "/article.svg",
    },
    {
      id: 2,
      date: "20 сентября 2024",
      title: "Как создать слабый пароль или типовые шаблоны в паролях и как с ними бороться",
      imgSrc: "/article_2.svg",
    },
    {
      id: 3,
      date: "21 сентября 2024",
      title: "Советы по управлению корпоративными паролями",
      imgSrc: "/article_2.svg",
    },
    {
      id: 4,
      date: "22 сентября 2024",
      title: "Лучшие практики для работы с двухфакторной аутентификацией",
      imgSrc: "/article.svg",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isSingleView
        ? prevIndex + 1 >= articles.length
          ? 0
          : prevIndex + 1
        : prevIndex + 2 >= articles.length
          ? 0
          : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isSingleView
        ? prevIndex - 1 < 0
          ? articles.length - 1
          : prevIndex - 1
        : prevIndex - 2 < 0
          ? articles.length - 2
          : prevIndex - 2
    );
  };

  const isSingleView = typeof window !== "undefined" && window.innerWidth <= 1280;

  return (
    <section className="mt-32 max-w-[1180px] mx-auto max-[500px]:px-3">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl font-bold max-lg:text-3xl">Статьи</h2>
        <div className="flex gap-2 max-md:hidden">
          <button className="py-4 px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold">Смотреть все</button>
          <button
            onClick={handlePrev}
            className="py-3 px-6 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold"
          >
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <desc>
                Created with Pixso.
              </desc>
              <defs />
              <path id="Vector" d="M8.36 12L14.36 6L15.63 7.26L10.89 12L15.63 16.73L14.36 18L8.36 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="py-3 px-6 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold"
          >
            <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <desc>
                Created with Pixso.
              </desc>
              <defs />
              <path id="Vector" d="M15.63 12L9.63 18L8.36 16.73L13.1 12L8.36 7.26L9.63 6L15.63 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
      <div className="mt-10 flex overflow-hidden gap-6">
        {articles.slice(currentIndex, currentIndex + (isSingleView ? 1 : 2)).map((article) => (
          <div
            key={article.id}
            className={`flex-shrink-0 ${isSingleView ? "w-full" : ""
              } transition-transform duration-500 ease-in-out max-lg:mx-auto`}
          >
            <Image
              className="rounded-tl-[48px] rounded-tr-[48px]"
              src={article.imgSrc}
              alt=""
              loading="lazy"
              width={580}
              height={280}
            />
            <div className="rounded-3xl bg-gray-100 p-4 relative bottom-8 max-[350px]:bottom-4 max-w-[580px] flex flex-col gap-3">
              <span className="text-base text-gray-400">{article.date}</span>
              <h3 className="text-2xl font-semibold max-md:text-[20px]">{article.title}</h3>
              <span className="text-lg font-normal text-text-custom_gray_second">
                Сегодня исследовательская группа Specops публикует <p className="text-lg text-text-custom_gray_second">новые данные о паролях VPN, украденных вредоносным...</p>
              </span>
              <Link
                className="flex gap-4 items-center text-text-hover text-lg font-semibold"
                href="#"
              >
                Читать статью{" "}
                <Image
                  src="/arrow_3.svg"
                  alt=""
                  loading="lazy"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" gap-2 hidden max-md:flex">
        <button className="py-4 px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-base text-text-hover font-semibold">Смотреть все</button>
        <button
          onClick={handlePrev}
          className="py-3 px-2 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold"
        >
          <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <path id="Vector" d="M8.36 12L14.36 6L15.63 7.26L10.89 12L15.63 16.73L14.36 18L8.36 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="py-3 px-2 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold"
        >
          <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <path id="Vector" d="M15.63 12L9.63 18L8.36 16.73L13.1 12L8.36 7.26L9.63 6L15.63 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
          </svg>

        </button>
      </div>
    </section>
  );
};

export default Carousel;

