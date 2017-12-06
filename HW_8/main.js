var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 0];
var winArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 0];
var i;
var steps = 0;


//Рисуем борду





for (i=0; i<16; i++) {
    document.getElementById('board').innerHTML+='<div class="block"></div>';
    var block = document.getElementsByClassName('block');
    block.innerHTML+='i';
}








document.getElementById('board').onclick = function () {

    steps++;
    document.getElementById('steps').innerHTML = steps;
};






