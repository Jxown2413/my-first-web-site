// var Body = {
//     setColor: function(color) {document.querySelector('body').style.color = color;},
//     setBackgroundColor: function(color) {document.querySelector('body').style.backgroundColor = color}
// }
// var Links = {
//     setColor: function(color) {document.querySelectorAll('a').forEach(link => {link.style.color = color})}
// }
// function nightDayHandler() {
//     var nightDayButton = document.querySelectorAll('.nightDayButton');
//     var isNight = document.querySelector('.nightDayButton').value === 'night';
    
//     if(isNight) {
//         Body.setBackgroundColor('black');
//         Body.setColor('white');
//         Links.setColor('white');
//         nightDayButton.forEach(ndButton => {ndButton.value = 'day'});
//     } else {
//         Body.setBackgroundColor('white');
//         Body.setColor('black');
//         Links.setColor('black');
//         nightDayButton.forEach(ndButton => {ndButton.value = 'night'});
//     }
// }

var Body = {
    setColor: function(color) {$('body').css('color', color);},
    setBackgroundColor: function(color) {$('body').css('background-color', color);}
};

var Links = {
    setColor: function(color) {$('a').css('color', color);}
};

function nightDayHandler() {
    var $buttons = $('.nightDayButton');
    var isNight = $buttons.first().val() === 'night';

    if(isNight) {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('white');
        $buttons.val('day');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('black');
        $buttons.val('night');
    }
}

$(function() {
    $('.nightDayButton').on('click', nightDayHandler);
});