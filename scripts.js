document.addEventListener("DOMContentLoaded", function() {
    // Load default content
    loadContent('home.html');
});

function loadContent(page) {
    fetch('sections/' + page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('main-content').innerHTML = '<p>Sorry, something went wrong while loading the content.</p>';
        });
}
