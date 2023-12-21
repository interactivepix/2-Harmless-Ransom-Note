// Harmless Ransom Note Algorithm
// You will learn some techniques that are critical to writing fast and performant programs such as how to use an object as a hash table


// Linear time complexity

// function harmlessRansomNote (noteText, magazineText) {
//     var noteArr = noteText.split(" ");
//     var magazineArr = magazineText.split(" ");
//     var magazineObj = {};

//     magazineArr.forEach(word => {
//         if (!magazineObj[word]) magazineObj[word] = 0;
//             magazineObj[word]++;           
//     });

//     var noteIsPossible = true;

//     noteArr.forEach(word => {
//        if (magazineObj[word]) {
//         magazineObj[word]--;
//         if (magazineObj[word] < 0) noteIsPossible = false;        
//        } 
//        else noteIsPossible = false;
//     });

//     return noteIsPossible;
// }

// harmlessRansomNote('this is a secret note from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that I am an admirer of you must hike quite a dustance to find the secret places as they are far from populated areas but it is worth the effort a tip I have for you is to go early in the morning when it is not so hot out also bote that you must wear hiking boots this is one of the best places I have ever visited');


function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
	var magazineArr = magazineText.split(' ');

    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;

    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;    
            //?? Inside the first if?
        }
        else noteIsPossible = false;
    });

    return noteIsPossible;
}

// harmlessRansomNote('this is a secret note from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that I am an admirer of you must hike quite a dustance to find the secret places as they are far from populated areas but it is worth the effort a tip I have for you is to go early in the morning when it is not so hot out also bote that you must wear hiking boots this is one of the best places I have ever visited');
var result = harmlessRansomNote('this is a secret note from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that I am an admirer of you must hike quite a dustance to find the secret places as they are far from populated areas but it is worth the effort a tip I have for you is to go early in the morning when it is not so hot out also bote that you must wear hiking boots this is one of the best places I have ever visited');

console.log(result); 