import NotionService from "../../services/notion-service";
import { BlogPost } from "../../@types/schema";
import BlogCard from "./BlogCard";

async function getConferences() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

const ConferencesCards = async () => {
  const conferences = await getConferences();

  return (
    <section className="py-6">
      <div className="h-full pt-4 pb-16 mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-4xl text-black">
            Our Conferences
          </h1>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {conferences.props.posts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesCards;
