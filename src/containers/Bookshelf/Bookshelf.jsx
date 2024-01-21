import { useEffect, useState } from 'react'
import { getBookData } from '../../Data/getBookData'
import styles from "./Bookshelf.module.scss"
import Book from "../../components/Book/Book"
import Modal from '../../components/Modal/Modal'


const Bookshelf = ({searchTerm, searchType, current, setCurrent}) => {

  const [books, setBooks] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [MovieID, setMovieID] = useState(0)
 
  const decrementSearch = () => {
    if (loading === false && current > 1) {
      setCurrent(current - 40)
    }
  }

  const incrementSearch = () => {
    if (loading === false && books.length === 40) {
    setCurrent(current + 40)
    }
  }

  useEffect(() => {
    setLoading(true)
    searchTerm && getBookData(searchTerm, searchType, current)
    .then((result) => {
        setBooks(result)
        setLoading(false)
    })
  }, [searchTerm, searchType, current])

  if (books) {
    const clonedBooks = [...books]
  return (
    <div className={styles.bookshelf}>
      <h2>Current search: {searchTerm}</h2>
      <div className={styles.pageNav}>
        <button className={styles.navItem} onClick={decrementSearch} disabled={current === 1}>Previous Page</button>
        {loading 
        ?<p className={styles.navItem}> ...Loading... </p>
        :<p className={styles.navItem}> Displaying results {current} to {(current+books.length-1)}</p>}
        <button className={styles.navItem}onClick={incrementSearch} disabled={books.length !== 40}>Next Page</button>
      </div>
         
        {clonedBooks.map((book, id) => {
            return (
                <Book
                  key = {id}
                  id = {id}
                  title = {book.title}
                  subtitle = {book.subtitle}
                  authors = {book.authors}
                  description = {book.description}
                  categories = {book.categories}
                  thumbnails = {book.thumbnails}
                  setShowModal= {setShowModal}
                  setMovieID = {setMovieID}
                  MovieID = {MovieID}
                />
            )
        })}
        <Modal showModal = {showModal} setShowModal = {setShowModal} data={clonedBooks[MovieID]}/>

    </div>
  )
}

else return (
  <h2>No results found</h2>
)
}

export default Bookshelf
