import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import './App.css'
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchBlogPosts(+page, tag)
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split('/').at(-1).replace('-', ' ');
      fetchBlogPosts(+page, null, category)
    }
    else {
      fetchBlogPosts(+page)
    }

  }, [location.pathname, location.search]) // will have to render it whnever the path is changing or the number of page is changing.


  return (
    <Routes>
      <Route path="/">{<Home />}</Route>
      <Route path="/blog/:blogId">{<BlogPage />}</Route>
      <Route path="/tags/:tag">{<TagPage />}</Route>
      <Route path="/categories/:category">{<CategoryPage />}</Route>
    </Routes>
  )
}
