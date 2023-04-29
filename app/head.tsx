import { name, description } from "../config/config";

export default function Head() {
  return (
    <>
      <title>{name}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name={name} />
      <meta name="description" content={description} />
      <link rel="icon" href="/CB.webp" />
    </>
  );
}
