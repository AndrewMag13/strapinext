"use client";

import { Heading } from "@chakra-ui/react";
import PostCard from "./postCard";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: any;
  updated_at: any;
  published_at: any;
}
interface PostJsonResponse {
  data: Post[];
}
const Main = ({ data }: PostJsonResponse) => {
  const router = useRouter();
  return (
    <>
      <Heading>My blogueue</Heading>
      <br />
      <div>
        {data.map(post => (
          <PostCard
            key={post.id}
            title={post.attributes.title}
            publishedAt={post.attributes.publishedAt}
            onClick={() => router.push(`/${post.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
