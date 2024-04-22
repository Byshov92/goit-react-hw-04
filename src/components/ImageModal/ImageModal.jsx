import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.imageModal}
      overlayClassName={css.imageModalOverlay}
    >
      <div className={css.imageWrrap}>
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
      </div>
      <div className={css.imageInfo}>
        <h2>{image.user.name}</h2>
        <p>Likes: {image.likes}</p>
        <p className={css.description}>
          Description: {image.description || "No description available"}
        </p>
      </div>
      <button className={css.closeBtn} onClick={onClose}>
        Close
      </button>
    </ReactModal>
  );
};

export default ImageModal;
