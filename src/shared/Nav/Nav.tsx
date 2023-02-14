/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Close, Search } from "shared/Icons/Twitter";
import styles from "./Nav.module.scss";
import FormData from "form-data";

const Nav = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const formData = new URLSearchParams();

  const onSearchSubmit = async (term) => {
    if (term?.length <= 1 || null || undefined) {
      console.log("Enter the right value");
    } else {
      try {
        formData.append("search_key", term);
        const res = await fetch(`https:content.kalabars.com/search`, {
          headers: {
            "x-access-token": process.env.TOKEN,
          },
          method: "POST",
          body: formData,
        });
        const searchArray = await res.json();
        setSearchResults(searchArray.response.videos);
      } catch (error) {
        console.log("There was a problem");
      }
    }
  };

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
    setSearchModal(true);
    onSearchSubmit(searchInput);
    console.log("Results: ", searchResults);
  };

  function handleCloseModal() {
    setSearchModal(false);
  }

  return (
    <div className={styles.NavContainer}>
      <div className={styles.NavWrapper}>
        <div className={styles.NavLeft}>
          <div className={styles.logo}>
            <Image
              width={320}
              height={80}
              alt="Logo"
              src={"/kalabarslogo.svg"}
            />
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <Link href={"/sights"}>Sights</Link>
            </div>
            <div className={styles.link}>
              <Link href={"/sounds"}>Sounds</Link>
            </div>
          </div>
        </div>
        <div className={styles.NavRight}>
          <form className={styles.searchForm}>
            <input
              placeholder="What would you like to watch or listen to"
              value={searchInput}
              onChange={(e) => handleSearch(e)}
              className={styles.SearchBar}
            />
            {/* <button className={styles.searchBtn}>
              <Search />
            </button> */}
          </form>
        </div>
      </div>
      {searchModal && searchInput.length >= 1 ? (
        <div className={styles.searchresultsModal}>
          <div className={styles.modalHeader}>
            <div className={styles.closeBtn}>
              <Close action={handleCloseModal} />
            </div>
          </div>
          <div className={styles.modalContent}>
            {searchResults?.map((item, index) => (
              <div key={index}>
                <Link href={`/videos/${item?.public_id}`}>
                  <div className={styles.result} key={index}>
                    <div className={styles.resultimage}>
                      <img
                        src={
                          `https:content.kalabars.com/static/media/videos_images/` +
                          item.landscape_image
                        }
                        width={"80px"}
                        height={"64px"}
                        alt={item.title}
                      />
                    </div>
                    <div className={styles.resultDetails}>
                      <div className={styles.resultTitle}>{item.title}</div>
                      <div className={styles.resultCreator}>
                        {item.creators_name}
                      </div>
                      <div className={styles.resultTime}>
                        {item.duration} min
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
