export default function RecipesComponent({label, ingredients, cautions, image, calories}) {
    return (
        <div className="bigContainer">
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <div className="dish">
                    <img src={image} alt='dish'/>
                    <h4>
                        <img src='https://img.icons8.com/?size=100&id=cSOhBbIVmUDP&format=png&color=000000' width='20px' alt='alert'/>
                        CAUTIONS:
                    </h4>
                    {cautions.map((caution, id) => (
                        <p className="cautions" key={id}>{caution}</p>
                    ))}
                    
                    <p>Calories: {calories.toFixed()}</p>
                </div>
                <div className="dish">
                    <h4>INGREDIENTS:</h4>
                    <ul>
                        {ingredients.map((ingredient, id) => (
                            <li key={id}>
                                <img src='https://img.icons8.com/?size=100&id=MkFMsOJRAJYW&format=png&color=000000' width='20px' alt='icon'/>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    
                </div>
                

            </div>
        </div>
    )
}