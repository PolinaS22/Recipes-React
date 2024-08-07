export default function Buttons({handleButtons}) {
    return (
        <div className="buttons">
            <button className="btn" onClick={() => handleButtons('breakfast')}>Breakfast</button>
            <button className="btn" onClick={() => handleButtons('starters')}>Starters</button>
            <button className="btn" onClick={() => handleButtons('dinner')}>Dinner</button>
            <button className="btn" onClick={() => handleButtons('dessert')}>Desserts</button>
            <button className="btn" onClick={() => handleButtons('drinks')}>Drinks</button>
        </div>
    )
}