function make_album(artistName:string, albumTitle:string,tracks?:number){

    if(tracks !==undefined){
        return{artistName,albumTitle,tracks}
    }else{
        return{artistName,albumTitle}
    }

}
let album1= make_album('Mehdi Hassan','The Definitive Collection, Vol. 1',10);
let album2= make_album('Jugjit','A. Journy',22);
let album3= make_album('Jugjit Singh','Marasim');


console.log(album1);
console.log(album2);
console.log(album3);