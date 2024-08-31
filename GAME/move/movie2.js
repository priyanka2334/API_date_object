//       let input = document.querySelector('input');
//         let btn = document.querySelector(".btn");
//         let output = document.querySelector("#output");
//         let image=document.querySelector('#image');
//         let key = "1412c2e";

//         btn.addEventListener('click', movie);

//         function movie() {
//             let seriesId = input.value;
//             fetch(`http://www.omdbapi.com/?t=${input.value}&apikey=1412c2e`)
//             .then((result) => result.json())
//             .then((result) => {
//                 console.log(result);
//                 image.src=`${result.Poster}`;
//                 output.innerText = `Title Name:${result.Title}\n Writer: ${result.Writer}\nYear: ${result.Year}\nCountry: ${result.Country}\nReleased: ${result.Released}\nLanguage: ${result.Language} `;
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//         }





////////////////////////////////////////////////////////////////////////AcYNC AWAIT



// let input = document.querySelector('input');
// let btn = document.querySelector(".btn");
// let output = document.querySelector("#output");
// let image = document.querySelector('#image');
// let key = "1412c2e";

// btn.addEventListener('click', movie);

// async function movie() {
//     try {
//         let seriesId = input.value;
//         let response = await fetch(`http://www.omdbapi.com/?t=${seriesId}&apikey=${key}`);
//         let result = await response.json();
//         console.log(result);
//         image.src = `${result.Poster}`;
//         output.innerText = `Title Name: ${result.Title}\n Writer: ${result.Writer}\nYear: ${result.Year}\nCountry: ${result.Country}\nReleased: ${result.Released}\nLanguage: ${result.Language}`;
//     } catch (error) {
//         console.log(error);
//     }
// }
