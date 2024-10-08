document.querySelector("#change_button").addEventListener("click", function() {
    const num = document.querySelector("#block_id").value;
    const color = document.querySelector("#color_id").value;

    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    if (num && !isNaN(num)) {
        const block = document.getElementById(num);
        if (block) {
            block.style.backgroundColor = color;
        } else {
            alert("Please choose a valid block number.");
        }
    } else {
        alert("Please enter a valid number.");
    }
});

document.querySelector("#reset").addEventListener("click", function() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
});
