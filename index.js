const containerContent = document.getElementById('container-content');
const thankYouCard = document.getElementById('thank-you-card');

containerContent.style.display = 'flex';
thankYouCard.style.display = 'none';

let selectedRating = null;

// Handle rating selection
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function () {
        console.log(`Clicked element: ${this}`); // Logs the clicked element
        console.log(`Data-rating value: ${this.getAttribute('data-rating')}`); // Logs the data-rating value
        // Remove 'selected' class from all items
        document.querySelectorAll('.grid-item').forEach(i => i.classList.remove('selected'));

        // Add 'selected' class to clicked item
        this.classList.add('selected');

        // Update selected rating
        selectedRating = this.getAttribute('data-rating');
        console.log(`Selected rating: ${selectedRating}`); // Debug log
    });
});

// Handle submit button click
document.getElementById('submit-btn').addEventListener('click', function () {
    if (selectedRating) {
        // Update the thank-you card with the selected rating
        document.querySelector('.rating-text').textContent = `You selected ${selectedRating} out of 5`;

        // Hide the container content and show the thank-you card
        containerContent.style.display = 'none';
        thankYouCard.style.display = 'flex';
    } else {
        alert('Please select a rating first!');
    }
});
