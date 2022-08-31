// INTERACT WITH THE DOM

document.addEventListener('DOMContentLoaded', () => {
    // Call search university function
    searchUniversity();
})




// Fetch data from API
function fetchData(searchInput){
    fetch(`http://universities.hipolabs.com/search?name=${searchInput}`)
    .then( (response) => response.json())
    .then( (result) => {
        // The returned data is an array
        // Loop over each item and extract name, country and url
        // Show the user these details under the search results section

        // Display these to the search results section
        const searchResults = document.getElementById("search-details");
        searchResults.innerHTML = ''; //clear current content
        
        if (result.length === 0){
            alert('There is no matching university. Please try again!')
        } else {
            for (let university of result){
                // Add the details to DOM
                const uniName = university.name;
                const nameParagraph = document.createElement('p')
                nameParagraph.textContent = `Name: ${uniName}`
                searchResults.appendChild(nameParagraph);
    
                const uniCountry = university.country;
                const countryParagraph = document.createElement('p')
                countryParagraph.textContent = `Country: ${uniCountry}`
                searchResults.appendChild(countryParagraph);
    
                const uniWebsite = university['web_pages'][0];
                const websiteParagraph = document.createElement('p')
                //const webLink = document.createElement('a');
                //webLink.innerText = uniWebsite
                //websiteParagraph.appendChild(webLink)
                //websiteParagraph.innerText = `University website: ` + websiteParagraph.innerText
                websiteParagraph.innerHTML = `University website: ${uniWebsite}`
                searchResults.appendChild(websiteParagraph);
            }
        }
    })
    //.then( () => postComments())
    .catch( (error) => {
        alert(error.message);
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

        // Call fetchData() to fetch university data
        fetchData(search);
        // Post comments about the university
        postComments();
    })
}

// Handle comments
function postComments(){
    // Grab comments form
    const form = document.getElementById("comments-form");

    // Grab comments section
    const comments = document.getElementById("comments")
    comments.innerHTML = '';

    // Listen to the submit event
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newComment = event.target["comment-input"].value;

        //Add the comment to the comments section
        const li = document.createElement('li');
        li.textContent = newComment;
        comments.appendChild(li);

        event.target.reset();
    })
}