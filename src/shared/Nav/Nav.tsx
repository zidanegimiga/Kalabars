/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Close } from "shared/Icons/Twitter";
import Search from "shared/Icons/Search";
import styles from "./Nav.module.scss";
import { KalabarsContext } from "global/KalabarsContext";
import SearchInput from "shared/Search/Search";
import HamburgerIcon from "shared/HamburgerIcon/HamburgerIcon";

const Nav = () => {
  const { openMenu, setOpenMenu } = useContext(KalabarsContext);
  const [mobileSearchForm, setMobileSearchForm] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const [searchModal, setSearchModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const formData = new URLSearchParams();
  const router = useRouter();

  const textColor = {
    color: router.pathname == "/sights" || "/videos/*" ? "white" : "black",
  };

  const onSearchSubmit = async (term) => {
    if (term?.length <= 1 || null || undefined) {
      console.log("Enter the right value");
    } else {
      try {
        formData.append("search_key", term);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/search`, {
          headers: {
            "x-access-token": process.env.NEXT_PUBLIC_TOKEN,
          },
          method: "POST",
          body: formData,
        });
        const searchArray = await res.json();
        setSearchResults(searchArray.response.videos);
        console.log("Search results: ", searchArray);
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
          <HamburgerIcon />
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image
                width={160}
                height={40}
                alt="Logo"
                src={"/kalabarslogo.svg"}
              />
            </div>
          </Link>
          <div className={styles.links} style={textColor}>
            <div className={styles.link}>
              <Link href={"/"}>Sights</Link>
            </div>
            <div className={styles.link}>
              <Link href={"/sounds"}>Sounds</Link>
            </div>
          </div>
        </div>
        <div className={styles.NavRight}>
          <SearchInput
            placeholder="What do you want to watch?"
            value={searchInput}
            handleSearch={handleSearch}
          />
        </div>
      </div>
      <div className={styles.NavWrapperMobile}>
        <div className={styles.leftMobile}>
          <HamburgerIcon />
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image
                width={120}
                height={30}
                alt="Logo"
                src={"/kalabarslogo.svg"}
              />
            </div>
          </Link>
        </div>
        <div className={styles.rightMobile}>
          <Search action={() => setMobileSearchForm(!mobileSearchForm)} />
        </div>
      </div>
      {mobileSearchForm && (
        <div className={styles.searchInputMobile}>
          <div className={styles.header}>
            <SearchInput
              placeholder="What do you want to watch?"
              value={searchInput}
              handleSearch={handleSearch}
            />
            <Close
              action={() => {
                setMobileSearchForm(false);
                setSearchModal(false);
              }}
            />
          </div>
          <div className={styles.mobileSearchResultsModal}>
            {searchResults?.map((item, index) => (
              <div key={index}>
                <Link href={`/video/${item?.public_id}`}>
                  <div className={styles.result} key={index}>
                    <div className={styles.resultimage}>
                      <img
                        src={
                          `${process.env.NEXT_PUBLIC_API}/static/media/videos_images/` +
                          item.landscape_image
                        }
                        width={"96px"}
                        height={"80px"}
                        alt={item.title}
                      />
                    </div>
                    <div className={styles.resultDetails}>
                      <div className={styles.resultTitle}>{item.title}</div>
                      <div className={styles.resultCreator}>
                        Creator: {item.creators_name}
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
      )}
      {searchModal && searchInput.length >= 1 ? (
        <div className={styles.searchresultsModal}>
          <div className={styles.searchresultsModalInnerContainer}>
            <div className={styles.modalHeader}>
              <div className={styles.closeBtn}>
                <Close action={handleCloseModal} />
              </div>
            </div>
            <div className={styles.modalContent}>
              {searchResults?.map((item, index) => (
                <div key={index}>
                  {item?.status === "active" && (
                    <Link href={`/video/${item?.public_id}`}>
                      <div className={styles.result} key={index}>
                        <div className={styles.resultimage}>
                          <img
                            src={
                              `${process.env.NEXT_PUBLIC_API}/static/media/videos_images/` +
                              item.landscape_image
                            }
                            width={"96px"}
                            height={"80px"}
                            alt={item.title}
                          />
                        </div>
                        <div className={styles.resultDetails}>
                          <div className={styles.resultTitle}>{item.title}</div>
                          <div className={styles.resultCreator}>
                            Creator: {item.creators_name}
                          </div>
                          <div className={styles.resultTime}>
                            {item.duration} min
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
