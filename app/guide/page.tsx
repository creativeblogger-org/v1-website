import React from "react";
import Link from "next/link";

const GuidePage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">
        Guide du fonctionnement de la plateforme
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-4 sd:grid-cols-2">
        <center>
          <Link href="/users">
            <div className="border-2 w-1/3 p-8 bg-slate-800 rounded-md">
              <h2 className="text-center text-yellow-500">
                Guide des utilisateurs
              </h2>
            </div>
          </Link>
        </center>
        <center>
          <Link href="/redacteurs">
            <div className="border-2 w-1/3 p-8 bg-slate-800 rounded-md">
              <h2 className="text-center text-yellow-500">
                Guide des rédacteurs
              </h2>
            </div>
          </Link>
        </center>
        <center>
          <Link href="/mods">
            <div className="border-2 w-1/3 p-8 bg-slate-800 rounded-md">
              <h2 className="text-center text-yellow-500">
                Guide des modérateurs
              </h2>
            </div>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default GuidePage;
