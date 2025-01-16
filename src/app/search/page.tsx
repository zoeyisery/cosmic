"use client";
import React, { useState } from "react";
//import "../styles/layout.css";

const SearchPage = () => {
  const [query, setQuery] = useState(""); // 검색어 상태
  const [results, setResults] = useState<string[]>([]); // 검색 결과 상태

  const handleSearch = () => {
    // 실제 검색 API를 호출하거나 검색 로직을 여기에 구현할 수 있습니다.
    const searchResults = ["Result 1", "Result 2", "Result 3"]; // 임시 데이터
    setResults(searchResults);
  };

  return (
    <div className="w-full mt-4">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for something..."
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="p-2 ml-2 text-white bg-blue-500 rounded"
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        <h2>Search Results</h2>
        <ul>
          {results.length > 0 ? (
            results.map((result, index) => (
              <li key={index} className="py-2">
                {result}
              </li>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
