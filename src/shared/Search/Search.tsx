import React from "react";
import styles from "./Search.module.scss";
import { useRouter } from 'next/router'

const SearchInput = ({ placeholder, value, handleSearch }) => {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <form className={styles.searchForm}>
      <input
        placeholder={router.pathname === "/sounds" ? "What do you want to listen?" : "What do you want to watch?"}
        value={value}
        onChange={(e) => handleSearch(e)}
        className={styles.SearchBar}
      />
      {/* 
        <button className={styles.searchBtn}>
          <Search />
        </button> 
      */}
    </form>
  );
};

export default SearchInput;
