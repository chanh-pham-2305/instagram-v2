import { fetchPostById } from "@/lib/data";
import {PostEdit} from "@/components/Post/PostEdit";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const EditPostPage = async ({ params: { id } }: Props) => {
  const post = await fetchPostById(id);

  if (!post) {
    notFound();
  }

  return <PostEdit id={id} post={post} />;
}

export default EditPostPage;