function Card2(props) {


    let ingredient = props.Instructions;





    return (
        <div className="card-body" id="card-list">
            <h5 className="card-title">Instruction</h5>
            <ul id="list-ingredients">
                {
                    ingredient.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })
                }



                {/* <li>Bread</li>
                <li>Cream-cheese</li>
                <li>Mscarphone</li>
                <li>Goat cheese</li>
                <li>Butter</li>
                <li>Fresh berries</li>
                <li>Sliced tomatoes</li>
                <li>Cucumbers</li>
                <li>Avocados</li>
                <li>Leafy greens</li>
                <li>Smoked salmon</li>
                <li>Bacon</li>
                <li>Eggs</li>
                <li>Nuts</li>
                <li>Seeds</li>
                <li>Fresh herbs</li>
                <li>Olive oil</li>
                <li>Balsamic vinegar</li>
                <li>Honey</li> */}

            </ul>




        </div>
    )
}


export default Card2