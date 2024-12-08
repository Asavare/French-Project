// Add interactivity or animations with JS here if needed
document.addEventListener("DOMContentLoaded", function() {
    // Example: Add an alert when clicking on an event card
    const eventCards = document.querySelectorAll(".event-card");
    eventCards.forEach(card => {
        card.addEventListener("click", function() {
            alert("You clicked on an event card!");
        });
    });
});
