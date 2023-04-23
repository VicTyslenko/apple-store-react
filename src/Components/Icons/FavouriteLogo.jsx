
import { useSelector } from "react-redux";
const FavouriteLogo = () => {


    const favourite = useSelector(state => state.favourite.favouriteToLocal)
    return (
        <>
            <svg className={favourite.length ? "svg-favourite-blue" : "svg-favourite-white"} xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" width="32" height="32" viewBox="0 0 32 32">
                <path
                    d="M29.95 12.68A1 1 0 0 0 29 12h-9.26L17 2.77a1 1 0 0 0-1.91 0L12.26 12H3a1 1 0 0 0-.6 1.8l7.39 5.54-3.72 9.29a1 1 0 0 0 1.54 1.16L16 23.27l8.39 6.52a1 1 0 0 0 1.54-1.16l-3.72-9.29 7.39-5.54a1 1 0 0 0 .35-1.12Z" />
            </svg>
        </>

    )
};
export default FavouriteLogo