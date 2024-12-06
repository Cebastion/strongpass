import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params; // Получение параметра id из маршрута

  // Путь к файлу MDX
  const filePath = path.join(process.cwd(), 'app/markdown', `article_${id}.mdx`);

  // Проверяем, существует ли файл
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  // Читаем содержимое файла
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  // Возвращаем метаданные и контент статьи
  return NextResponse.json({
    content,
  });
}
