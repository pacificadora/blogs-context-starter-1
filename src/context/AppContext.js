import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    async function fetchBlogPosts(page = 1, tag = null, category) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        if (tag) {
            url += `&tag=${tag}`
        }
        if (category) {
            url += `&tag=${category}`
        }
        try {
            const result = await fetch(url);
            const data = await result.json()
            setPageCount(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.log("error in fetching data", error);
            setPageCount(1);
            setPosts([]);
            setTotalPages();
        }
        setLoading(false)
    }

    //to handle buttons, previous/next
    function handlePageChange(page) {
        setPageCount(page);
        fetchBlogPosts(page);
    }


    const value = {
        loading, setLoading, posts, setPosts, pageCount, setPageCount, totalPages, setTotalPages, handlePageChange, fetchBlogPosts
    }

    //children - app wala component
    //app wale component ko jo value create ki h wo send krdo.
    //hence we have created a context that can be used further in other components
    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
    //syntax will always remain same, only value can change or the name of the children
}
