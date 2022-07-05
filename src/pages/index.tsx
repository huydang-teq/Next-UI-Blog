import { BaseLayout } from "@src/Components/Layouts";
import HomeContainer from "@src/Container/Home";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
const Home: NextPageWithLayout = () => {
  return <HomeContainer />;
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
export default Home;
