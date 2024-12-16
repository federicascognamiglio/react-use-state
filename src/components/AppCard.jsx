function AppCard({ title, description,}) {

    return (
        <div className='card mt-5'>
            <div className="card-body">
                <h3>{title}</h3>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    )
}

export default AppCard;