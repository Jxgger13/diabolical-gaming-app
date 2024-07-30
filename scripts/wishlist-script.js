/*******************************************************************************************/
// ARRAYS

var games = [];

/*******************************************************************************************/

// CREATE GAME OBJECTS
const gameFactory = (title, category, price) => {
    return {
        title,
        category,
        price
    };
};

// TOGGLE FORM DISPLAY
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

// READ AND HANDLE FORM INPUT DATA
document.getElementById('new-game').addEventListener('submit', function (event) {
    event.preventDefault();

    let title = document.querySelector('#title').value;
    let category = document.querySelector('#category').value;
    let price = parseFloat(document.querySelector('#price').value).toFixed(2);

    let newGame = gameFactory(title, category, price);
    games.push(newGame);

    updateWishlist();
    togglePopup();

});

// UPDATE WISHLIST
function updateWishlist() {

    console.log(games);

    $('#wishlist').empty();

    for (i = 0; i < games.length; i++) {
        $('#wishlist').append('<li>' + games[i].title + ",  "
            + games[i].category + ",  $" + games[i].price + '</li>');
    }

};

$('#wishlist').append('<li>' + 'Wishlist is empty' + '</li>');

/*******************************************************************************************/