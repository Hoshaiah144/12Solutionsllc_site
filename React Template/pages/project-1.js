import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";

const Project1IsoTop = dynamic(
  () => import("../src/components/Project1IsoTop"),
  {
    ssr: false,
  }
);

const Project1 = () => {
  return (
    <Layout>
      <PageBanner
        pageName={"Portfolio Grid"}
        pageTitle={"Portfolio Grid View"}
      />
      <Project1IsoTop />
    </Layout>
  );
};
export default Project1;
