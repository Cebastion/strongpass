import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Используем правильную сигнатуру для обработки GET запроса
export async function  GET(request: Request) {
  const url = new URL(request.url);

  // Получаем параметр id из query
  const id = url.searchParams.get('id');

  // Если параметр id не найден, возвращаем ошибку
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  // Путь к файлу MDX
  const filePath = path.join(process.cwd(), 'app/markdown', `article_${id}.mdx`);

  // Проверяем, существует ли файл
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  // Читаем содержимое файла
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  // Возвращаем контент статьи
  return NextResponse.json({ content });
}
