import NewsCard from "./NewsCards";
import news from "../mockData/newsMock.json"
import { useEffect, useState } from "react";
import "./News.css"

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