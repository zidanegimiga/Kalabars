import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import styles from './Nav.module.scss';

const Nav = () => {
  const [searchInput, setSearchInput] = useState<string | number>()
  
  return (
    <div className={styles.NavWrapper}>
      <div className={styles.NavLeft}>
        <div className={styles.logo}>
          <Image width={320} height={80} alt="Logo" src={"/kalabarslogo.svg"}/>
        </div>
        <div className={styles.links}>
          <div className={styles.link}><Link href={"/sights"}>Sights</Link></div>
          <div className={styles.link}><Link href={"/sounds"}>Sounds</Link></div>
        </div>
      </div>
      <div className={styles.NavRight}>
        <input
          placeholder='What would you like to watch or listen to'
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
          className={styles.SearchBar}
        />
      </div>
    </div>
  );
}

export default Nav