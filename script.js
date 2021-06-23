

const rainbowColors = ["red", "orage", "yellow", "green", "blue", "indigo", "violet"];

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

function getRainbowColor(params) {
    return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
}

function colorBlock() {
    if (this.classList.contains("colored")) return;
    this.classList.add("colored");
    let color;
    const rainbowInput = document.querySelector("#rainbowInput");
    if (rainbowInput.checked)
    {
        color = getRainbowColor();
    } else
    {
        color = getChosenColor();
    }
    this.style.backgroundColor = color;
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


function something() {
    console.log(typeof this.checked);
}

/*
const colorInput = document.querySelector("#colorInput");
const rainbowInput = document.querySelector("#rainbowInput");
colorInput.addEventListener("click", rainbowInput.value = )
*/


mapInit(10);
const colorInput = document.querySelector("#colorInput");
const rainbowInput = document.querySelector("#rainbowInput");
colorInput.addEventListener("click", function(){
    rainbowInput.checked = false
});