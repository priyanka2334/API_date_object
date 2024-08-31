const apiKey = '3c51737272msh07183895631cedbp132b33jsn9957990b99a5';
const apiHost = 'moviesdatabase.p.rapidapi.com';

async function fetchSeasons() {
    const seriesId = document.getElementById('seriesId').value;
    const url = `https://moviesdatabase.p.rapidapi.com/titles/seasons/${encodeURIComponent(seriesId)}`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error(error);
        document.getElementById('result').textContent = 'Error fetching data';
    }
}


// let x = new Date("october 13, 2027 11:12:13");
// let y = new Date(" ");

//  if(x<y){
//     console.log("x is past date");
// }else if(x>y){
//     console.log("y is future date");
// }else{
//     console.log("x is same date");
// }
