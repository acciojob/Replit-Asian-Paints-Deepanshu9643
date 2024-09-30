document.addEventListener('DOMContentLoaded', function() {
    const blockInput = document.getElementById('block_id');
    const colourInput = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const gridItems = document.querySelectorAll('.grid-item');

    // Ensure all elements exist before attaching listeners
    if (blockInput && colourInput && changeButton && resetButton) {
        changeButton.addEventListener('click', function() {
            const blockNumber = parseInt(blockInput.value);
            const color = colourInput.value;

            if (blockNumber >= 1 && blockNumber <= 9) {
                // Set the color of the specified grid item
                gridItems[blockNumber - 1].style.backgroundColor = color;
            }
        });

        resetButton.addEventListener('click', function() {
            // Reset the color of all grid items
            gridItems.forEach(item => {
                item.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            });
        });
    } else {
        console.error('One or more elements are missing in the DOM.');
    }
});
