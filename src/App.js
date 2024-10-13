import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
