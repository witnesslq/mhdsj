jq_wang=$;
$(function(){
	var clicknum=0;
	$('#link-frame .nextBtn').click(function(){
		if(1030-clicknum*38>566){
			clicknum=clicknum+5;
			$('.linklistul').animate({left:'-'+clicknum*38+'px'},"slow");
		}
		return false;
	});
	
	$('#link-frame .preBtn').click(function(){
		if(clicknum!=0){
			clicknum=clicknum-5;
			$('.linklistul').animate({left:'-'+clicknum*38+'px'},"slow");
		}
		return false;
	});	
});