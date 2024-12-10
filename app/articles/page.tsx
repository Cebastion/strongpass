"use client";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormQuestion from "../Pop-Up/FormQuestion";
import Link from "next/link";
import Image from "next/image";
import "../animation/animation.css";
import '../config/scroll.css'

type Props = {};

interface Article {
  title: string;
  date: string;
  img: string;
  text: string;
  content: string;
}

const MoreIcon = () => {
  return (
    <svg
    className="group-hover:animate-spin transition-all group-hover:fill-text-hover_primary group-hover:transition-all" 
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.569 13.2586H16.9828C16.4138 13.2069 16.1034 12.8965 16.0517 12.3275C16.1034 11.7586 16.4138 11.4482 16.9828 11.3965H20.5129L19.4267 10.1551V10.1163C18.806 9.36634 18.0431 8.77151 17.1379 8.33185C16.2328 7.8922 15.25 7.67237 14.1897 7.67237C12.25 7.7241 10.6466 8.39651 9.37931 9.68961C8.08621 10.9569 7.41379 12.5603 7.36207 14.5C7.41379 16.4396 8.08621 18.0431 9.37931 19.3103C10.6466 20.6034 12.25 21.2758 14.1897 21.3275C15.7672 21.3017 17.1379 20.8491 18.3017 19.9698C18.7672 19.6594 19.194 19.7241 19.5819 20.1638C19.8922 20.6293 19.8276 21.056 19.3879 21.4439C17.9138 22.5819 16.181 23.1638 14.1897 23.1896C12.5603 23.1638 11.0991 22.7629 9.80603 21.987C8.48707 21.237 7.45259 20.2025 6.70259 18.8836C5.92672 17.5905 5.52586 16.1293 5.5 14.5C5.52586 12.8706 5.92672 11.4094 6.70259 10.1163C7.45259 8.79737 8.48707 7.76289 9.80603 7.01289C11.0991 6.23703 12.5603 5.83616 14.1897 5.8103C15.5345 5.8103 16.7888 6.09479 17.9526 6.66375C19.0905 7.20685 20.0603 7.96979 20.8621 8.95254L21.6379 9.84479V6.74134C21.6897 6.17237 22 5.86203 22.569 5.8103C23.1379 5.86203 23.4483 6.17237 23.5 6.74134V12.3275C23.4483 12.8965 23.1379 13.2069 22.569 13.2586Z"
        fill="#408077"
      />
    </svg>
  );
};

const page = (props: Props) => {
  const [articleData, setArticleData] = useState<Article[] | null>(null);
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [ShowElement, setShowElement] = useState(8);


  const AddElement = () => {
    setShowElement(ShowElement + 2);
  }

  useEffect(() => {
    // Запрос к вашему API
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => setArticleData(data));
  }, []);

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
        className={`flex-1 container max-w-[1300px] mx-auto my-14 max-md:mx-0 max-md:px-5 ${
          isFormQuestion && "max-md:hidden"
        }`}
      >
        <h1 className="text-7xl text-center leading-[120%] font-bold max-sm:text-[42px]">
          Статьи
        </h1>
        <section className="grid grid-cols-2 max-w-[1180px] mx-auto gap-5 max-md:gap-[10px] mt-[60px] max-[1185px]:grid-cols-1 max-[1185px]:justify-items-center">
          {articleData?.slice(0, ShowElement).map((article, index) => (
            <div
              key={index}
              className={` max-w-[580px] max-sm:max-h-[363px] max-lg:mx-auto`}
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
          ))}
        </section>
        <div className="w-full">
        <span className="flex w-[161px] mx-auto justify-center mt-[60px] items-center text-lg font-semibold text-text-hover leading-[160%] hover:text-text-hover_primary transition-all gap-x-[10px] group cursor-pointer" onClick={AddElement}><MoreIcon/> Показать ещё</span>
        </div>
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
