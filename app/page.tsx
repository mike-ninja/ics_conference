import NotionService from "../services/notion-service";
import { BlogPost } from "../@types/schema";

async function getConferences() {
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default async function HomePage() {
  const conferences = await getConferences();
  console.log(conferences.props);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Some Content</p>
      <ul>
        {conferences.props.posts.map((post: BlogPost) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
