document.addEventListener('DOMContentLoaded', function () {
    loadBookmarks();
});

document.getElementById('bookmarkForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;

    if (!siteName || !siteURL) {
        alert('Please fill in both fields!');
        return;
    }
    addBookmark(siteName, siteURL);
    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';
});

function addBookmark(name, url) {
    const bookmarks = getBookmarks();
    bookmarks.push({ name, url });
    saveBookmarks(bookmarks);
    displayBookmarks();
}
function deleteBookmark(index) {
    const bookmarks = getBookmarks();
    bookmarks.splice(index, 1);
    saveBookmarks(bookmarks);

    displayBookmarks();
}

function getBookmarks() {
    const bookmarks = localStorage.getItem('bookmarks');
    return bookmarks ? JSON.parse(bookmarks) : [];
}

function saveBookmarks(bookmarks) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

function loadBookmarks() {
    displayBookmarks();
}
function displayBookmarks() {
    const bookmarks = getBookmarks();
    const tableBody = document.getElementById('bookmarkTableBody');
    tableBody.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${bookmark.name}</td>
            <td><button class="visit-btn" onclick="window.open('https://${bookmark.url}', '_blank')"><i class="fa-solid fa-eye"></i>Visit</button></td>
            <td><button class="delete-btn" onclick="deleteBookmark(${index})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        `;

        tableBody.appendChild(newRow);
    });
}
