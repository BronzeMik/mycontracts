import ProductsDescrip from "./ProductsDescrip"
import ProductsScroll from "./ProductsScroll"
export default function ProductsContainer() {
    return(
        <>
            <div className="products-container grid-2">
                <ProductsDescrip 
                header='Over 20 tools'
                par='Comes with 20+ tools and products of your choice. One of the best Admin dashboards for your Business'
                btn='Explore Now'/>
                <ProductsScroll />
            </div>
        </>
    )
}
