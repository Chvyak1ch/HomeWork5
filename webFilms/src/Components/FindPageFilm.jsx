import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "../App";
import CardFilm from "./CardFilm";


const FindPageFilm = () => {
    const { films } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [movieFilms, setMovieFilms] = useState(films)
    const [clickButton, setClickButton] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
        setSelectedCategory(selectedOptions);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const done = () => {
        let filteredFilms = films;

        if (selectedCategory.length > 0) {
            filteredFilms = films.filter(film => selectedCategory.includes(film.category));
            console.log('Результаты поиска по селектору:', filteredFilms);
        } else if (searchTerm) {
            filteredFilms = filteredFilms.filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()));
            console.log('Результаты поиска по инпуту:', filteredFilms);
        }

        setMovieFilms(filteredFilms);
        setClickButton(true);        
    };

    const newnewnew = movieFilms.map((film) => <CardFilm
    id={film.id}
    name={film.name} 
    description={film.description} 
    actors={film.actors} 
    category={film.category} 
    rank={film.rank} 
    key={film.id} />
    );


    return(
        <div>
        <h1>Добро пожаловать на страницу поиска фильмов!</h1>

        <select onChange={handleCategoryChange} multiple> // он работает с несколькими, но через ctrl 0_0
            <option value={"триллер"}>триллер</option>
            <option value={"боевик"}>боевик</option>
            <option value={"приключения"}>приключения</option>
            <option value={"драма"}>драма</option>
            <option value={"мультфильм"}>мультфильм</option>
            <option value={"ужасы"}>ужасы</option>
            <option value={"мюзикл"}>мюзикл</option>
            <option value={"аниме"}>аниме</option>
            <option value={"фэнтези"}>фэнтези</option>
        </select>

        <input
            type="text"
            placeholder="Введите запрос"
            value={searchTerm}
            onChange={handleSearch} 
        />

        <button onClick={() => done()}>поиск</button>

        <Link to ="/">ссылка на лист фильмов</Link>
        
        {clickButton && newnewnew}

        </div>
    )
}

export default FindPageFilm;