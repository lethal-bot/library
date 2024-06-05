import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log(query);
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1.`
        );
        const data = await response.json();
        // console.log(data.docs);
        setResults(data.docs);
      } catch (err) {
        setError("Failed to fetch results");
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        placeholder="Search by book name..."
      />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ul className="results-list">
        {results.map((result, index) => (
          <Card
            key={index}
            home={true}
            title={result.title}
            editionCount={result.edition_count}
          />
        ))}
      </ul>
    </div>
  );
};

export default Search;
