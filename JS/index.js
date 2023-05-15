/* Random Banner */
{
    const randomN = Math.floor(Math.random() * 5) + 1;

    const src = "./Images/Banner/Background" + randomN + ".jpg";

    document.getElementById("banner").children[0].setAttribute("src", src);
}

/* Blur Effect */
{
    const blurElement = document.getElementById("banner-overlay");
    document.onmousemove = (event) => {
        blurElement.style.transform = `translate(${event.clientX}px, calc(${event.clientY}px - 15vh))`;
    };
}