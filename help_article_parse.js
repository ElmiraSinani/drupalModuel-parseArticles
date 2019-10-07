jQuery(document).ready(function() {	
	
	jQuery(".addNewForm a").click(function() {
		jQuery('.node_fields:first').clone(true).insertBefore('.addNewForm').find('input').val('');
		jQuery(".close:last").removeClass("hide");
		jQuery("#title:last-child").focus();	
		
	});
	jQuery(".close a").click(function(){
		jQuery(this).parent().parent().remove();	
	});
	
	
});
