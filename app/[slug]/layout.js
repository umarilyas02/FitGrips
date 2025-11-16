import Blogs from "@/components/Home/BlogsSection/Blogs";
import BlogsSection from "@/components/Home/BlogsSection/BlogsSection";


export default function slugLayout({ children }) {
  return (
   
     <>
        {children}
       <BlogsSection />
</>
  );
}