"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  published_at: string | null;
}

export default function ArticleDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const { language, t } = useLanguage();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, slug, title, excerpt, content, featured_image_url, published_at")
        .eq("slug", slug)
        .maybeSingle();

      if (!error && data) {
        setArticle(data as Article);
      }
      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const pageTitle = language === "id" ? "Artikel" : "Articles";

  const renderDate = (value: string | null) => {
    if (!value || Number.isNaN(Date.parse(value))) return null;
    const d = new Date(value);
    return d.toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <p className="text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:underline">
                {t.home}
              </Link>{" "}
              /{" "}
              <Link href="/artikel" className="hover:underline">
                {pageTitle}
              </Link>{" "}
              / <span className="text-gray-700">{article?.title || "..."}</span>
            </p>

            {loading && !article ? (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Loading...</h1>
            ) : article ? (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{article.title}</h1>
                {article.excerpt && (
                  <p className="text-lg text-gray-700 mb-3">{article.excerpt}</p>
                )}
                {renderDate(article.published_at) && (
                  <p className="text-sm text-gray-500">
                    {language === "id" ? "Dipublikasikan" : "Published"}: {renderDate(article.published_at)}
                  </p>
                )}
              </>
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {language === "id" ? "Artikel tidak ditemukan" : "Article not found"}
              </h1>
            )}
          </header>

          {article && (
            <>
              {article.featured_image_url && (
                <div className="relative w-full h-72 md:h-96 mb-8 rounded-xl overflow-hidden bg-gray-200">
                  <Image
                    src={article.featured_image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}

              <div className="max-w-none prose prose-lg">
                <div
                  className="article-content text-gray-700 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </>
          )}
        </div>
      </article>
    </main>
  );
}
