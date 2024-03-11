
export default function ProductsDescrip({header, par, btn}) {
    return(
        <>
            <div className="products-description">
                <h1>{header}</h1>
                <p>{par}</p>
                <a href='#'><button className='btn-red'>{btn}</button></a>
            </div>
        </>
    )
}
