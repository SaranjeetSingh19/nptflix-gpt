import Error from "./Error";
import { IMG_CDN_URL } from "./utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  const dekho = () => {
    alert()
  }

  return (
    <div className="w-32 md:w-40 pr-4">
      <img onClick={dekho}
        className="  overflow-hidden
      mt-4 cursor-pointer hover:scale-110 transition-all ease-in-out duration-200"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
