import { useEffect, useState } from "react";
import video from './food.mp4';
import './App.css';
import RecipesComponent from "./RecipesComponent";
import Buttons from "./Buttons";
import LoaderPage from "./LoaderPage";

  function App() {

    const API_ID = '194a5f28';
    const API_KEY = 'e235180fe7190b4e7ac10a626790d0d8';

    const [mySearch, setMySearch] = useState('');
    const [myRecipes, setMyRecipes] = useState([]);
    const [wordSubmitted, setWordSubmitted] = useState('juice');

    const [loader, setLoader] = useState(false)

    // useEffect(() => {
     
    //   const getRecipes = async () => {
    //     const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    //     const data = await response.json();
    //     setMyRecipes(data.hits);
    //   }
    //   getRecipes()
    // }, [wordSubmitted])

    const getRecipes = async () => {
      setLoader(true)
      const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
      if (response.ok) {
        let data = await response.json();
        setMyRecipes(data.hits);
        setLoader(false)
      } else {
        setLoader(false)
      }
    }

    useEffect(() => {
      getRecipes()
    }, [wordSubmitted])

    const handleSearch = (e) => {
        setMySearch(e.target.value);
    }

    const finalSubmit = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch)
    }

    return (
      
      <div>
        {
          loader && <LoaderPage/>
        }

        <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4"/>
          </video>
          <h1>Find your recipe</h1>
        </div>

        <div className="container">
          <form onSubmit={finalSubmit}>
            <input onChange={handleSearch} value={mySearch}/>
          </form>
          <button className="search" onClick={finalSubmit}>
            <img src='https://img.icons8.com/?size=100&id=132&format=png&color=000000' width='30px' alt='search'/>
          </button>
        </div>

        <div className="container">
          <Buttons handleButtons={setWordSubmitted}/>
        </div>

        <div>
         {myRecipes.map((element, id) => (
            <RecipesComponent key={id}
            label={element.recipe.label}
            ingredients={element.recipe.ingredientLines}
            image={element.recipe.image}
            cautions={element.recipe.cautions}
            calories={element.recipe.calories}
            />
         ))}
        </div>
      </div>
    )
  }

  export default App;