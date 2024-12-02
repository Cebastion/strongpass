import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../animation/animation.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  const swiperRef = useRef<SwiperClass | null>(null); // Реф для хранения экземпляра Swiper

  const articles = [
    {
      id: 1,
      date: "20 сентября 2024",
      title: "Создание легко запоминаемых и надежных паролей",
      imgSrc: "/article.png",
      imgSrcSet: "/article.png 1x, /article_2x.png 2x",
    },
    {
      id: 2,
      date: "20 сентября 2024",
      title:
        "Как создать слабый пароль или типовые шаблоны в паролях и как с ними бороться",
      imgSrc: "/article_2.png",
      imgSrcSet: "/article_2.png 1x, /article_2_2x.png 2x",
    },
    {
      id: 3,
      date: "21 сентября 2024",
      title: "Советы по управлению корпоративными паролями",
      imgSrc: "/article_2.png",
      imgSrcSet: "/article_2.png 1x, /article_2_2x.png 2x",
    },
    {
      id: 4,
      date: "22 сентября 2024",
      title: "Лучшие практики для работы с двухфакторной аутентификацией",
      imgSrc: "/article.png",
      imgSrcSet: "/article.png 1x, /article_2x.png 2x",
    },
  ];

  return (
    <section className="mt-32 max-w-[1180px] mx-auto max-md:mt-20 max-[500px]:px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-6xl font-bold max-lg:text-3xl">Статьи</h2>
        <div className="flex gap-2 items-center max-md:hidden">
          <button className="h-[61px] px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-medium transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary">
            Смотреть все
          </button>
          <button
            onClick={() => swiperRef.current?.slidePrev()} // Переключение на предыдущий слайд
            className="w-[54px] h-[54px] flex justify-center items-center border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
          >
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animated-svg"
                id="Vector"
                d="M8.36 12L14.36 6L15.63 7.26L10.89 12L15.63 16.73L14.36 18L8.36 12Z"
                fill="#408077"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()} // Переключение на следующий слайд
            className="w-[54px] h-[54px] flex justify-center items-center border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
          >
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="animated-svg"
                id="Vector"
                d="M15.63 12L9.63 18L8.36 16.73L13.1 12L8.36 7.26L9.63 6L15.63 12Z"
                fill="#408077"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
      className="mt-10"
        spaceBetween={50}
        slidesPerView={1}
        loop
        breakpoints={{
          1030: {
            slidesPerView: 2
          }
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Сохранение экземпляра Swiper
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <div
              className={`flex-shrink-0 transition-transform duration-500 ease-in-out max-lg:mx-auto`}
            >
              <img
                className="rounded-tl-[48px] rounded-tr-[48px] object-cover w-full"
                srcSet={article.imgSrcSet}
                alt={article.title || "Статья"}
                loading="lazy"
                width={580}
                height={280}
              />
              <div className="rounded-3xl bg-bg-custom_gray p-9 max-[500px]:p-4 relative bottom-8 max-[350px]:bottom-4 max-w-[580px] flex flex-col gap-3 max-[1030px]:max-w-full">
                <span className="text-base text-gray-400">{article.date}</span>
                <h3 className="text-2xl font-semibold max-md:text-[20px]">
                  {article.title}
                </h3>
                <span className="text-lg font-normal text-text-custom_gray_second max-md:line-clamp-2">
                  Сегодня исследовательская группа Specops публикует
                  <p className="text-lg text-text-custom_gray_second">
                    новые данные о паролях VPN, украденных вредоносным...
                  </p>
                </span>
                <Link
                  className="flex gap-4 items-center text-text-hover text-lg font-semibold btn-see"
                  href="#"
                >
                  Читать статью
                  <Image
                    className="relative left-0 transition-all"
                    src="/arrow_3.svg"
                    alt="Стрелка"
                    loading="lazy"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" gap-2 hidden max-md:flex justify-between">
        <button className="py-4 px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-base text-text-hover font-medium transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary max-[360px]:px-4">Смотреть все</button>
        <div className="flex gap-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="py-3 px-4 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
        >
          <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <path className="animated-svg" id="Vector" d="M8.36 12L14.36 6L15.63 7.26L10.89 12L15.63 16.73L14.36 18L8.36 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
          </svg>
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="py-3 px-4 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
        >
          <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <desc>
              Created with Pixso.
            </desc>
            <defs />
            <path className="animated-svg" id="Vector" d="M15.63 12L9.63 18L8.36 16.73L13.1 12L8.36 7.26L9.63 6L15.63 12Z" fill="#408077" fill-opacity="1.000000" fill-rule="evenodd" />
          </svg>

        </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
