import './style.css'


document.addEventListener('DOMContentLoaded', (e) => {

    setTimeout((e) => {
        const loadPage = document.getElementById('freePage-btn')
        loadPage.click()
    }, 1000)

    document.getElementById('freePage-btn').addEventListener('click', (e) => {
        document.getElementById('freePage').style.display = ""
        document.getElementById('comfortPage').style.display = "none"
        document.getElementById('additionallPage').style.display = "none"
    });
    document.getElementById('comfortPage-btn').addEventListener('click', (e) => {
        document.getElementById('freePage').style.display = "none"
        document.getElementById('comfortPage').style.display = ""
        document.getElementById('additionallPage').style.display = "none"
    });
    document.getElementById('additionallPage-btn').addEventListener('click', (e) => {
        document.getElementById('freePage').style.display = "none"
        document.getElementById('comfortPage').style.display = "none"
        document.getElementById('additionallPage').style.display = ""
    });
})