import React from "react";
import styles from "./Search.module.scss";

const SearchInput = ({placeholder, value, handleSearch}) => {
    return(
        <div>
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
        </div>
    )
};

export default SearchInput;