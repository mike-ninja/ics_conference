import Header from "../components/home/Header";
import WhatWeDo from "../components/home/WhatWeDo";
import WhoWeAre from "../components/home/WhoWeAre";
import Head from "next/head";
// import { BlogPost } from "../@types/schema";
// import ConferencesPage from "./conferences/page";
import ConferencesCards from "../components/home/ConferencesCards";

export default async function HomePage() {
  const title = "Test Blog";
  const description = "Welcome to my Notion Blog.";

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
          <ConferencesCards />
        </main>
      </div>
    </>
  );
}
