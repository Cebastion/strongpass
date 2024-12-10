"use client";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ArticlePage } from "@/app/markdown/template/ArticlePage";
import Link from "next/link";
import '../../config/scroll.css'

const page = () => {
  const [isFormQuestion, setIsFormQuestion] = useState(false);
  const [Article, setArticle] = useState<MDXRemoteSerializeResult | null>(null);
  const params = useParams(); // Извлекаем параметры маршрута
  const id = params.id;

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
  return (
    <>
      <Header
        isFormQuestion={isFormQuestion}
        setIsFormQuestion={setIsFormQuestion}
      />
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
        <Carousel />
      </main>
      <Footer setIsFormQuestion={setIsFormQuestion} />
    </>
  );
};

export default page;
