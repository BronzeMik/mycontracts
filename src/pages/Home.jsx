import FeaturesContainer from "../components/Features/FeaturesContainer";
import FeaturesHome from "../components/FeaturesHome";
import HeroContainer from "../components/Hero/HeroContainer";
import NavBar from "../components/NavBar";
import ProductsContainer from "../components/Products/ProductsContainer";


export default function Home() {
    return(
        <>
            <NavBar />
            <HeroContainer />
            <FeaturesHome />
            <ProductsContainer />
            <FeaturesContainer />
        </>
    )
}
