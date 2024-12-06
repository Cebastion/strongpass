import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

interface ArticleData {
  title: string;
  date: string;
  img: string;
  text: string;
  content: string;
}

const getArticles = () => {
  const articlesDir = path.join(process.cwd(), 'app/markdown'); // Папка с MDX-файлами
  const fileNames = fs.readdirSync(articlesDir);

  return fileNames
    .map((fileName) => {
      const filePath = path.join(articlesDir, fileName);
      const fileStat = fs.statSync(filePath);

      // Проверяем, является ли текущий путь файлом
      if (!fileStat.isFile()) {
        return null; // Пропускаем директории
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        img: data.img,
        text: data.text,
        content, // Полный текст статьи
      } as ArticleData;
    })
    .filter((article) => article !== null); // Убираем `null` значения
};


// Обработчик GET-запросов
export async function GET() {
  const articles = getArticles();
  return  NextResponse.json(articles);
}

/*


import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

interface ArticleData {
  title: string;
  date: string;
  img: string;
  text: string;
  content: string;
}

const getArticles = () => {
  const articlesDir = path.join(process.cwd(), 'app/markdown'); // Папка с MDX-файлами
  const fileNames = fs.readdirSync(articlesDir);

  return fileNames
    .map((fileName) => {
      const filePath = path.join(articlesDir, fileName);
      const fileStat = fs.statSync(filePath);

      // Проверяем, является ли текущий путь файлом
      if (!fileStat.isFile()) {
        return null; // Пропускаем директории
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      console.log(data)

      return {
        title: data.title,
        date: data.date,
        img: data.img,
        text: data.text,
        content, // Полный текст статьи
      } as ArticleData;
    })
    .filter((article) => article !== null); // Убираем `null` значения
};


// Обработчик GET-запросов
export async function GET() {
  const articles = getArticles();
  return  NextResponse.json(articles);
}


*/



/*

import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// API для получения списка MDX файлов
export async function GET() {
  try {
    const markdownDir = path.join(process.cwd(), 'app/markdown'); // Папка с вашими MDX файлами
    console.log(markdownDir);
    
    // Проверяем, существует ли папка с MDX файлами
    if (!fs.existsSync(markdownDir)) {
      console.log('Папка не найдена');
      return NextResponse.json({ error: 'Directory not found' }, { status: 404 });
    }

    // Читаем все файлы из папки и фильтруем только MDX файлы
    const files = fs.readdirSync(markdownDir).filter(file => file.endsWith('.mdx'));

    // Если нет файлов MDX, возвращаем сообщение
    if (files.length === 0) {
      return NextResponse.json({ message: 'No MDX files found' }, { status: 404 });
    }

    // Возвращаем список MDX файлов
    return NextResponse.json(files);
  } catch (error) {
    console.error('Error reading MDX files:', error);
    // Возвращаем ошибку сервера
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

*/