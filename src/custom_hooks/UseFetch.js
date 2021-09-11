import React, { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = useCallback(
    async (url) => {
      const response = await fetch(url);
      if (response.status > 199 && response.status < 300) {
        const finalData = await response.json();
        console.log(finalData, "-finalData-->");
        setData(finalData);
        setIsLoading(false);
      } else {
        setErrorMsg(response.statusText);
        setIsError(true);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchData(url);
  }, [url, fetchData]);
  return { data, isLoading, isError, errorMsg };
};
