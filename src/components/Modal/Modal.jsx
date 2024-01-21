import styles from "./Modal.module.scss"

const Modal = ({showModal, setShowModal, data}) => {
  return (
    showModal && <dialog className={styles.modalBox} open={showModal}>
      <div className={styles.modal}>
      <h1>Title: {data.title}</h1>
      <p>Subtitle: {data.subtitle}</p>
      <p>Authors: {data.authors}</p>
      <p>Published: {data.published}</p>
      <p>Description: {data.description}</p>
      <p>Categories: {data.categories}</p>
      <p>Average rating: {data.averageRating}</p>
      <img src={data.thumbnails} alt="title"/>
      <br />
      <br />
      <button onClick={() => {
        setShowModal(false)
      }}>
        Close
      </button>
      </div>
  </dialog>
  )
}

export default Modal