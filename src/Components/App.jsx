import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import axios from "axios";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [query, setQuery] = useState("");

  const searchImages = async (query) => {
    try {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: query,
            per_page: 15,
            page: page,
            client_id: "3_moV601GdszmOvkNto7bUb7hxPK2q-TH2Q-WKSPZGk",
          },
        }
      );
      // console.log(data);
      return data;
      // setImages((prevImages) => [...prevImages, ...data.results]);
      // setHasMore(page < Math.ceil(data.total_pages / 15));
      // setLoading(false);
    } catch (error) {
      setError(error.message);
      // setLoading(false);
    }
  };

  useEffect(() => {
    // setImages([]);
    // setPage(1);
    setLoading(true);
    setHasMore(false);
    searchImages(query).then((data) => {
      if (!data.total) {
        setHasMore(false);
        setLoading(false);
        return;
      }
      setImages((prevImages) => [...prevImages, ...data.results]);
      setHasMore(page < Math.ceil(data.total_pages / 15));
      setLoading(false);
    });

    // const data = searchImages(query);
    // searchImages(query);
    // console.log(data);
  }, [query, page]);
  // const data = ()

  const handleSubmit = (e) => {
    if (e === query) {
      return;
    }
    setQuery(e);
    setPage(1);
    setImages([]);
    setHasMore(false);
    // const data = searchImages(e.target.value);
    // console.dir(e);
    // console.log(data);
  };
  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {hasMore && <LoadMoreBtn onClick={loadMoreImages} hasMore={hasMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
