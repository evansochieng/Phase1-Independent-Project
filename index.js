// INTERACT WITH THE DOM

document.addEventListener('DOMContentLoaded', () => {
    // Call search input
    searchInput()
})

// Grab user search input
function searchInput(){
    // Get the form element
    const form = document.getElementById("search-form")

    return(
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const search = event.target['search-input'].value;
            event.target.reset();
        })
    )
}