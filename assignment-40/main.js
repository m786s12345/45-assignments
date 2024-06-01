function make_album(artistName, albumTitle, tracks) {
    if (tracks !== undefined) {
        return { artistName: artistName, albumTitle: albumTitle, tracks: tracks };
    }
    else {
        return { artistName: artistName, albumTitle: albumTitle };
    }
}
var album1 = make_album('Mehdi Hassan', 'The Definitive Collection, Vol. 1', 10);
var album2 = make_album('Jugjit', 'A. Journy', 22);
var album3 = make_album('Jugjit Singh', 'Marasim');
console.log(album1);
console.log(album2);
console.log(album3);
