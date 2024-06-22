var btnEmail = document.querySelector('.btnEmail');

btnEmail.addEventListener('click', function() {
    if (btnEmail.innerHTML.includes(': davimoroschult0@gmail.com')) {
    btnEmail.innerHTML = '<i class="fa fa-envelope"></i> Email'} else {
        btnEmail.innerHTML +=  ': davimoroschult0@gmail.com';
    }

});