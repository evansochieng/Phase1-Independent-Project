// INTERACT WITH THE DOM

document.addEventListener('DOMContentLoaded', () => {
    // Call search input
    searchUniversity()
})




// Fetch data from API
function fetchData(searchInput){
    fetch(`http://universities.hipolabs.com/search?name=${searchInput}`)
    .then( (response) => response.json())
    .then( (result) => {
        console.log(result)
    })
}

// Grab user search input
function searchUniversity(){
    // Get the form element
    const form = document.getElementById("search-form")

    // Grab user input and make a GET request
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const search = event.target['search-input'].value;
        event.target.reset();

        // Fetch university data
        fetchData(search)
        // fetch(`http://universities.hipolabs.com/search?name=${search}`)
        // .then( (response) => response.json())
        // .then( (result) => {
        //     console.log(result)
        // })
    })
}