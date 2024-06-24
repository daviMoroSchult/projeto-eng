var btnEmail = document.querySelector('.btnEmail');
var card1 = document.querySelector('.projeto1');
var card2 = document.querySelector('.projeto2');
var card3 = document.querySelector('.projeto3');


btnEmail.addEventListener('click', function() {
    if (btnEmail.innerHTML.includes(': davimoroschult0@gmail.com')) {
    btnEmail.innerHTML = '<i class="fa fa-envelope"></i> Email'} else {
        btnEmail.innerHTML +=  ': davimoroschult0@gmail.com';
    }

});

/*card1.addEventListener('click', function() {
    
});*/