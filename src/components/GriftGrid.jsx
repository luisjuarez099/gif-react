import PropTypes from "prop-types";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GriftGrid = ({ category }) => {
  //aun que se un custom hook se coloca use
  const { images, isLoading } = useFetchGifs(category);


  return (
    <div>
      <h5>{category}</h5>
      
      {
        isLoading && (<h2>Cargando....</h2>)
      }
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <>
            <GiftItem key={id} title={title} url={url} />
          </>
        ))}
      </div>
    </div>
  );
};

GriftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
