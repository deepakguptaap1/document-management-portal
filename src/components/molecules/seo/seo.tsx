import { SeoProps } from "@/interfaces/moelcules/molecules";
import Head from "next/head";

const Seo: React.FC<SeoProps> = ({
  title = "Document Management Portal",
  description = "Upload, manage, and view documents securely in one place.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
