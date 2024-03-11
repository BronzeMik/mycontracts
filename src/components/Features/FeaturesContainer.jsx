import FeaturesCard from "./FeatureCard"


export default function FeaturesContainer() {
    return(
        <>
            <h2 style={{textAlign: 'center', fontSize: '48px', padding: '50px 10px 20px 10px'}}>MyContracts Tools & Features </h2>
            <div className='features-all-container grid-4'>
            <FeaturesCard
            icon='fa-solid fa-money-bill'
            style='#7a0000'
            feature='billing'
            />
            <FeaturesCard
            icon='fa-solid fa-comments-dollar'
            style='#7a0000'
            feature='payroll'
            />
            <FeaturesCard
            icon='fa-solid fa-file-invoice'
            style='#7a0000'
            feature='invoice'
            />
            <FeaturesCard
            icon='fa-solid fa-receipt'
            style='#7a0000'
            feature='payable'
            />
            <FeaturesCard
            icon='fa-solid fa-calendar-days'
            style='#7a0000'
            feature='scheduling'
            />
            <FeaturesCard
            icon='fa-solid fa-ranking-star'
            style='#7a0000'
            feature='performance'
            />
            <FeaturesCard
            icon='fa-solid fa-flag-checkered'
            style='#7a0000'
            feature='compliance'
            />
            <FeaturesCard
            icon='fa-solid fa-clock'
            style='#7a0000'
            feature='check-in'
            />
            <FeaturesCard
            icon='fa-solid fa-comments'
            style='#7a0000'
            feature='customer relations'
            />
            <FeaturesCard
            icon='fa-solid fa-users'
            style='#7a0000'
            feature='customer profiles'
            />
            <FeaturesCard
            icon='fa-solid fa-signature'
            style='#7a0000'
            feature='manage contracts'
            />
            <FeaturesCard
            icon='fa-solid fa-truck-moving'
            style='#7a0000'
            feature='inventory'
            />
            
        </div>
        <div className='features-btn'>
        <a href='#'><button className="btn-red">Start Today</button></a>
        </div>
        
        </>
        
    )
}
