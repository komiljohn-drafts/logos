import Banner from "../components/Banner";
import Category from "../components/Category";
import Header from "../components/Header";
import Menu from "../components/Menu";
import fakeDB from "../utils/fakeDb";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      {fakeDB.map((category) => (
        <Category key={category.id} products={category} />
      ))}
    </>
  );
}
