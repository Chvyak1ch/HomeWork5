import React from "react";
import { useState } from "react";
import CardFilm from "../Components/CardFilm";
import MySelect from "../select/MySelect";
import { Link } from "react-router-dom";


const ListFilms = () => {

  const [starFilmIds, setStarFilmIds] = useState([]);
  const [clockFilmIds, setClockFilmIds] = useState([]);

    const films = [
        {id: 1, name: "gogus", description: " Философ, любит живность, часто заваливает мемами", actors: "Егорка и его братва", category: "триллер", rank: 9.3},
        {id: 2, name: "Джон Уик 4", description: "Джон борется за свободу от Верховного Совета, но его прошлое не отпускает.", actors: "Киану Ривз, Донни Йен", category: "боевик", rank: 7.6},
        {id: 3, name: "Гром: Трудное детство", description: "Юный Игорь Гром ищет способы заработать, ввязываясь в авантюры. Отец охотится за боссом криминального мира", actors: "Кай Гетц, Сергей Марин", category: "приключения", rank: 7.1},
        {id: 4, name: "Оппенгеймер", description: "Мощный фильм о жизни физика Р. Оппенгеймера", actors: "Киллиан Мерфи, Эмили Блант", category: "биография", rank: 8.2},
        {id: 5, name: "Мастер и Маргарита", description: "великий роман Михаила Булгакова, в котором переплетаются сюжеты о визите сатаны в Москву и о судьбе Понтия Пилата.", actors: "Аугуст Диль, Юлия Снигирь", category: "драма", rank: 7.8},
        {id: 6, name: "Человек-паук: Паутина вселенных", description: "Майлз Моралес попадает в мультивселенную, где встречает команду Паучков, защищающих её существование.", actors: "Шамеик Мур, Хейли Стайнфелд", category: "мультфильм", rank: 8.4},
        {id: 7, name: "Пять ночей с Фредди", description: "Охранник в пиццерии сталкивается с ожившими аниматрониками", actors: "Джош Хатчерсон, Пайпер Рубио", category: "ужасы", rank: 5.8},
        {id: 8, name: "Вонка", description: "Молодой Вилли Вонка исследует мир шоколада и приключений.", actors: "Тимоти Шаламе, Колин О’Брайэн", category: "мюзикл", rank: 7.2},
        {id: 9, name: "Гран туризмо", description: "Геймер, бывший гонщик и маркетолог рискуют всем, чтобы войти в элитный мир автоспорта.", actors: "Арчи Мадекве, Орландо Блум", category: "боевик", rank: 7.6},
        {id: 10, name: "Мальчик и птица", description: "Махито обнаруживает заброшенную башню и попадает в фантастический мир с говорящей серой цаплей", actors: "Сома Сантоки, Аимён", category: "аниме", rank: 7.7},
        {id: 11, name: "Король и Шут: Сказка о Горшке и Князе", description: "Два трубадура, Горшок и Князь, отправляются на поиски пропавшей принцессы в дремучий лес, где их ждут удивительные приключения", actors: "Константин Плотников, Влад Коноплёв", category: "фэнтези", rank: 7.7},
        {id: 12, name: "Братья Супер Марио в кино", description: "Бруклинские сантехники Марио и Луиджи попадают в волшебный мир, где начинается эпическое приключение", actors: "Крис Пратт, Чарли Дэй", category: "мультфильм", rank: 7.0},
        
    ] 


    const [imgStars, setImgStars] = useState(Array(films.length).fill("src/images/star.svg"));// изменение вида кнопоки звездочки
    const updatedStars = [...imgStars]
    const [imgClocks, setImgClocks] = useState(Array(films.length).fill("src/images/clock.svg"))// изменение вида кнопоки часов
    const updatedClocks = [...imgClocks]

    const [sortedFilms, setSortedFilms] = useState(films);

    const copyArray = [...films]

    const newFilms = sortedFilms.map((film) => (<CardFilm
        
        id={film.id}
        name={film.name} 
        description={film.description} 
        actors={film.actors} 
        category={film.category} 
        rank={film.rank} 
        key={film.id}
        altStar={"избранное"}
        altClock={"посмотреть позже"}
        srcStar={imgStars[film.id]}
        srcClock={imgClocks[film.id]}
        onClickStar={() => clickStar(film.id)}
        onClickClock={() => clickClock(film.id)}
        />
      ));

//-----------------------------------------------

      const clickStar = (id) => {
          if (updatedStars[id] === "src/images/star.svg") {
              updatedStars[id] = "src/images/starClick.svg"
              setStarFilmIds([...starFilmIds, id]);
              console.log("добавили в избранное")
              // console.log(starFilmIds)
          } else {
              updatedStars[id] = "src/images/star.svg"
              const updatedIds = starFilmIds.filter((filmId) => filmId !== id);
              setStarFilmIds(updatedIds);
              console.log("убрали из избранного")
              // console.log(starFilmIds)
          }
          setImgStars(updatedStars);
          console.log(starFilmIds)
      }
    
      const clickClock = (id) => {
          if (updatedClocks[id] === "src/images/clock.svg") {
              updatedClocks[id] = "src/images/clockClick.svg"
              setClockFilmIds([...clockFilmIds, id])
              console.log("добавили в позже")
              console.log(clockFilmIds)
          } else {
              updatedClocks[id] = "src/images/clock.svg"
              const updatedIdsClock = clockFilmIds.filter((filmId) => filmId !== id);
              setClockFilmIds(updatedIdsClock);
              console.log("убрали из позже")
          }
          setImgClocks(updatedClocks);
      }

//-----------------------------------------


    const sortArray = () => {
      const sorted = [...sortedFilms].sort((a, b) => b.rank - a.rank);
      setSortedFilms(sorted);
    };

    const filterArray = () => {
      if (selectValue) {
        const elements = [...sortedFilms].filter(el => el.category === selectValue);
      setSortedFilms(elements)
      }
    }

    const who = (e) => {
      console.log(e.target.value)
      setSelectValue(e.target.value)
    }

    const [selectValue, setSelectValue] = useState();

    return(
      <div>
        <Link to ="/find">ссылка на страницу поиска</Link>
        <button onClick={sortArray}>сортировка</button>
        <button onClick={filterArray}>фильтрация по типу</button>
        <MySelect 
          whoSelect = {who}
          defaultValue="Фильтрация по"
          option={[
            {value: 'триллер', name: 'Триллер'},
            {value: 'боевик', name: 'Боевик'},
            {value: 'приключения', name: 'Приключения'},
            {value: 'драма', name: 'Драма'},
            {value: 'мультфильм', name: 'Мультфильм'},
            {value: 'ужасы', name: 'Ужасы'},
            {value: 'мюзикл', name: 'Мюзикл'},
            {value: 'аниме', name: 'Аниме'},
            {value: 'фэнтези', name: 'Фэнтези'},
          ]}
        />
        {newFilms}
      </div>
    )

}

export default ListFilms;