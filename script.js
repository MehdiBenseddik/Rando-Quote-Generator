document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const quoteText = document.getElementById('quoteText');
    const author = document.getElementById('author');

    generateBtn.addEventListener('click', function() {
        // Display "Loading..." while waiting for API response
        quoteText.textContent = 'Loading...';
        author.textContent = '';

        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                // Update the quote and author after fetching data
                quoteText.textContent = `"${data.content}"`;
                author.textContent = `- ${data.author}`;
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching random quote:', error);
                quoteText.textContent = 'Failed to fetch quote. Please try again later.';
                author.textContent = '';
            });
    });
});
