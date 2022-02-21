/**
 * 
 */
let bookStore = document.getElementById("books-store")
function getBooksFromLibrary(){
    fetch('./js/books.json')
    .then(response => response.json())
    .then(data => {
        createBooksCard(data.Library.books);
    })
    .catch();
}

function createBooksCard(books){
    books.forEach(book => {
        let div = document.createElement('div');
        let html = `
        <div class="rec-book">   
        <div class="book">
                <img src="../assets/orange.jpg" alt="" class="library-book">
        </div>        
        <div class="library-book-description">
            <p>
                <label for="title" class="lbl-title">DICTIONNAIRE CIKAM</label>
            </p>
            <br>
            <p>
                <label for="title" class="lbl-author">By Mubabinge Bilolo</label>
            </p>
            <p>
                <label for="title" class="lbl-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.enim mollitia!</label>
            </p>
            <p>
                <input type="button" value="Details" class="btn-buy-details">
                <input type="button" value="Add to cart" class="btn-buy-details">
                <input type="button" value="Buy" class="btn-buy-details">
            </p>
        </div>                
        </div>`;
        div.innerHTML = html;
        div.classList.add('livre');
        bookStore.appendChild(div);
    });
}

getBooksFromLibrary();