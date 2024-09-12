$(document).ready(function(){
    var qualArr = [];
    $(document).on("change",".qualification",function(){
            if($(this).prop("checked")){
                    console.log($(this).val());
                    qualArr.push($(this).val());
            }
    })
    $("#submitId").on('click',function(event){
       event.preventDefault();
        // console.log($('#firstName').val());
        // console.log($('#lastName').val());
        // console.log($('#gender').val());
        // console.log($('#DOB').val());
        // console.log($('#email').val());
        // console.log($('#phone').val());
        // console.log($('#address').val());
        var firstNameId = $('#firstName').val().length;
        var lastNameId = $('#lastName').val().length;
        var selectedGender = $('input[name="gender"]:checked').val();
        // console.log(selectedGender)
        if(firstNameId >=5 && lastNameId >=5 ){
            console.log($('#firstName').val());
            console.log($('#lastName').val());
            console.log($('input[name="gender"]:checked').val());
            console.log($('#DOB').val());
            console.log($('#email').val());
            console.log($('#phone').val());
            console.log($('#address').val());
            console.log($("#stateId").val());
           
            for(var i = 0; i< qualArr.length; i++){
                console.log(qualArr[i]);
            }
            
            console.log("vjrvlgkfg: - "+ $('#degId').prop("checked"));
        }else{
            console.log("please enter alteast 5 characters")
        }
    })

    
})