$(function(){
    var score = 0;
    var q1 = [];
    var numOfQuestions = 1;
    var pointsPossible = 3;
    var q1ansArr = ['b', 'd', 'e'];
    var answers = {
        'a': false,
        'b': true,
        'c': false,
        'd': true,
        'e': true
    }

    $('#submit').on('click', function(){
        for (var i = 0; i < 5; i++) {
            var guess = $('#q1cb' + (i+1)).is(':checked');
            var letter = $('#q1cb' + (i+1)).val();
            if(answers[letter])
            {
                $('#q1cb' + (i+1)).css('outline','3px solid green');
            }
        }
    });
});
