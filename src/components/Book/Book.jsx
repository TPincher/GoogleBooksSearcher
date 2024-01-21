import styles from "./Book.module.scss"

const Book = ({
    id,
    title="No title found",
    subtitle,
    authors="Author details not found",
    description="No description found",
    categories="No category assigned",
    thumbnails ="No images found",
    setShowModal,
    setMovieID,
}) => {

  subtitle != "N/A" 
  ? subtitle
  : ""

  return (
    <div className={styles.book}>
        <div className={styles.title}>
          <h1>{title.length > 50
            ? title.slice(0, title.indexOf(" ", 50)) + "..."
            : title
          }</h1>
          <p>{subtitle}</p>
        </div>
        <div className={styles.details}>
          <p>{description === "No description found"
          ? "No description found"
          : description.slice(0, description.indexOf(" ", 150)) + "..."}</p>
          <p>Authored by {authors}</p>
          <p>{categories}</p>
        </div>
        <div className={styles.lowerSection} >
        <img className={styles.image} src={thumbnails} alt="title"/>
        <button className={styles.modalButton} onClick={() => {
          setShowModal(true)
          setMovieID(id)
        }}>More Info</button>
        </div>
    </div>
  )
}

export default Book
