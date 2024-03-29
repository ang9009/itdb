import React, { useState } from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import getAllToilets from "../../queries/getAllToilets";
import { useRouter } from "next/router";

//Lazy loading for map
const Index = dynamic(() => import("../../components/ui/Map"), {
  ssr: false,
});

const MapPage = () => {
  const router = useRouter();
  const lat = router.query?.lat;
  const lng = router.query?.lng;

  return (
    <>
      <Index lat={lat} lng={lng} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("toilets", () => getAllToilets());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MapPage;
