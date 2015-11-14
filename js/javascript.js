$(document).ready(function(){
    
    
    
    function hideAll() {
        $('#album1').hide();
        $('#album2').hide();
        $('#album3').hide();
        $('#album4').hide();
        $('#audio1').hide();
     	$('#audio2').hide();
        $('#audio3').hide();
        $('#audio4').hide();
    }
    
    hideAll();
    
    $('.robertfrancis').click (function() {
       if($(this).hasClass('highlighted')) {
       $(this).animate({'bottom': '+10px'}, 'fast');
     } else {
       $(this).animate({'top': '-10px'}, 'fast');
     } 
        

        hideAll();
        

         switch ( $(this).attr("id") ) {
            case "littlegirl" :
        		$('#album1').show();
                $('#audio1').show();
                break;
            case "junebug" :
            	$('#album2').show();
                $('#audio2').show();
                break;
            case "perfectlyyours" :
            	$('#album3').show();
                $('#audio3').show();
                break;
            case "love" :
            	$('#album4').show();
                $('#audio4').show();
                break;
        }
    });  
    
 
});
