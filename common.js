document.addEventListener('DOMContentLoaded', function() {
    // Apply fade-in effect to the current page
    document.body.classList.add('fade-in');

    // Attach event listener to all links
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            const href = this.getAttribute('href'); // Get the link target

            // Apply fade-out effect before navigating
            document.body.classList.add('fade-out');

            // Delay navigation to allow the fade-out animation to play
            setTimeout(function() {
                window.location.href = href;
            }, 500); // Adjust delay to match the animation duration
        });
    });
});
