import React from 'react'
import styles from '../styles/recocard.module.scss'
import RecoCard from '../components/RecoCard'

const Search = () => {
  return (
    <div className={styles.searchpage}>
        {Array.from({ length: 20 }).map(i => 
            <RecoCard/>
        )}
    </div>
  )
}

export default Search