"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

interface Article {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image_url?: string | null;
  published_at: string | null;
}

export default function AdminArticlesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingContentImage, setUploadingContentImage] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const contentImageInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const auth = localStorage.getItem("admin_auth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
      fetchArticles();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "sumbawa2025") {
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_auth", "authenticated");
      }
      setIsAuthenticated(true);
      fetchArticles();
    } else {
      alert("Password salah!");
    }
  };

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("id, slug, title, excerpt, content, featured_image_url, published_at")
      .order("published_at", { ascending: false });

    if (error) {
      alert("Error loading articles: " + error.message);
      return;
    }

    setArticles((data || []) as Article[]);
  };

  const newArticle = () => {
    setEditingArticle({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image_url: null,
      published_at: new Date().toISOString().slice(0, 16),
    });
    setPreviewMode(false);
  };

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const updateField = <K extends keyof Article>(key: K, value: Article[K]) => {
    setEditingArticle((prev) => (prev ? { ...prev, [key]: value } : prev) as Article | null);
  };

  const applyTag = (openTag: string, closeTag: string) => {
    if (!editingArticle || !contentRef.current) return;
    const textarea = contentRef.current;
    const start = textarea.selectionStart ?? 0;
    const end = textarea.selectionEnd ?? 0;
    const text = editingArticle.content || "";
    const selected = text.slice(start, end);

    const newText = text.slice(0, start) + openTag + selected + closeTag + text.slice(end);

    setEditingArticle({ ...editingArticle, content: newText });

    requestAnimationFrame(() => {
      textarea.focus();
      const cursor = start + openTag.length + selected.length + closeTag.length;
      textarea.selectionStart = textarea.selectionEnd = cursor;
    });
  };

  const handleImageUpload = async (file: File) => {
    if (!editingArticle) {
      alert("Buat atau pilih artikel dulu sebelum upload gambar.");
      return;
    }
    if (!editingArticle.slug) {
      alert("Isi slug artikel terlebih dahulu sebelum upload gambar.");
      return;
    }

    try {
      setUploadingImage(true);
      const ext = file.name.split(".").pop() || "jpg";
      const fileName = `${editingArticle.slug}-${Date.now()}.${ext}`;
      const filePath = `articles/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file, { cacheControl: "3600", upsert: false });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("images").getPublicUrl(filePath);
      const imageUrl = urlData.publicUrl;

      setEditingArticle((prev) => (prev ? { ...prev, featured_image_url: imageUrl } : prev));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert("Error uploading image: " + message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("Files selected:", files ? files.length : 0);

    if (!files || files.length === 0 || !editingArticle) return;

    if (!editingArticle.slug) {
      alert("Isi slug artikel terlebih dahulu sebelum upload gambar konten.");
      return;
    }

    alert(`Uploading ${files.length} gambar...`);

    try {
      setUploadingContentImage(true);
      const newImageTags: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`Uploading file ${i + 1}/${files.length}:`, file.name);

        const ext = file.name.split(".").pop() || "jpg";
        // Generate truly unique filename with timestamp + random string + index
        const randomStr = Math.random().toString(36).substring(2, 8);
        const timestamp = Date.now();
        const fileName = `${editingArticle.slug}-content-${timestamp}-${randomStr}-${i}.${ext}`;
        const filePath = `articles/${fileName}`;

        console.log(`Uploading to path: ${filePath}`);

        const { error: uploadError } = await supabase.storage
          .from("images")
          .upload(filePath, file, { cacheControl: "3600", upsert: false });

        if (uploadError) {
          console.error(`Error uploading ${file.name}:`, uploadError);
          throw uploadError;
        }

        const { data: urlData } = supabase.storage.from("images").getPublicUrl(filePath);
        const imageUrl = urlData.publicUrl;

        console.log(`Image ${i + 1} uploaded successfully:`, imageUrl);
        newImageTags.push(`<img src="${imageUrl}" alt="Content image" class="w-full rounded-lg my-6" />`);

        // Small delay to ensure unique timestamps and avoid race conditions
        if (i < files.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      console.log(`Total images uploaded: ${newImageTags.length}`);
      console.log("All image tags:", newImageTags);

      // Insert all tags into content safely - APPEND TO END to avoid overwriting issues
      setEditingArticle((prev) => {
        if (!prev) return null;

        const currentContent = prev.content || "";
        console.log("Current content length before update:", currentContent.length);

        const tagsString = "\n" + newImageTags.join("\n") + "\n";

        // Append to the end of the content to be safe
        const newText = currentContent + tagsString;

        console.log("New content length:", newText.length);

        return { ...prev, content: newText };
      });

      alert(`Berhasil menambahkan ${newImageTags.length} gambar ke bagian bawah konten!`);

    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("Upload error:", error);
      alert("Error uploading content image: " + message);
    } finally {
      setUploadingContentImage(false);
      // Reset input
      if (contentImageInputRef.current) {
        contentImageInputRef.current.value = "";
      }
    }
  };

  const triggerContentImageUpload = () => {
    contentImageInputRef.current?.click();
  };

  const saveArticle = async () => {
    if (!editingArticle) return;
    if (!editingArticle.title.trim()) {
      alert("Title wajib diisi.");
      return;
    }

    const slug = editingArticle.slug.trim() || slugify(editingArticle.title);
    if (!slug) {
      alert("Slug tidak valid.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        slug,
        title: editingArticle.title.trim(),
        excerpt: editingArticle.excerpt?.trim() || null,
        content: editingArticle.content || "",
        featured_image_url: editingArticle.featured_image_url || null,
        published_at: editingArticle.published_at
          ? new Date(editingArticle.published_at).toISOString()
          : null,
      };

      if (editingArticle.id) {
        const { error } = await supabase
          .from("articles")
          .update(payload)
          .eq("id", editingArticle.id);
        if (error) throw error;
        alert("Article updated.");
      } else {
        const { error } = await supabase.from("articles").insert([payload]);
        if (error) throw error;
        alert("Article created.");
      }

      setEditingArticle(null);
      fetchArticles();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert("Error saving article: " + message);
    } finally {
      setSaving(false);
    }
  };

  const deleteArticle = async (article: Article) => {
    if (!article.id) return;
    if (!confirm("Hapus artikel ini?")) return;

    try {
      const { error } = await supabase.from("articles").delete().eq("id", article.id);
      if (error) throw error;
      alert("Article deleted.");
      fetchArticles();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert("Error deleting article: " + message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login - Articles</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Article Manager</h1>
            <p className="text-sm text-gray-600">
              Buat, edit, dan kelola konten artikel profesional untuk Go Whale Shark Sumbawa.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
            >
              ← Back to Admin Dashboard
            </Link>
            <button
              onClick={newArticle}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-semibold"
            >
              + New Article
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Articles List */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-1 max-h-[80vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Articles</h2>
            {articles.length === 0 ? (
              <p className="text-sm text-gray-500">No articles yet. Click "+ New Article" to create one.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {articles.map((article) => (
                  <li key={article.id} className="py-3 flex items-start gap-3">
                    {article.featured_image_url && (
                      <div className="relative w-12 h-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={article.featured_image_url}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <button
                        className="text-left text-sm font-semibold text-gray-900 hover:text-blue-600 line-clamp-2"
                        onClick={() => setEditingArticle(article)}
                      >
                        {article.title}
                      </button>
                      <p className="text-xs text-gray-500 break-all">/{article.slug}</p>
                      {article.published_at && (
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(article.published_at).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => deleteArticle(article)}
                      className="text-xs text-red-600 hover:text-red-800 ml-2"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Editor */}
          <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2">
            {editingArticle ? (
              <div className="space-y-4">
                {/* Split View: Editor on Left, Live Preview on Right */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* LEFT: Editor Fields */}
                  <div className="space-y-4 border-r pr-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Article</h3>

                    <div className="grid gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-1">Title</label>
                        <input
                          type="text"
                          value={editingArticle.title}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateField("title", value);
                            if (!editingArticle.id) {
                              updateField("slug", slugify(value));
                            }
                          }}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                          placeholder="Article title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-1">Slug (URL)</label>
                        <input
                          type="text"
                          value={editingArticle.slug}
                          onChange={(e) => updateField("slug", slugify(e.target.value))}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                          placeholder="contoh: whale-shark-guide"
                        />
                        <p className="text-xs text-gray-500 mt-1">Digunakan di URL: /artikel/&lt;slug&gt;</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-1">Short Excerpt</label>
                        <textarea
                          value={editingArticle.excerpt}
                          onChange={(e) => updateField("excerpt", e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm min-h-[60px]"
                          placeholder="Ringkasan singkat untuk card artikel dan SEO."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                          Cover Image (Gambar Sampul)
                          <span className="block text-xs font-normal text-gray-500 mt-1">
                            Gambar utama di atas judul. Cuma bisa 1 gambar. Upload baru akan mengganti yang lama.
                          </span>
                        </label>
                        {editingArticle.featured_image_url && (
                          <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden border bg-gray-100">
                            <Image
                              src={editingArticle.featured_image_url}
                              alt={editingArticle.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleImageUpload(file);
                          }}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                        />
                        {uploadingImage && (
                          <p className="text-xs text-blue-600 mt-1 font-semibold">Uploading cover image...</p>
                        )}
                      </div>

                      <hr className="my-6 border-gray-200" />

                      <div>
                        <label className="block text-sm font-semibold mb-1">Publish Date & Time</label>
                        <input
                          type="datetime-local"
                          value={editingArticle.published_at || ""}
                          onChange={(e) => updateField("published_at", e.target.value)}
                          className="w-full px-3 py-2 border rounded-lg text-sm"
                        />
                      </div>

                      <div className="pt-4">
                        <label className="block text-base font-bold text-gray-900 mb-2">
                          Konten Artikel
                          <span className="block text-xs font-normal text-gray-500 mt-1">
                            Tulis cerita di sini. Gunakan tombol <b>"Insert Gambar ke Konten"</b> untuk memasukkan banyak foto.
                          </span>
                        </label>
                        <div className="flex flex-wrap items-center gap-2 mb-3 p-2 bg-gray-50 rounded-lg border">
                          <span className="text-xs font-semibold text-gray-500 mr-2">Format Teks:</span>
                          <button
                            type="button"
                            onClick={() => applyTag("<strong>", "</strong>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium"
                            title="Bold"
                          >
                            <strong>B</strong>
                          </button>
                          <button
                            type="button"
                            onClick={() => applyTag("<em>", "</em>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium italic"
                            title="Italic"
                          >
                            I
                          </button>
                          <button
                            type="button"
                            onClick={() => applyTag("<h2>", "</h2>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium"
                          >
                            H2
                          </button>
                          <button
                            type="button"
                            onClick={() => applyTag("<h3>", "</h3>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium"
                          >
                            H3
                          </button>
                          <button
                            type="button"
                            onClick={() => applyTag("<ul>\n<li>", "</li>\n</ul>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium"
                          >
                            List
                          </button>
                          <button
                            type="button"
                            onClick={() => applyTag("<p>", "</p>")}
                            className="px-3 py-1.5 border rounded bg-white hover:bg-gray-100 text-xs font-medium"
                          >
                            Paragraf
                          </button>

                          <div className="w-px h-6 bg-gray-300 mx-2"></div>

                          <button
                            type="button"
                            onClick={triggerContentImageUpload}
                            className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 text-sm font-bold shadow-sm transition-colors ml-auto"
                            disabled={uploadingContentImage}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {uploadingContentImage ? "Uploading..." : "Insert Gambar ke Konten"}
                          </button>
                        </div>
                        <textarea
                          ref={contentRef}
                          value={editingArticle.content}
                          onChange={(e) => updateField("content", e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg text-sm min-h-[400px] font-mono leading-relaxed focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Mulai tulis artikel di sini..."
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Tips: Gambar yang diupload lewat tombol hijau akan muncul di paling bawah. Anda bisa memindahkan kode <code>&lt;img ... /&gt;</code> ke sela-sela paragraf sesuka hati.
                        </p>
                        <input
                          type="file"
                          ref={contentImageInputRef}
                          onChange={handleContentImageUpload}
                          className="hidden"
                          accept="image/*"
                          multiple
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Live Preview */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                    <div className="border rounded-lg p-4 bg-gray-50 min-h-[600px] max-h-[80vh] overflow-y-auto">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">
                          {editingArticle.title || "Untitled Article"}
                        </h1>
                        {editingArticle.published_at && (
                          <p className="text-gray-500 text-sm mb-4">
                            {new Date(editingArticle.published_at).toLocaleDateString("id-ID", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        )}
                        {editingArticle.featured_image_url && (
                          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                            <Image
                              src={editingArticle.featured_image_url}
                              alt={editingArticle.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div
                          className="article-content"
                          style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowWrap: 'break-word' }}
                          dangerouslySetInnerHTML={{ __html: editingArticle.content || "<p class='text-gray-400 italic'>Konten akan muncul di sini...</p>" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 justify-end pt-2 border-t mt-4">
                  <button
                    type="button"
                    onClick={() => setEditingArticle(null)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveArticle}
                    disabled={saving}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save Article"}
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Pilih artikel dari daftar atau klik "+ New Article" untuk mulai menulis.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
