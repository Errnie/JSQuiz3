$(document).ready(function ()

{

});


var text = $('#textfield') . val()
console.log(text);

$('#add').click( function(){
    var text = $('#textfield') . val()
    console.log(text);
    $('#list').append("<li>" + text + "</li>")
    $('#btn').click("clicked")

}
    );
    
   

    
    


