import Header from "@/components/home/header";
import Promotions from "@/components/home/promotions";
import CategoryCards from "@/components/home/category-cards";
import MainPromo from "@/components/home/main-promo";
import Recommended from "@/components/home/recommended";
import GoldPromo from "@/components/home/gold-promo";

export default function Home() {
  return (
    <div>
      <Header />
      <Promotions />
      <CategoryCards />
      <MainPromo />
      <Recommended />
      <GoldPromo />
    </div>
  );
}
