$(function(){
	var aboutme=$('a#aboutme');
	var qiuzhi=$('a#qiuzhi');
	var skill=$('a#skill');
	var contact=$('a#contact');
	aboutme.click(function(){
	$('.aboutme').css('display','block');
	$('.aboutme').animate({'marginBottom':'0'},1000);
	})
	$('.clock1').click(function(){
	$('.aboutme').animate({'marginBottom':'50%'},1000);	
	$('.aboutme').css('display','none');
	})
	$('.clock2').click(function(){
	$('.aboutme').animate({'marginBottom':'50%'},1000);	
	$('.aboutme').css('display','none');
	})
	qiuzhi.click(function(){
	$('.qiuzhi').css('display','block');
	$('.qiuzhi').animate({'marginLeft':'0'},1000);
	})
	$('.clock3').click(function(){
	$('.qiuzhi').animate({'marginLeft':'100%'},1000);	
	$('.qiuzhi').css('display','none');
	})
	skill.click(function(){
	$('.skill').css('display','block');
	$('.skill').animate({'marginTop':'0'},1000);
	})
	$('.clock4').click(function(){
	$('.skill').animate({'marginTop':'50%'},1000);	
	$('.skill').css('display','none');
	})
	$('.clock5').click(function(){
	$('.skill').animate({'marginTop':'50%'},1000);	
	$('.skill').css('display','none');
	})
	contact.click(function(){
	$('.contact').css('display','block');
	$('.contact').animate({'marginRight':'0'},1000);
	})
	$('.clock6').click(function(){
	$('.contact').animate({'marginRight':'100%'},1000);	
	$('.contact').css('display','none');
	})
})