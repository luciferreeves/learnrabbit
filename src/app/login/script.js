import * as $ from 'jquery';
$(document).ready(function(){
    $('#registerButton').hide()
    $('#registerToggle').click(function(){
        var innerText = $('#registerToggle').text();
        if (innerText === 'Create a free account') {
            $('#registerToggle').html('Log in instead')
            $('#registerButton').toggle()
            $('#loginButton').toggle()
        }
        if (innerText === 'Log in instead') {
            $('#registerToggle').html('Create a free account')
            $('#registerButton').toggle()
            $('#loginButton').toggle()
        }
    })
})
