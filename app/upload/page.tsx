"use client";

import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
import ProtectedRoute from "../../components/ProtectedRoute";
import Cookies from "js-cookie";

const UploadForm = () => {
  const handleLogout = () => {
    // Effacer les cookies et rediriger l'utilisateur vers la page de connexion
    Cookies.remove("isAuthenticated");
    window.location.href = "/signin";
  };
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(res.data.message);
      setFile("");
      setName("");
    } catch (err) {
      console.error(err);
      setMessage("Error uploading file");
    }
  };

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <ProtectedRoute>
      <div className="flex items-center justify-center w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Fichiers markdown uniquement ! <br />
                Voir le{" "}
                <a
                  className="underline decoration-solid text-yellow-500"
                  href="/redacteurs"
                >
                  guide d'utilisation
                </a>
              </p>
            </div>
            <input
              type="file"
              name="file"
              id="dropzone-file"
              className="hidden"
              accept=".md"
              onChange={handleFileChange}
            />
          </label>
          <br />
          <Button type="submit" title="Upload" />
          {message && (
            <p className="text-center text-3xl text-red-600">{message}</p>
          )}
        </form>
      </div>
      <br />
      <button
        className="bg-red-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full duration-500"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </ProtectedRoute>
  );
};

export default UploadForm;
