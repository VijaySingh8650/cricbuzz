// 
// const option = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'b0568011b2mshba7fd5db0213d00p1ac35fjsn1703e4cbd87e',
//         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
// };

// fetch('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/trending', option)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'b0568011b2mshba7fd5db0213d00p1ac35fjsn1703e4cbd87e',
//         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
// };

// fetch('https://cricbuzz-cricket.p.rapidapi.com/teams/v1/2/players', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0568011b2mshba7fd5db0213d00p1ac35fjsn1703e4cbd87e',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c170661/i.jpg', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));