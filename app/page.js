import Hero from "@/components/Home/Hero/Hero";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="flex-1">
<Hero />
<Products title='Wrist Wraps' api={process.env.WRIST_WRAPS_API}/>
    </div>
  );
}
