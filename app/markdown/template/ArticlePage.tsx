import { MDXProvider } from "@mdx-js/react";
import { ReactNode, useEffect, useState } from "react";
import Arrow from "../components/Arrow";
import './css/ol.css'
import './css/ul.css'
import './css/AnchorList.css'
import React from "react";

// ArticlePage component
export  function ArticlePage({ children }: { children: ReactNode }) {
  const components = {
    h1: (props: any) => {
      return(
        <h1 className="text-5xl font-bold leading-[120%] max-md:text-[30px]" {...props} />
      )
  },
    h2: (props: any) => (
      <h2 className="text-[32px] font-semibold leading-[130%] max-md:text-[22px]" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-2xl font-semibold leading-[120%] max-md:text-[20px]" {...props} />
    ),
    p: (props: any) => (
      <p className="text-lg font-normal leading-[160%] max-md:text-base" {...props} />
    ),
    ol: (props: any) => (
      <ol className="custom-ol" {...props} />
    ),
    ul: (props: any) => (
      <ul className="custom-ul" {...props} />
    ),
    li: (props: any) => (
      <li className="flex" >
        <div className="text-lg font-normal leading-[160%] max-md:text-base">{props.children}</div>
      </li>
    ),
    Div: (props: any) => (
      <div className="flex flex-col gap-y-[10px]" id={props.id} {...props}/>
    ),
    ArticleDate,
    Text,
    Title,
    Container,
    BigImage,
    ImageComponent,
    CopyText,
    AnchorBlock,
    BlockText,
    Anchor,
    BlockComment,
    AnchorList
  };
  return (
    <MDXProvider components={components}>
      <div className="text-2xl leading-[140%] font-semibold">{children}</div>
    </MDXProvider>
  );
}

// ContainerText component
export const Container = (props: any) => {
  return (
    <div
      className="w-full flex  gap-x-5 mt-10 max-[1060px]:flex-col"
      {...props}
    />
  );
};

type AnchorBlockProps = {
  children: React.ReactElement<{ activeId: string | null; setActiveId: (id: string) => void }>[];
};

export const AnchorBlock = ({ children }: AnchorBlockProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="w-[380px] h-[calc(auto - 10%)] max-[1060px]:w-full max-[1060px]:mb-10">
      <div className="flex flex-col gap-y-[10px] sticky top-0">
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { activeId, setActiveId })
        )}
      </div>
    </div>
  );
};


export const Anchor = ({
  targetId,
  children,
  activeId,
  setActiveId,
}: {
  targetId: string;
  children: React.ReactNode;
  activeId: string | null;
  setActiveId: (id: string) => void;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveId(targetId); // Устанавливаем активный ID
        }
      },
      { threshold:0.9 }
    );

    const element = document.getElementById(targetId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [targetId, setActiveId]);

  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = activeId === targetId;

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${isActive ? "bg-bg-custom_green rounded-2xl px-6 py-4" : ""}`}
    >
      <span className={`text-2xl font-semibold leading-[140%] ${isActive ? "text-white" : "text-[#7a7e80]"} max-md:text-[20px]`}>
        {children}
      </span>
    </div>
  );
};


type AnchorListProps = {
  targetId: string;
  title: string;
  list: { text: string; targetId: string }[];
  activeId: string | null;
  setActiveId: (id: string) => void;
};

export const AnchorList = ({
  targetId,
  title,
  list,
  activeId,
  setActiveId,
}: AnchorListProps) => {
  const [inViewItems, setInViewItems] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            setInViewItems((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }));
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 1,
        root: null,
      }
    );

    const observedElements: HTMLElement[] = [];

    list.forEach((item) => {
      const element = document.getElementById(item.targetId);
      if (element) {
        observer.observe(element);
        observedElements.push(element);
      }
      
      // Добавим наблюдение и для span элемента
      const spanElement = document.getElementById(`${targetId}`);
      if (spanElement) {
        observer.observe(spanElement);
        observedElements.push(spanElement);
      }
    });

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
    };
  }, [list, setActiveId]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-y-[5px]">
      <div
        onClick={() => handleClick(targetId)}
        className={`cursor-pointer ${
          activeId === targetId ? "bg-bg-custom_green rounded-2xl px-6 py-4" : ""
        }`}
      >
        <span
          id={`span-${targetId}`} // Добавляем ID для span
          className={`text-2xl font-semibold leading-[140%] max-md:text-[20px] ${
            activeId === targetId ? "text-white" : "text-[#7a7e80]"
          }`}
        >
          {title}
        </span>
      </div>
      <ul className="AnchorList">
        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.targetId)}
            className={`px-4 cursor-pointer ${
              activeId === item.targetId
                ? "bg-bg-custom_green rounded-2xl px-4 py-2 before:bg-white before:top-[52%] before:left-[5px]"
                : "before:bg-[#7a7e80] before:top-[57%] before:left-0"
            }`}
          >
            <span
              id={`span-${item.targetId}`} // Добавляем ID для span
              className={` max-md:text-[20px] ${
                activeId === item.targetId
                  ? "text-white pl-[5px]"
                  : "text-[#7a7e80]"
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};








