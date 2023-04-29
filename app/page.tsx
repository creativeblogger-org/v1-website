import getPostMetadata from "../components/getPostMetaData";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-4 sd:grid-cols-2">
      {postPreviews}
    </div>
  );
};

export default HomePage;
