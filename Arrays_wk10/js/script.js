// Variables
var characters = []
characters[0] = 'Luke Skywalker';
characters[1] = 'Han Solo';
characters[2] = 'Princess Leia';

$('#addCharacter').on('click', function(){
	console.log(characters);
    var character = $('#character').val();

    if(character != '')
    {
		characters.push(character);
	    $('#character').val('');
	    $('#myCharacters').append('<li class="list-group-item">' + character + '</li>');
	    $('#character').val('');
    } else {
    	$('#error').html("Type a name, Rebel Scum!");
    	$('#error').show();
    }
});