// bookmarklet.src.js
/*
wordsChunk = document.getElementsByTagName('body')[0].textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
wordSortTable = {};
for(i = 0; i < wordsChunk.length; i++){
    var current = wordsChunk[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
}
wordSort = [];
for(var name in wordSortTable){
   if(name.length == 1 && name.match(/\W/g))
    continue;
   wordSort.push([name, wordSortTable[name]]);
}
wordSort.sort(function(a, b) {return b[1] - a[1]});
wordSort = wordSort.slice(0, 40);
for(var i = 0; i < wordSort.length; i++){
    str += wordSort[i][1] +", "+ wordSort[i][0] + "\n";
}
alert(str);
*/

// console.js
/*
wordsChunk = document.getElementsByTagName('body')[0].textContent.replace(/\s{2,}/g, '').replace(/\n/g, ' ').split(' ');
wordSortTable = {};
for(i = 0; i < wordsChunk.length; i++){
    var current = wordsChunk[i].toLowerCase();
    wordSortTable[current] = wordSortTable[current] == undefined ? 1 : wordSortTable[current]+1;
}
wordSort = [];
for(var name in wordSortTable){
   if(name.length == 1 && name.match(/\W/g))
    continue;
   wordSort.push([name, wordSortTable[name]]);
}
wordSort.sort(function(a, b) {return a[1] - b[1]});
wordSort = wordSort.slice(-200);
str = '';
for(var i = 0; i < wordSort.length; i++){
    str += wordSort[i][1] +"\t"+ wordSort[i][0] + "\n";
}
console.log(str);
*/

// 현재 웹페이지의 모든 텍스트에서
var entireText = document.getElementsByTagName('body')[0].innerText;
// 단어들을 쪼갠 후에 // .split()
var splitedText = entireText.split(' ');
// 등장 횟수를 계산하고 
var countedWord = {};
for(var i = 0; i < splitedText.length; i++){
    var word = splitedText[i].toLowerCase();
    if(countedWord[word] == undefined){
        countedWord[word] = 1;
}else {
        countedWord[word] = countedWord[word] + 1;
    }
}
// 정렬 한 후에 // for(a in b){var.push([])} // var.sort(function(){return a b;})
var countedWordArr = [];
    for(var name in countedWord){
        countedWordArr.push([name, countedWord[name]])
}

// 콘솔창에 출력한다
/*
countedWordArr.sort(function(a, b){
    return a[1] - b[1];
})

for(var i=0; i<countedWordArr.length; i++){
    console.log(countedWordArr[i][0], countedWordArr[i][1]);
}
*/
// 경고창에 출력한다
countedWordArr.sort(function(a, b){
    return b[1] - a[1];
});
var str = '';
for(var i=0; i<countedWordArr.length; i++){
    str = str + (countedWordArr[i][0] + " : " + countedWordArr[i][1])+"\n"
}
alert(str)
