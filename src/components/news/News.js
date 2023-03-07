import NewsCard from "./NewsCards";
import { news } from "../mockData/newsMock.js";
import { useEffect, useState } from "react";

export default function News({propsNews}) {
    const [newsObject, setNewsObjects] = useState([]);
    
    useEffect(() => {
        setNewsObjects(news)
    }, []);


    return (
        <>
            {newsObject?.map((news) => (
                <NewsCard />
            ))}
        </>
    )
}