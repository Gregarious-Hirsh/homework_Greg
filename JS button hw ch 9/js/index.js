
$('.message a').click(function(){
$('form').animate({height: "toggle", opacity: "toggle"}, "slow")
});
$('#createNew').on('click', newMember);

function newMember()
{
	$('#result').html('Welcome New Member!');
	console.log("#createNew member initiation");
}