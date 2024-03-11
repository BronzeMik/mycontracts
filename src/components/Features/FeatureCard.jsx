

export default function FeaturesCard({icon, style, feature}) {
    return(
        <>
            <div className='feature-card'>
                <i className={icon} style={{color: {style}}}></i>
                <p>{feature}</p>
            </div>
        </>
    )
}
