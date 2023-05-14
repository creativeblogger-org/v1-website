import Link from "next/link";
import "../styles/404.css";

function Error({ statusCode }) {
  return (
    <div className="error">
      <div className="desc">
        <p>
          {statusCode
            ? `Une erreur ${statusCode} est survenue`
            : "An error occurred on client"}
        </p>
      </div>
      <Link href={"/"} className="link">
        <h1>Retourner à l'accueil</h1>
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
