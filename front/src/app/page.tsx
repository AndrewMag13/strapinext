import { Center, ChakraProvider, VStack } from "@chakra-ui/react";

import Main from "./main";

export default async function Home() {
  // const data = await fetch("http://localhost:1337/api/posts", {
  //   headers: {
  //     Accept: "application/json",
  //   },
  //   method: "GET",
  // }).then(res => res.json());
  const data = await fetch("http://localhost:1337/api/posts", {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
    cache: "no-cache",
  }).then(res => res.json());

  return (
    <ChakraProvider>
      <main>
        <Center>
          <VStack>
            <Main data={data.data} />
          </VStack>
        </Center>
      </main>
    </ChakraProvider>
  );
}
