// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the dark mode class on the body element
    document.body.classList.toggle('dark-mode');

    // Store the theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// When the page loads, check for the saved theme in localStorage
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }
};
