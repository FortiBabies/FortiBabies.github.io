document.addEventListener("DOMContentLoaded", () => {
    const activities = document.querySelectorAll('.activity');
    let currentIndex = 0;
    const displayDuration = 5000; // Time each slide stays visible (5 seconds)

    // Safety check in case there are no elements
    if (activities.length === 0) return;

    function switchToNextActivity() {
        // Remove active class from current item
        activities[currentIndex].classList.remove('active');

        // Calculate next index (loops back to 0 at the end)
        currentIndex = (currentIndex + 1) % activities.length;

        // Add active class to next item
        activities[currentIndex].classList.add('active');
    }

    // Automatically switch slides at the specified interval
    setInterval(switchToNextActivity, displayDuration);
});