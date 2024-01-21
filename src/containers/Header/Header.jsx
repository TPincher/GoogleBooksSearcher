import { React, useRef } from 'react'
import styles from "./Header.module.scss"


const Header = ({ setSearchTerm, setSearchType, setCurrent }) => {

const inputRef = useRef(null)

const searchSelector = (e) => {
  setSearchType(e.target.value)
  setSearchTerm(inputRef.current.value)
  setCurrent(1)
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  setSearchTerm(inputRef.current.value)
  setCurrent(1);
}


  return (
    <div className={styles.header}>
        <h1>Google Books API searcher</h1>
        <p>This tool will search the Google Books API based on your provided search term. Searches can be refined by title, author, subject or publisher. </p>
        <p>You may find some results that are mostly blank - these are paintings that are also stored on the API, but aren't rendered here.</p>
        <br />
        <form onSubmit={handleFormSubmit}>

            <label htmlFor="input">Search for:</label>
            <input type="text" id="input" ref={inputRef}/>
            <button className={styles.button} type="submit">Search Google Books</button>

            <label className={styles.typeButton} htmlFor="type">Search type:</label>
            <select id="type" onChange={searchSelector}>
              <option hidden>Select a search type</option>
              <option value="">General search</option>
              <option value="intitle:">Title search</option>
              <option value="inauthor:">Author search</option>
              <option value="subject:">Subject search</option>
              <option value="inpublisher:">Publisher search</option>
            </select>


        </form>
    </div>
  )
}

export default Header