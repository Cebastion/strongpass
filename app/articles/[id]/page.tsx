"use client";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ArticlePage } from "@/app/markdown/template/ArticlePage";
import Link from "next/link";
import '../../config/scroll.css'
import FormQuestion from "@/app/Pop-Up/FormQuestion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../animation/animation.css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Article  {
  title: string;
  date: string;
  img: string;
  text: string;
  content: string;
}

const page = () => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [Article, setArticle] = useState<MDXRemoteSerializeResult | null>(null);
  const params = useParams(); // Извлекаем параметры маршрута
  const id = params.id;
  const [articleData, setArticleData] = useState<Article[] | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    // Запрос к вашему API
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticleData(data));
  }, []);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/article?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch article");
        }
        return response.json();
      })
      .then(async (data) => {
        const mdxSource = await serialize(data.content);
        console.log(mdxSource);
        setArticle(mdxSource);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

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
  return (
    <>
      <Header
        isFormQuestion={isFormQuestion}
        setIsFormQuestion={setIsFormQuestion}
      />
      {isFormQuestion && <FormQuestion setIsFormQuestion={setIsFormQuestion} />}
      <main
        className={`flex-1 container max-w-[1300px] mx-auto my-14 max-md:mx-0 ${
          isFormQuestion && "max-md:hidden"
        }`}
      >
        <section className="max-w-[1180px] mx-auto max-[1180px]:px-5">
            <div className="flex gap-x-2 mb-6">
              <Link href='/' className="font-normal text-base leading-[150%] text-[#7a7e80]">Главная</Link>
              <span className="font-normal text-base leading-[150%] text-[#7a7e80]">/</span>
              <Link href='/articles' className="font-normal text-base leading-[150%] text-[#7a7e80]">Статьи</Link>
              <span className="font-normal text-base leading-[150%] text-[#7a7e80]">/</span>
              <Link href={`/articles/${id}`} className="font-normal text-base leading-[150%] text-[#7a7e80]">Публикация</Link>
            </div>
            {Article &&  (
              <>
                <ArticlePage>
                  <MDXRemote {...Article} />
                </ArticlePage>
              </>
            )}
        </section>
        <section className="mt-32 max-w-[1180px] max-[1200px]:px-5 mx-auto max-md:mt-20 max-md:px-5">
      <div className="flex justify-between items-center">
        <h2 className="text-[clamp(30px,5vw,60px)] font-bold max-sm:text-3xl">Смотрите так же</h2>
        <div className="flex gap-2 items-center max-md:hidden">
          <button className="h-[61px] px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-medium transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary" onClick={() => window.location.href = "/articles"}>
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
        spaceBetween={20}
        slidesPerView={1}
        loop
        breakpoints={{
          1030: {
            slidesPerView: 2,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Сохранение экземпляра Swiper
      >
        {articleData && articleData.map((article, index) => (
          <SwiperSlide key={index}>
          <div
            className={`flex-shrink-0 transition-transform duration-500 ease-in-out max-lg:mx-auto`}
          >
            <img
              className="rounded-tl-[36px] rounded-tr-[36px] object-cover w-full max-sm:rounded-tl-3xl max-sm:rounded-tr-3xl"
              srcSet={article.img}
              alt={article.title || "Статья"}
              loading="lazy"
              width={580}
              height={280}
            />
            <div className="rounded-3xl bg-bg-custom_gray p-9 max-[500px]:p-4 relative bottom-8 max-[350px]:bottom-4 max-w-[580px] flex flex-col gap-3 max-[1030px]:max-w-full">
              <span className="text-base text-gray-400 max-sm:text-sm">{article.date}</span>
              <h3 className="text-2xl font-[550] max-md:text-[20px] line-clamp-2">
                {article.title}
              </h3>
              <span className="text-lg font-[275] text-text-custom_gray_second line-clamp-2 max-sm:text-base">
                {article.text}
              </span>
              <Link
                className="flex gap-4 items-center text-text-hover text-lg font-semibold btn-see max-sm:text-base"
                href={`/articles/${index + 1}`}
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

      <div className=" gap-2 hidden max-md:flex justify-between max-sm:px-1">
        <button className="py-4 px-9 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-base text-text-hover font-medium transition-all hover:text-text-hover_primary hover:border-borderColor-hover_primary max-[360px]:px-4" onClick={() => window.location.href = "/articles"}>
          Смотреть все
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="py-3 px-4 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
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
                className="animated-svg"
                id="Vector"
                d="M8.36 12L14.36 6L15.63 7.26L10.89 12L15.63 16.73L14.36 18L8.36 12Z"
                fill="#408077"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="py-3 px-4 border border-solid border-[rgb(227, 229, 230)] rounded-xl text-lg text-text-hover font-semibold btn-animation"
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
                className="animated-svg"
                id="Vector"
                d="M15.63 12L9.63 18L8.36 16.73L13.1 12L8.36 7.26L9.63 6L15.63 12Z"
                fill="#408077"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
