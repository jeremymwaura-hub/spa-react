import React from 'react';
import '../styles/SearchBar.css';

/* SearchBar — controlled search input that filters projects */
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar" role="search">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        type="search"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by title, description, or tag…"
        aria-label="Search projects"
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
