// components/MetaData.js
import React from "react";
import Head from "next/head"; // Import Next.js Head component for metadata

const MetaData = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default MetaData;
