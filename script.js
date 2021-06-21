






function init(size) {
    const map = document.querySelector("#map");

    const children = Array.from(map.childNodes);
    children.forEach(child => map.removeChild(child));

    console.log("1fr".repeat(size));
    map.style.gridTemplateColumns = "1fr ".repeat(size);
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            console.log(i + " " + j);
            const block = document.createElement("div");
            block.classList.add("block");
            map.appendChild(block);
        }
    }
}

init(100);