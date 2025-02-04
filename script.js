const titleOriginal = document.title;
const titleUpdate = "Te echamos de menos...";
const TAB_ID = (parseInt(localStorage.getItem("lastTabId") || "0", 10) + 1).toString();
localStorage.setItem("lastTabId", TAB_ID);

document.getElementById('newTab').addEventListener('click', () => {
    window.open('https://www.flat101.es/', '_blank');
});

function updateTabTitle() {
    if (!document.hidden) {
        localStorage.setItem("activeTab", TAB_ID);
        document.title = titleOriginal;
    } else {
        if (localStorage.getItem("activeTab") === TAB_ID) {
            document.title = titleUpdate;
        } else {
            document.title = titleOriginal;
        }
    }
}

document.addEventListener("visibilitychange", updateTabTitle);
window.addEventListener("storage", updateTabTitle);

updateTabTitle();