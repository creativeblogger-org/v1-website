"use client";

import { useState } from "react";
import Button from "../../components/Button";
import usersData from "../../config/config.json";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Vérifier les informations de connexion
    const user = usersData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      document.cookie = "isAuthenticated=true; path=/;";
      window.location.href = "/upload";
    } else {
      // Afficher un message d'erreur si les informations de connexion sont incorrectes
      setErrorMessage("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <div>
      <h1 className="text-center font-coco text-3xl">Page de connexion</h1>
      <form
        className="border-2 border-solid p-11 border-slate-800 rounded-md"
        onSubmit={handleSubmit}
      >
        <label>Nom d'utilisateur:</label>
        <input
          className="w-full p-4 border-2 border-solid rounded-md"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <label>Mot de passe:</label>
        <input
          className="w-full p-4 border-2 border-solid rounded-md"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <Button type="submit" title="Se connecter" />
      </form>
      <br />
      {errorMessage && (
        <p className="text-center text-3xl text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}

export default LoginPage;
