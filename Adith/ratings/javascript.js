function render(data){
	//var html = '<div class="commentBox"><div class="leftPanelImg"><img src="https://via.placeholder.com/100x100"></div><div class="rightPanelImg"><span>'+data.name+'</span><div class="date">'+data.date+'</div><p>'+data.body+'</p></div><div class="clear"></div></div>';
	var html = '<div class="commentBox"><div class="leftPanelImg"><img src="anonymous.jpg"></div><div class="rightPanelImg"><span>'+data.name+'</span><div class="rollno">'+data.roll+'</div><p>'+data.body+'</p></div><div class="clear"></div></div>';
	
	$('#container').append(html);
}

$(document).ready(function(){


var coment = [
{"name":" Adith","roll": "CB.EN.U4CSE16402","body":"the interview for Dell was well conducted"}

];

for(var i=0;i<coment.length;i++)
{
	render(coment[i]);
}

$('#addComment').click(function(){

	const name = document.getElementById('name');
		if (name.value =='' || name.value == null) {
			alert('Name is required');
			e.preventDefault();
		}

		const roll = document.getElementById('roll');
		if (roll.value =='' || roll.value == null) {
			alert('Roll number is required');
			e.preventDefault();
		}

		if(roll.value[0]!='C' || roll.value[1]!='B' || roll.value[2]!='.' || roll.value[3]!='E' || roll.value[4]!='N' || roll.value[5]!='.' || roll.value[6]!='U' || roll.value[7]!='4')
		{
			alert('Roll number not in proper format!');
			return;
		}

		if ((roll.value[8]!='C' && roll.value[9]!='S' && roll.value[10]!='E') || (roll.value[8]!='E' && roll.value[9]!='C' && roll.value[10]!='E') || (roll.value[8]!='E' && roll.value[9]!='E' && roll.value[10]!='E') )
			{
			alert('Please enter correct branch!');
			return;
			}


		
		
		const body = document.getElementById('bodyText');
		if (body.value =='' || body.value == null) {
			alert('Content is required');
			e.preventDefault();
		}

	/*let today = new Date();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	let date = today.getDate();

	let current_date = `${date},${month},${year}`;*/
	
	var addObj = {
		"name": $('#name').val(),
		"roll": $('#roll').val(),
		"body": $('#bodyText').val()
	};
	coment.push(addObj);
	render(addObj);
	$('#name').val('');
	$('#roll').val('');
	$('#bodyText').val('');

});


});