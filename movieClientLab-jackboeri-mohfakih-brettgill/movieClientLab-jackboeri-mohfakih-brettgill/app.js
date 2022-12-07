// Add DOM selectors to target input and UL movie list
const inp = document.querySelector("input");
const myMovieList = document.querySelector("ul");
let myMovies = {};

const updateTable = () => {

    const tableDiv = document.getElementById('movieHistoryCard');
    
    let myTable = `
    <h5>Movie History</h5>
    <table>
    <tr>
      <th>Title</th>
      <th>Watched</th>
    </tr>
    <tr>
        ${Object.keys(myMovies).map(movie => {
            return `<tr><td>${movie}</td><td>${myMovies[movie]}</td></tr>`;
        })
        .join('')
        }
    </tr>
    </table>
    `;
    
    tableDiv.innerHTML = myTable;
}

const updateList = () => {
    let myList = `
    ${Object.keys(myMovies).map(movie => {
        return `<li>${movie}</li>`;       
    }).join('')}`;
    myMovieList.innerHTML = myList;
}

if(!(window.localStorage.getItem('myMovies'))) { //! IF LOCAL STORAGE DOES NOT EXIST -> Initialize myMovies
    myMovies = {};    
} else { //! IF LOCAL STORAGE EXISTS -> GET LOCAL STORAGE
    myMovies = JSON.parse(window.localStorage.getItem('myMovies'));
    updateTable();
    updateList();
}

function clearInput() {
    inp.value = '';
}

function clearMovies() {
    myMovieList.innerHTML = '';
    myMovies = {};
    updateTable();
    window.localStorage.clear();
}

function addMovie() {
    var userTypedText = inp.value.toLowerCase();

    if (myMovies[userTypedText]) {
        myMovies[userTypedText]++;
        updateTable();
    } else {
        if (userTypedText === '') {
            alert('You must input a movie to add');
            return;
        }
        myMovies[userTypedText] = 1;
        var li = document.createElement("li");
        var textToInsert = document.createTextNode(userTypedText);
        li.appendChild(textToInsert);
        myMovieList.appendChild(li);
        clearInput();
        updateTable();
        window.localStorage.setItem('myMovies', JSON.stringify(myMovies));
    }
}

const postInput = () => {
    inp.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addMovie();
        }
    });
}

const filterMovies = () => {
    const filterInp = document.getElementById('filter');

    filterInp.addEventListener('keyup', (event) => {
        document.getElementById("movieHistoryCard").innerHTML = "<h5>Movie History</h5>";
        Object.keys(myMovies).forEach(movie => {
            if (movie.includes(filterInp.value)) {
                let myTable = `
                <h5>Movie History</h5>
                <table>
                <tr>
                <th>Title</th>
                <th>Watched</th>
                </tr>
                <tr>
                    ${Object.keys(myMovies).map(movie => {
                        if (movie.includes(filterInp.value)) { 
                            return `<tr><td>${movie}</td><td>${myMovies[movie]}</td></tr>`;
                        } 
                    })
                    .join('')
                    }
                </tr>
                </table>
                `;
                document.getElementById('movieHistoryCard').innerHTML = myTable;
            }
        })
    })
}

postInput();
filterMovies();