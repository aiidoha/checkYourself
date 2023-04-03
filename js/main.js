// Задание №1

// Используя API со странами выведите список со всеми странами:
// API: https://restcountries.com/v3.1/all
let listCountries = document.querySelector("#list");
let countries = fetch("https://restcountries.com/v3.1/all");
countries.then((res)=>{
    return res.json();
}).then(([data])=>{
  console.log(data.name);

  listCountries.innerHTML = '';
  data.name.forEach((elem1) => {
    listCountries.innerHTML += `
    <li>${elem1.official}
    </li>
    `;
  })
})
// Задание №2

// Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
// Используйте fetch. Отобразите на странице имена персонажей из
// Рика и Морти в list.

// Задание №3

// Рядом с именами отобразите все изображения
// которые вы получили со второго задания
let list = document.querySelector('.list');

let z = fetch('https://rickandmortyapi.com/api/character');
z.then((response) => {
  return response.json();
}).then((info) => {
    // console.log(info.results);
  list.innerHTML = '';
  info.results.forEach((elem) => {

    list.innerHTML += `
    <li>${elem.name}
    <br>
    <img src="${elem.image}" alt="" width="50">
    </li>
    `;
  })
});
