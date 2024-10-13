import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import './App.css'

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext)
  useEffect(() => {
    fetchBlogPosts();
  }, [])
  return (
    <div className="w-full h-full  flex flex-col justify-center items-center gap-y-1">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
