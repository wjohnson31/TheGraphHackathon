// src/components/SearchBar.tsx

import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (id: string) => void; // Function to handle the search
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        onSearch(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter CryptoPunk ID"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
