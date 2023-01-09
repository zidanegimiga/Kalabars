import Hero from "features/Home/Hero";
import styles from "../styles/Home.module.scss";

export default function Index() {
  return (
    <div className={styles.homeWrapper}>
      <Hero />
    </div>
  );
}