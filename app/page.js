import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Home/Products/Products";
import Trending from "@/components/Home/Trending/Trending";

export default function Home() {
  return (
    <div className="flex-1">
<Hero />
<Products />
<Trending />

    </div>
  );
}
