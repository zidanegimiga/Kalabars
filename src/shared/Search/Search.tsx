import React from "react";
import styles from "./Search.module.scss";

const SearchInput = ({ placeholder, value, handleSearch }) => {
  return (
    <form className={styles.searchForm}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearch(e)}
        className={styles.SearchBar}
      />
      {/* <button className={styles.searchBtn}>
              <Search />
            </button> */}
    </form>
  );
};

export default SearchInput;
