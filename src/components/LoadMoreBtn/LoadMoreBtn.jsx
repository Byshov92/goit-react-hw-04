import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, hasMore }) => {
  return (
    <div className={css.btnWrrap}>
      {hasMore && (
        <button onClick={onClick} className={css.btn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;
