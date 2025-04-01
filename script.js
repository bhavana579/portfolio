function toggleCard(imgElement) {
    const cardContent = imgElement.parentElement; // Get the parent div of the clicked image (the .card-content div)
    const cardInfo = cardContent.querySelector('.card-info'); // Get the info section inside the clicked card
    cardInfo.classList.toggle('show'); // Toggle visibility of card content
}