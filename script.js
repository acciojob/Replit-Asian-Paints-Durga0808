//your JS code here. If required.
// script.js

document.getElementById('change').addEventListener('click', function() {
    // Get the block ID and color from the input fields
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    
    // Reset all grid item backgrounds to transparent
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }

    // Change the background color of the specified grid item
    if (blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert('Please enter a valid block ID (1-9)');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    // Reset all grid item backgrounds to transparent
    const gridItems = document.getElementsByClassName('grid-item');
    for (let item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }
});
