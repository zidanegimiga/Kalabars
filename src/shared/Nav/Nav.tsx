import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import styles from './Nav.module.scss';

const Nav = () => {
  const [searchInput, setSearchInput] = useState<string | number>()
  
  return (
    <div className={styles.NavWrapper}>
      <div className={styles.NavLeft}>
        <Image width={160} height={40} alt="Logo" src={"/kalabarslogo.svg"}/>
        <div className={styles.links}>
          <div className={styles.link}><Link href={"/sights"}>Sights</Link></div>
          <div className={styles.link}><Link href={"/sounds"}>Sounds</Link></div>
        </div>
      </div>
      <div className={styles.NavRight}>
        <input
          placeholder='Type to search'
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
          className={styles.SearchBar}/>
      </div>
    </div>
  )
}

export default Nav