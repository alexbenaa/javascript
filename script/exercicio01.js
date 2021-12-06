const $Time = new Date()
var $Hours = getHours()

document.querySelector('hours').innerHTML(`<strong>Agora são ${$Hours} hrs.</strong>`)