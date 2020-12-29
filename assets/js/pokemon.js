//function to show pokemon information and picture
//jQuery code to select pokemon from dropdown box

$(document).on('change', '.poke-selector', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function(){
    $('.poke-selector').trigger('change');
});