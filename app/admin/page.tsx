"use client";
import React, { useState, useRef } from "react";

const CDN_API = {
  upload: "/api/cdn/add",
  list: "/api/cdn/get",
  delete: "/api/cdn/delete",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  async function fetchFiles() {
    setLoading(true);
    setError("");
    const res = await fetch(CDN_API.list);
    if (res.ok) {
      const data = await res.json();
      setFiles(data.files);
      setAuthed(true);
      setError("");
    } else {
      setError("Failed to fetch files");
    }
    setLoading(false);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!fileInput.current?.files?.[0]) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", fileInput.current.files[0]);
    const res = await fetch(CDN_API.upload, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await fetchFiles(password);
      setError("File uploaded!");
    } else {
      const data = await res.json();
      setError(data.error || "Upload failed");
    }
    setTimeout(() => setError("") , 2000);
    setLoading(false);
  }

  async function handleDelete(filename: string) {
    setLoading(true);
    const res = await fetch(CDN_API.delete, {
      method: "POST",
      body: JSON.stringify({ filename }),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      await fetchFiles();
      setError("File deleted!");
    } else {
      setError("Delete failed");
    }
    setTimeout(() => setError("") , 2000);
    setLoading(false);
  }

  function isImage(file: string) {
    return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file);
  }

  function copyLink(url: string) {
    navigator.clipboard.writeText(url);
    setError("Link copied!");
    setTimeout(() => setError(""), 1500);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    await fetchFiles();
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--background-color)]">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 p-8 border rounded-xl shadow-xl bg-white w-full max-w-sm">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>Admin Login</h1>
          <input
            type="password"
            placeholder="CDN Admin Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">Login</button>
          {error && <p className="text-red-600 font-semibold text-center">{error}</p>}
        </form>
      </main>
  );
  }

  return (
    <main className="flex min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-full bg-[var(--secondary-color)] text-white p-8 gap-8 shadow-xl rounded-r-3xl">
        <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--primary-color)' }}>Admin</h2>
        <nav className="flex flex-col gap-4">
          <span className="font-semibold text-lg">Dashboard</span>
          <span className="font-semibold text-lg">Upload</span>
          <span className="font-semibold text-lg">Files</span>
        </nav>
      </aside>
      {/* Main Content */}
      <section className="flex-1 flex flex-col items-center p-8">
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--primary-color)' }}>CDN Admin Panel</h1>
        <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 mb-10 w-full max-w-lg bg-white p-6 rounded-xl shadow-xl">
          <input type="file" ref={fileInput} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition">Upload</button>
        </form>
        <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--accent-color)' }}>Files</h2>
        {loading ? (
          <div className="text-lg text-gray-500">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {files.map(file => (
              <div key={file} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center gap-4 border hover:shadow-2xl transition">
                {isImage(file) ? (
                  <img src={`/cdn/${file}`} alt={file} className="w-32 h-32 object-cover rounded-lg border" />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-lg border text-gray-400">No Preview</div>
                )}
                <a href={`/cdn/${file}`} target="_blank" rel="noopener" className="text-blue-600 underline break-all">{file}</a>
                {isImage(file) && (
                  <button
                    onClick={() => copyLink(`${window.location.origin}/cdn/${file}`)}
                    className="bg-blue-500 text-white px-4 py-1 rounded shadow hover:bg-blue-700 transition"
                  >
                    Copy Link
                  </button>
                )}
                <button
                  onClick={() => handleDelete(file)}
                  className="bg-red-600 text-white px-4 py-1 rounded shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {error && (
          <div className={`fixed bottom-8 right-8 px-6 py-3 rounded-xl shadow-xl font-semibold text-lg z-50 transition-all duration-300 ${error.includes('failed') || error.includes('exists') ? 'bg-red-600' : 'bg-green-600'} text-white`}>{error}</div>
        )}
      </section>
    </main>
  );
}