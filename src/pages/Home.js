import axios from 'axios';
import React, { useEffect, useState } from 'react'
import News from '../components/news/News'

function Home() {
    // get soccer news using axios
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // Api to get news


  return (
    <>
        <News propsNews={news} />
    </>
  )
}

export default Home;