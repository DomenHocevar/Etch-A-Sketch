



function mapSizeSubmission(params) {
    const textInput = document.querySelector("#mapSizeInput");
    const value = parseInt(textInput.value);
    if (!(parseInt(textInput.min) <= value && value <= parseInt(textInput.max)))
    {
        alert("Enter a valid number!");
        return;
    }
    mapInit(value);
}

function getChosenColor() {
    const colorInput = document.querySelector("#colorInput");
    return colorInput.value;
}

function colorBlock() {
    if (this.classList.contains("colored")) return;
    this.classList.add("colored");
    this.style.backgroundColor = getChosenColor();
}

function mapInit(size) {
    const map = document.querySelector("#map");

    const children = Array.from(map.childNodes);
    children.forEach(child => map.removeChild(child));

    map.style.gridTemplateColumns = "1fr ".repeat(size);
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            const block = document.createElement("div");
            block.classList.add("block");
            
            map.appendChild(block);
        }
    }

    const blocks = document.querySelectorAll(".block");
    blocks.forEach(block => 
    {
        block.addEventListener("mouseover", colorBlock);
    })
}



mapInit(10);