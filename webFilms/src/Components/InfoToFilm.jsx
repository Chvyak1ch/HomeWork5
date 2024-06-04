import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import PlusCardFilm from "./PlusCardFilm";
import GogusImg from "../images/CinemaImage/GogusImg.jpg"
import BoyAndBird from "../images/CinemaImage/BoyAndBird.jpg"
import FNAF from "../images/CinemaImage/FNAF.jpg"
import GranTurismo from "../images/CinemaImage/GranTurismo.jpg"
import ItsAMARIO from "../images/CinemaImage/ItsAMARIO.jpg"
import JhonWick4 from "../images/CinemaImage/JhonWick4.jpg"
import KiSH from "../images/CinemaImage/KiSH.jpg"
import MasterAndMargarita from "../images/CinemaImage/MasterAndMargarita.jpg"
import MayorGrom from "../images/CinemaImage/MayorGrom.jpg"
import Opengamer from "../images/CinemaImage/Opengamer.jpg"
import SpyderMan from "../images/CinemaImage/SpyderMan.jpg"
import Wonka from "../images/CinemaImage/wonka.jpg"



const InfoToFilm = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);
         const fullFilms = [
        {id: 1, name: "gogus", description: "Поздравляю, вы нашли маленькую пасхалку на моего друга, хоть она и на виду, хехе) он веселый человек и я просто хочу оставть его тут", actors: "Егорка и его братва", category: "триллер", rank: 9.3, imgCinema: GogusImg},
        {id: 2, name: "Джон Уик 4", description: "Джон борется за свободу от Верховного Совета, но его прошлое не отпускает.", actors: "Киану Ривз, Донни Йен", category: "боевик", rank: 7.6, imgCinema: JhonWick4},
        {id: 3, name: "Гром: Трудное детство", description: "Юный Игорь Гром ищет способы заработать, ввязываясь в авантюры. Отец охотится за боссом криминального мира", actors: "Кай Гетц, Сергей Марин", category: "приключения", rank: 7.1, imgCinema: MayorGrom},
        {id: 4, name: "Оппенгеймер", description: "Мощный фильм о жизни физика Р. Оппенгеймера", actors: "Киллиан Мерфи, Эмили Блант", category: "биография", rank: 8.2, imgCinema: Opengamer},
        {id: 5, name: "Мастер и Маргарита", description: "великий роман Михаила Булгакова, в котором переплетаются сюжеты о визите сатаны в Москву и о судьбе Понтия Пилата.", actors: "Аугуст Диль, Юлия Снигирь", category: "драма", rank: 7.8, imgCinema: MasterAndMargarita},
        {id: 6, name: "Человек-паук: Паутина вселенных", description: "Майлз Моралес попадает в мультивселенную, где встречает команду Паучков, защищающих её существование.", actors: "Шамеик Мур, Хейли Стайнфелд", category: "мультфильм", rank: 8.4, imgCinema: SpyderMan},
        {id: 7, name: "Пять ночей с Фредди", description: "Охранник в пиццерии сталкивается с ожившими аниматрониками", actors: "Джош Хатчерсон, Пайпер Рубио", category: "ужасы", rank: 5.8, imgCinema: FNAF},
        {id: 8, name: "Вонка", description: "Молодой Вилли Вонка исследует мир шоколада и приключений.", actors: "Тимоти Шаламе, Колин О’Брайэн", category: "мюзикл", rank: 7.2, imgCinema: Wonka},
        {id: 9, name: "Гран туризмо", description: "Геймер, бывший гонщик и маркетолог рискуют всем, чтобы войти в элитный мир автоспорта.", actors: "Арчи Мадекве, Орландо Блум", category: "боевик", rank: 7.6, imgCinema: GranTurismo},
        {id: 10, name: "Мальчик и птица", description: "Махито обнаруживает заброшенную башню и попадает в фантастический мир с говорящей серой цаплей", actors: "Сома Сантоки, Аимён", category: "аниме", rank: 7.7, imgCinema: BoyAndBird},
        {id: 11, name: "Король и Шут: Сказка о Горшке и Князе", description: "Два трубадура, Горшок и Князь, отправляются на поиски пропавшей принцессы в дремучий лес, где их ждут удивительные приключения", actors: "Константин Плотников, Влад Коноплёв", category: "фэнтези", rank: 7.7, imgCinema: KiSH},
        {id: 12, name: "Братья Супер Марио в кино", description: "Бруклинские сантехники Марио и Луиджи попадают в волшебный мир, где начинается эпическое приключение", actors: "Крис Пратт, Чарли Дэй", category: "мультфильм", rank: 7.0, imgCinema: ItsAMARIO},
        
    ] // предположим массив с подробным опсанием фильмов

    const handlePostSubmit = () => {
        if (postText.trim() !== '') {
            const newPost = {
                user: 'Анонимный пользователь',
                text: postText,
              };
          setPosts([...posts, newPost]);
          setPostText('');
        }
      };

    const { id } = useParams();
    const film = fullFilms.find((item) => item.id === parseInt(id));
    console.log(film)

    if (!film) {
        return <div>Фильм не найден</div>;
    }

    const filmCategoryId = film.category;
    console.log(filmCategoryId);

    const similarFilms = fullFilms.filter((otherFilm) => otherFilm.category === filmCategoryId && otherFilm.id !== film.id);
    console.log(similarFilms);
    

    
    const newVisions = similarFilms.map((similarFilm) => 
    <PlusCardFilm 
    id={similarFilm.id}
    name={similarFilm.name} 
    description={similarFilm.description} 
    actors={similarFilm.actors} 
    category={similarFilm.category} 
    rank={similarFilm.rank} 
    key={similarFilm.id} 
    
    />)


    


    return (
        <div>
            <img src={film.imgCinema} alt="тут афиша" className="classAfish"></img>
            <h2>{film.name}</h2>
            <p>Описание:{film.description} </p>
            <p>Актеры:{film.actors} </p>
            <p>Категория:{film.category} </p>
            <p>Рейтинг:{film.rank} </p>
            <Link to ="/">ссылка на лист фильмов</Link>

            <h2>Список похожих фильмов</h2>
            {newVisions}

            <h2>коментарии к фильму</h2>
            <input 
            type="text"
            placeholder="Введите коментарий"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            />
            <button onClick={handlePostSubmit}>отправить</button>

            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px'  }}>
                {posts.map((post, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <strong>{post.user}</strong>: {post.text}
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default InfoToFilm;