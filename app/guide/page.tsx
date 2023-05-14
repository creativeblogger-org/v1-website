import React from "react";
import Link from "next/link";
import GuideCard from "../../components/GuidCard";

const GuidePage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-coco">
        Guide du fonctionnement de la plateforme
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-4 sd:grid-cols-2">
        <GuideCard title="Guide des utilisateurs" route="/users" />
        <GuideCard title="Guide des rédacteurs" route="/redacteurs" />
        <GuideCard title="Guide des modérateurs" route="/mods" />
      </div>
    </div>
  );
};

export default GuidePage;
