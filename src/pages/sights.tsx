import MovieCarousel from 'features/Sights/MovieCarousel';
import {useState} from 'react'
import styles from '../styles/Sights.module.scss';

const mockData = [
    {
        name: "Alice",
        poster: "/alice.png"
    },
    {
        name: "Black Valentine",
        poster: "/blackValentine.png"
    },
]

const sights = () => {
    return (
        <div className={styles.pageWrapper}>
            <MovieCarousel />
        </div>
    )
}

export default sights;