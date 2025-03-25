document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');

    // Retrieve the stored color preference from localStorage
    const storedColor = localStorage.getItem('buttonColor');
    if (storedColor) {
        button.style.backgroundColor = storedColor;
    }

    // Add click event listener to the button
    button.addEventListener('click', () => {
        // Change the button color randomly
        const newColor = getRandomColor();
        button.style.backgroundColor = newColor;

        // Store the new color in localStorage
        localStorage.setItem('buttonColor', newColor);

        // Trigger the animation
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 500); // Remove the class after the animation duration
    });
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