export const BlockText = (props: any) => {
  return (
    <div className="max-w-[780px] flex flex-col gap-y-10 max-[1060px]:max-w-full" {...props} />
  )
}

export const BigImage = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) => (
  <img
    className="w-full rounded-[36px] object-cover max-h-[568px] mt-[30px] max-sm:rounded-2xl"
    src={src}
    alt={alt}
    {...props}
  />
);
// Title component
export const Title = (props: any) => (
  <h3 className="text-2xl font-semibold max-md:text-[20px]" {...props} />
);

export const ArticleDate = (props: any) => (
  <span className="text-base text-[#7a7e80] leading-[150%]" id={props.id} {...props} />
);

export const Text = (props: any) => (
  <span
    className="text-lg font-normal text-text-custom_gray_second line-clamp-2"
    {...props}
  />
);

export const ImageComponent = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) => (
  <img
    className="rounded-3xl max-h-[416px] object-cover w-full"
    src={src}
    alt={alt}
    {...props}
  />
);

export const CopyText = ({text}: {text: string}) => (
  <div className="px-5 py-6 flex flex-col gap-y-[10px] rounded-lg bg-[#f2f5f4]">
    <span className="font-medium text-base leading-[150%] max-sm:text-[12px]">{text}</span>
    <div >
      <svg 
      onClick={async () => await navigator.clipboard.writeText(text)} 
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
  </div>
);

export const BlockComment = ({title, text, link}: {title: string, text: string, link: string}) => (
  <div className="p-[30px] gap-x-[30px] flex rounded-2xl bg-[#f2f5f4] max-md:flex-col max-md:gap-x-0 max-md:gap-y-[30px]">
    <div>
      <svg
      className="max-md:w-[39px] max-md:h-[25px]"
        width="41"
        height="29"
        viewBox="0 0 41 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.6 18.125C40.5396 21.2063 39.4823 23.774 37.4281 25.8281C35.374 27.8823 32.8063 28.9396 29.725 29H29C28.1542 29 27.4594 28.7281 26.9156 28.1844C26.3719 27.6406 26.1 26.9458 26.1 26.1C26.1 25.2542 26.3719 24.5594 26.9156 24.0156C27.4594 23.4719 28.1542 23.2 29 23.2H29.725C31.175 23.1396 32.3833 22.6562 33.35 21.75C34.2563 20.7833 34.7396 19.575 34.8 18.125V17.4H29C27.3688 17.3396 26.0094 16.7656 24.9219 15.6781C23.8344 14.5906 23.2604 13.2313 23.2 11.6V5.8C23.2604 4.16875 23.8344 2.80938 24.9219 1.72188C26.0094 0.634375 27.3688 0.0604167 29 0H34.8C36.4313 0.0604167 37.7906 0.634375 38.8781 1.72188C39.9656 2.80938 40.5396 4.16875 40.6 5.8V18.125ZM17.4 18.125C17.3396 21.2063 16.2823 23.774 14.2281 25.8281C12.174 27.8823 9.60625 28.9396 6.525 29H5.8C4.95417 29 4.25938 28.7281 3.71563 28.1844C3.17188 27.6406 2.9 26.9458 2.9 26.1C2.9 25.2542 3.17188 24.5594 3.71563 24.0156C4.25938 23.4719 4.95417 23.2 5.8 23.2H6.525C7.975 23.1396 9.18333 22.6562 10.15 21.75C11.0563 20.7833 11.5396 19.575 11.6 18.125V17.4H5.8C4.16875 17.3396 2.80938 16.7656 1.72188 15.6781C0.634375 14.5906 0.0604167 13.2313 0 11.6V5.8C0.0604167 4.16875 0.634375 2.80938 1.72188 1.72188C2.80938 0.634375 4.16875 0.0604167 5.8 0H11.6C13.2313 0.0604167 14.5906 0.634375 15.6781 1.72188C16.7656 2.80938 17.3396 4.16875 17.4 5.8V18.125Z"
          fill="#3C0F3C"
        />
      </svg>
    </div>
    <div className="flex flex-col gap-y-[10px]">
        <h6 className="font-semibold text-lg leading-[160%] max-md:text-base">{title}</h6>
        <span className="font-normal text-lg leading-[160%] max-md:text-base">{text}</span>
        <a href={link} className="font-semibold text-lg leading-[140%] text-text-hover hover:text-text-hover_primary transition-all group inline-flex items-center gap-x-[5px] max-md:text-base">Узнать больше <Arrow /></a>
    </div>
  </div>
);

