import React from "react";

const SearchInput = ({ searchId, setSearchId }) => (
  <div className="mt-5 mb-5">
    <input
      type="text"
      placeholder="Search by ID"
      className="border w-[700px] border-gray-300 rounded-2xl p-2"
      value={searchId}
      onChange={(e) => setSearchId(e.target.value)}
    />
  </div>
);

export default SearchInput;