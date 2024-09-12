$(document).ready(function(){
    $("#checkId").on('click',function(){
        if($('#checkId').prop('checked')){
            $('#textField').prop('disabled',false)
        }else{
            $('#textField').prop('disabled',true)
            $('#textField').val('')
        }
        
    })
})