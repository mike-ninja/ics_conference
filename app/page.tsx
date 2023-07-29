import NotionService from "../services/notion-service";
import BlogCard from "../components/home/BlogCard";
import Header from "../components/home/Header";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeAre from "../components/home/WhoWeAre";
import Head from "next/head";
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
  const title = "Test Blog";
  const description = "Welcome to my Notion Blog.";
  const conferences = await getConferences();

  console.log(conferences.props);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={"description"}
          title={"description"}
          content={description}
        />
        <meta name={"og:title"} title={"og:title"} content={title} />
        <meta
          name={"og:description"}
          title={"og:description"}
          content={title}
        />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="max-w-5xl mx-auto relative">
          <WhoWeAre />
          <WhatWeDo />
          <div className="h-full pt-4 pb-16 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-extrabold text-4xl text-black">
                Notion + NextJS Sample Blog
              </h1>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
              {conferences.props.posts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
