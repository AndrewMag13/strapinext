import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

const PostPage = async ({ params }: { params: { post: string } }) => {
  const data = await fetch(`http://localhost:1337/api/posts/${params.post}`, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
    cache: "no-cache",
  }).then(res => res.json());
  const cont: BlocksContent = [
    {
      type: "paragraph",
      children: await data.data.attributes.content,
    },
  ];
  console.log(
    "🚀 ~ PostPage ~ data.data.attributes.content:",
    data.data.attributes.content
  );
  return (
    <>
      <Box padding="10">
        <Link href="/" />
        <Heading>{data.data.attributes.title}</Heading>
        <Text>{data.data.attributes.publishedAt}</Text>
        <Divider marginTop="10" marginBottom="10"></Divider>
        {/* <Text> */}
        <div>
          <BlocksRenderer content={cont} />
        </div>
        {/* </Text> */}
      </Box>
    </>
  );
};

export default PostPage;
