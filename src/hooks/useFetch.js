import { useState, useEffect } from "react";

const useFetch = (url, isDebugMode) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        setError(null); 
  
        try {
          
          if (isDebugMode && Math.random() < 0.5) {
            throw new Error("Random failure for debugging purposes");
          }
  
          const response = await fetch(url);
          if (!response.ok) throw new Error("Failed to fetch data");
  
          const result = await response.json();
          setData(result.data.videoCategory);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url, isDebugMode]);
  
    return { data, loading, error };
  };
  
  export default useFetch;