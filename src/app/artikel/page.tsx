"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  featured_image_url: string | null;
  published_at: string | null;
}

export default function ArticlesPage() {
  const { language, t } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("id, slug, title, excerpt, featured_image_url, published_at")
        .order("published_at", { ascending: false });

      if (!error && data) {
        setArticles(data as Article[]);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const pageTitle = language === "id" ? "Artikel" : "Articles";
  const pageSubtitle =
    language === "id"
      ? "Kumpulan artikel, panduan, dan cerita perjalanan seputar Sumbawa, hiu paus, dan destinasi sekitarnya."
      : "A collection of articles, guides, and stories about Sumbawa, whale sharks, and nearby destinations.";

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <header className="mb-10">
            <p className="text-sm text-gray-500 mb-2">
              <Link href="/" className="hover:underline">
                {t.home}
              </Link>{" "}
              / <span className="text-gray-700">{pageTitle}</span>
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{pageTitle}</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{pageSubtitle}</p>
          </header>

          {loading ? (
            <p className="text-gray-600">Loading articles...</p>
          ) : articles.length === 0 ? (
            <p className="text-gray-600">
              {language === "id"
                ? "Belum ada artikel yang dipublikasikan."
                : "No articles have been published yet."}
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article) => {
                const date =
                  article.published_at && !Number.isNaN(Date.parse(article.published_at))
                    ? new Date(article.published_at)
                    : null;

                return (
                  <Link
                    key={article.id}
                    href={`/artikel/${article.slug}`}
                    className="block rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white"
                  >
                    {article.featured_image_url && (
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={article.featured_image_url}
                          alt={article.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      {date && (
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                          {date.toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      )}
                      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h2>
                      {article.excerpt && (
                        <p className="text-sm text-gray-700 line-clamp-3 mb-3">{article.excerpt}</p>
                      )}
                      <span className="inline-flex items-center text-sm font-medium text-[#00a6b5]">
                        {language === "id" ? "Baca selengkapnya" : "Read more"}
                        <span className="ml-1">→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
