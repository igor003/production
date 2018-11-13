$(document).ready(function (){
    $('.codice').draggable({
        snap: ".preseta",
        revert: "invalid",
        start: function(e,ui){
               var curent_position = ($(this).position());
        }
    });
    $('.preseta').droppable(
        {
            accept:".codice",
            drop: function(e, ui){
                var droppedItem = $(ui.draggable).children('[id ^= codice]').text();
                var cantitatea = $(ui.draggable).children('[id ^= cantitatea]').text();
                var norma = $(ui.draggable).children('[id ^= norma]').text();
                var percent = cantitatea/norma;
                var res = percent/(8/100);
                var curent_position = $(this).siblings('.progress').children('.progress-bar').html();
                if(parseInt(curent_position) == 0){
                    $(this).siblings('.progress').children('.progress-bar').css('width',res.toFixed(1)+'%');
                    $(this).siblings('.progress').children('.progress-bar').text(res.toFixed(1)+'%');
                    $(this).append('<div data_codice='+droppedItem+' data_cantitatea='+cantitatea+' data_norma='+norma+'   class="text-center alert-success r_1">'+droppedItem+'</div>');
                    $(ui.draggable).remove();
                }else{
                    var curent_position_progres_bar = $(this).siblings('.progress').children('.progress-bar').text();
                    console.log(curent_position_progres_bar);
                    var width = parseInt(curent_position_progres_bar)+parseInt(res);
                    if(width >100){
                        alert('НЕА');
                        $(ui.draggable).animate( {left: 0, top: 0}, 500 );
                    }else{
                        $(this).siblings('.progress').children('.progress-bar').css('width',width.toFixed(1)+'%');
                        $(this).siblings('.progress').children('.progress-bar').HTML = width.toFixed(1)+'%';
                        $(this).append('<div data_codice='+droppedItem+' data_cantitatea='+cantitatea+' data_norma='+norma+'   class="text-center alert-success r_1">'+droppedItem+'</div>');
                        $(this).siblings('.progress').children('.progress-bar').text(width.toFixed(1)+'%');
                        $(ui.draggable).remove();
                    }
                }
            }
        }
    );
});




