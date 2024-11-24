var bookMarkInput = document.getElementById('bookmarkname');
var websiteUrl = document.getElementById('websiteurl');
var bookList = [];

function addbook() {
    var book = {
        name:bookMarkInput.value,
        url:websiteUrl.value,
    }
    bookList.push(book)
 console.log(bookList);
    clearform();
}
function clearform(){
    bookMarkInput.value = null;
    websiteUrl.value = null;
}