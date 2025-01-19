const titleInSite = document.title;
let titleOutSite = "Te echamos de menos...";

window.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? titleOutSite : titleInSite;
});

document.getElementById('newTab').addEventListener('click', () => {
    window.open('https://www.google.com', '_blank');
});