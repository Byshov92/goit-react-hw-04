import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <li>
      <img
        onClick={() => onClick(image)}
        className={css.imgCard}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </li>
  );
};

export default ImageCard;
