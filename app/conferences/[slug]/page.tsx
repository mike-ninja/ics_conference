import NotionService from "../../../services/notion-service";
// import { BlogPost } from "../../@types/schema";

async function getConference(slug: string) {
  const notionService = new NotionService();

  // @ts-ignore
  const p = await notionService.getSingleBlogPost(slug);
  if (!p) {
    throw "";
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  };
}

export default async function ConferencePage({ params }: any) {
  const conference = await getConference(params.slug);
  console.log(conference);
  return (
    <div>
      <h1>Conference</h1>
    </div>
  );
}
