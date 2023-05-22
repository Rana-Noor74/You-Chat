//make input fields editable
$(document).on("click", "#editCompany-btn", function(){
    $("#updateCompanyName").attr("disabled", false);
    $("#updateCompanyEmail").attr("disabled", false);
    $("#updateCompanyPassword").attr("disabled", false);
    $("#updateCompanySMSLimit").attr("disabled", false);
    $("#updateCompanyCallService").attr("disabled", false);
    $("#updateCompanySMSService").attr("disabled", false);
    // hiding and showing of buttons
    $(this).addClass("d-none");
    $("#updateCompany-btn").removeClass("d-none");
});

//form validations and creating company
$(document).on("click", "#updateCompany-btn", function(){
    var updateCompanyName = $("#updateCompanyName").val();
    var updateCompanyEmail = $("#updateCompanyEmail").val();
    var updateCompanyPassword = $("#updateCompanyPassword").val();
    var updateCompanySMSLimit = $("#updateCompanySMSLimit").val();
    var updateCompanyCallService = $("#updateCompanyCallService").val() == "block" ? false : true;
    var updateCompanySMSService = $("#updateCompanySMSService").val() == "block" ? false : true;
    // inputs validation 
    if(updateCompanyName == ""){
        $("#updateCompanyError").html("**Enter Company Name!");
        $("#updateCompanyName").addClass("border border-1 border-danger");
        $("#updateCompany-btn").attr("disabled", false);
    }else{
        $("#updateCompanyError").html("");
        $("#updateCompanyName").removeClass("border border-1 border-danger");
        if(!isNaN(updateCompanyName)){
            $("#updateCompanyError").html("**Invalid Company Name");
            $("#updateCompanyName").addClass("border border-1 border-danger");
            $("#updateCompany-btn").attr("disabled", false);
        }else{
            $("#updateCompanyError").html("");
            $("#updateCompanyName").removeClass("border border-1 border-danger");
            if(updateCompanyName.length < 3){
                $("#updateCompanyError").html("**Name of Company should be greater then 2!");
                $("#updateCompanyName").addClass("border border-1 border-danger");
                $("#updateCompany-btn").attr("disabled", false);
            }else{
                $("#updateCompanyError").html("");
                $("#updateCompanyName").removeClass("border border-1 border-danger");
                if(updateCompanyName.length >= 50){
                    $("#updateCompanyError").html("**Name of Company should be lesser than 50!");
                    $("#updateCompanyName").addClass("border border-1 border-danger");
                    $("#updateCompany-btn").attr("disabled", false);
                }else{
                    $("#updateCompanyError").html("");
                    $("#updateCompanyName").removeClass("border border-1 border-danger");
                    if(updateCompanyEmail == ""){
                        $("#updateCompanyError").html("**Enter Company Email!");
                        $("#updateCompanyEmail").addClass("border border-1 border-danger");
                        $("#updateCompany-btn").attr("disabled", false);
                    }else{
                        $("#updateCompanyError").html("");
                        $("#updateCompanyEmail").removeClass("border border-1 border-danger");
                        if(updateCompanyEmail.indexOf('@') <= 0){
                            $("#updateCompanyError").html("**Invalid '@' position!");
                            $("#updateCompanyEmail").addClass("border border-1 border-danger");
                            $("#updateCompany-btn").attr("disabled", false);
                        }else{
                            $("#updateCompanyError").html("");
                            $("#updateCompanyEmail").removeClass("border border-1 border-danger");
                            if((updateCompanyEmail.charAt(updateCompanyEmail.length-4) != ".") && (updateCompanyEmail.charAt(updateCompanyEmail.length-3) != ".")){
                                $("#updateCompanyError").html("**Invalid Email!");
                                $("#updateCompanyEmail").addClass("border border-1 border-danger");
                                $("#updateCompany-btn").attr("disabled", false);
                            }else{
                                $("#updateCompanyError").html("");
                                $("#updateCompanyEmail").removeClass("border border-1 border-danger");
                                if(updateCompanyPassword == ""){
                                    $("#updateCompanyError").html("**Enter Password!");
                                    $("#updateCompanyPassword").addClass("border border-1 border-danger");
                                    $("#updateCompany-btn").attr("disabled", false);
                                }else{
                                    $("#updateCompanyError").html("");
                                    $("#updateCompanyPassword").removeClass("border border-1 border-danger");
                                    //ajax will goes here
                                    $.ajax({
                                        "url" : "/admin-ajax/update-company/",
                                        "method" : "POST",
                                        "headers" : {
                                            "Content-Type" : "application/json",
                                        },
                                        "data" :  JSON.stringify({
                                            "newCompanyName" : updateCompanyName,
                                            "newCompanyEmail" : updateCompanyEmail,
                                            "newCompanyPassword" : updateCompanyPassword,
                                            "newCompanySMSLimit" : updateCompanySMSLimit,
                                            "newCompanyCallService" : updateCompanyCallService,
                                            "newCompanySMSService" :  updateCompanySMSService,
                                        }),
                                        "success" :  function(response){
                                            console.log(response);
                                            if(response.success){
                                                Swal.fire({
                                                    title: "Success",
                                                    text: "Company Updated successfully",
                                                    icon: "success",
                                                    confirmButtonColor: "#5156be",
                                                });
                                            }else{
                                                Swal.fire({
                                                    title: "Error",
                                                    text: "Failed to update the company",
                                                    icon: "error",
                                                    confirmButtonColor: "red",
                                                });
                                            };
                                        },
                                    });
                                };
                            };
                        };
                    };
                };
            };
        };
    };
});
