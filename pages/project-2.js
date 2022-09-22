import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Project2IsoTop = dynamic(
  () => import("../src/components/Project2IsoTop"),
  {
    ssr: false,
  }
);
const Project2 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Portfolio Masonry"} />
      <Project2IsoTop />
    </Layout>
  );
};
export default Project2;
