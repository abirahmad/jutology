import Head from "next/head";

const DynamicHead = ({ title, description, keywords, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={typeof window !== "undefined" ? window.location.href : ""}
    />
  </Head>
);

export default DynamicHead;
