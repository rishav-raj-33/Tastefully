






function CardPhoto(props) {


    return (

        <div className="card">
            <img src={props.img} className="card-img-top img-fluid"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h3 className="card-title">By {props.people}</h3>
                <p className="card-text text-start">{props.address}
                </p>
            </div>
        </div>

    )
}



export default CardPhoto 