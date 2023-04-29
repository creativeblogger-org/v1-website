import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetaData";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      author: matterResult.data.author,
    };
  });
  function dateSortDesc(a: number, b: number) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  }

  return posts.sort((a, b) => dateSortDesc(a.date, b.date));
  // return posts;
};

export default getPostMetadata;
