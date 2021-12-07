


var radioxBox = document.getElementsByName('question');


for(let i = 0; i<radioxBox.length; i++){
	radioxBox[i].addEventListener('click', function(){
		if(radioxBox[i].checked && radioxBox[i].id === 'Yes'){
			document.querySelector('#member-experience').classList.remove('hideField');
		}else{
			document.querySelector('#member-experience').classList.add('hideField');
		}
	})
}

// for(var i = 0; i<radioxBox.length; i++){
// 	console.log(radioxBox[i]);
// }
// for(var i=0; i<radioxBox.length; i++){
// 	radioxBox[i].addEventListener('click',speak)
// }
// function speak(e){
// 	if(e.target.ID =='Yap'){
// 		alert('true')
// 	}else{
// 		alert('false')
// 	}
// }


function updateUI(){
	var ele = document.querySelector('#test');
	var rand = Math.floor(Math.random()* 2 +1);
	ele.style.backgroundImage= ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(./images/slide-image-${rand}.jpg)`;
}
window.addEventListener('load', updateUI);