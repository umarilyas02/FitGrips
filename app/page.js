import BlogsSection from "@/components/Home/BlogsSection/BlogsSection";
import Explore from "@/components/Home/Explore/Explore";
import Hero from "@/components/Home/Hero/Hero";
import OrderProcess from "@/components/Home/OrderProcess/OrderProcess";
import Products from "@/components/Home/Products/Products";
import Trending from "@/components/Home/Trending/Trending";

export default function Home() {
  return (
    <div className="flex-1">
<Hero />
<Products />
<Trending />
<Explore />
<OrderProcess />
<BlogsSection />

    </div>
  );
}
