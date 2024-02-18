import { useSelector } from "react-redux";
import lang from "./utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="w-full -mt-10 aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-4xl font-extrabold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-80">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-3 px-3 md:px-10 text-xl transition-all ease-in-out duration-300 rounded-lg hover:bg-opacity-80">
          ▶️  {lang[langKey].playButton}
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-7 transition-all ease-in-out duration-300  text-xl bg-opacity-50 hover:bg-opacity-30 rounded-lg">
        ⓘ {lang[langKey].infoButton}
        </button>
      </div>
      <div className="bg-gradient-to-r mt-40 text-black opacity-0 from-transparent">.</div>
    </div>
  );
};
export default VideoTitle;