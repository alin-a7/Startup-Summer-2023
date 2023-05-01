import Layout from "@/components/Layout";
import { useAppSelector } from "@/store/hooks";

import styles from "@/styles/Home.module.scss";

export default function Favourites() {
  const app = useAppSelector((state) => state.app);
  console.log(app);
  return <Layout>Избранное</Layout>;
}
