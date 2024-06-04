import React, { createContext } from 'react'
import './App.css'
import ListFilms from './List/ListFilms'
import InfoToFilm from './Components/InfoToFilm'
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Router from './Components/Router';
export const AuthContext = createContext();

function App() {

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

  return (
    <>
    <AuthContext.Provider value={{films}}>
      <Router />
    </AuthContext.Provider>
    </>
  )
}


export default App
