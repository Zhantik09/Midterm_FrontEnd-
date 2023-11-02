document.getElementById('countButton').addEventListener('click', function() {
    countElements();
});

document.getElementById('countFirstDivButton').addEventListener('click', function() {
    countElementsInFirstDiv();
});

document.getElementById('countSecondDivButton').addEventListener('click', function() {
    countElementsInSecondDiv();
});

function countElements() {
    var paragraphs = document.querySelectorAll('p');
    document.getElementById('result1').innerText = 'There are ' + paragraphs.length + ' paragraph tags on this page.';
}

function countElementsInFirstDiv() {
    var firstDivElements = document.querySelectorAll('#firstDiv *');
    document.getElementById('result2').innerText = 'There are ' + firstDivElements.length + ' elements inside the first div.';
}

function countElementsInSecondDiv() {
    var secondDivElements = document.querySelectorAll('#secondDiv *');
    document.getElementById('result3').innerText = 'There are ' + secondDivElements.length + ' elements inside the second div.';
}
