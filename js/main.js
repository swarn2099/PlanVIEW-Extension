
$(document).ready(function(){
	$('.carousel').carousel();
	$('.modal-trigger').leanModal();
	Materialize.updateTextFields();



	window.pv = window.pv || {};
	pv.openClass = pv.openClass || function(link){window.open(link, '_system', 'location=yes')};
	pv.classClick = pv.classClick || function(e){return pv.openClass($(this).attr("data-location"));};
	pv.updateOption = pv.updateOption || function(option,value,callback){localStorage.setItem(option,value); console.log("Dun diz",localStorage.getItem(option));/* Code to update global preferences*/ callback();};
	pv.getOption = pv.getOption || function(option){return localStorage.getItem(option);};
	pv.updateLinks = pv.updateLinks || function(){let prefix="#block-";for(let i=1; i<=8;i++){$(prefix+i).attr("data-location",pv.getOption((prefix+i).replace(/#/g,"")));}};
	pv.resetNotes = pv.resetNotes || function(){pv.updateOption("notes",JSON.stringify({1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""}),function(){})};
	pv.updateNotes = pv.updateNotes || function(){let name="block-{{ID}}-notes";for(let i=1; i<=8;i++){($("#"+name.replace(/{{ID}}/g,i)).val(pv.getNote(i)))}};
	pv.getNote = pv.getNote || function(note){let json = JSON.parse(pv.getOption("notes")); return (json[note]) ? json[note] : ""};
	pv.saveNote = pv.saveNote || function(which,what){let json = JSON.parse(pv.getOption("notes")); json[which] = what; pv.updateOption("notes",JSON.stringify(json),function(){})};
	$(".class").click(pv.classClick);
	$('.button-collapse').sideNav();
	pv.updateLinks();
});
