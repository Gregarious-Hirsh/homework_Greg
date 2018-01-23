function onSubmit(){
    var score = 0;
    var q1 = [];
    var numOfQuestions = 1;
    var pointsPossible = 3;
    var q1ansArr = ['b', 'd', 'e'];

    //loop through question and store the answers into the q1 array
    for (var i = 0; i < 5; i++) {

        // if statement checks current checks box
        if (document.forms['quiz']['q1cb' + (i + 1)].checked) {
            //push users asnwers into q1 array
            q1.push(document.forms['quiz']['q1cb' + (i + 1)].value);
        }
    }
alert(q1);
}
