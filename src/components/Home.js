import Cookpages from "./Cookpages";
import Footer from "./Footer";
import HeroBanners from "./HeroBanners";
import HeroSearch from "./HeroSearch";
import Navigations from "./Navigations"
import PopularCategories from "./PopularCategories";
import RecomendedRecipe from "./RecomendedRecipe";
import Trending from "./Trending";

const Home = () => {
    return (
        <>
            <Navigations />
            <HeroSearch />
            <HeroBanners />
            <PopularCategories />
            <Trending />
            <Cookpages />
            <RecomendedRecipe />
            <Footer />
        </>
    )
}

export default Home;