//autogenerate-password function calling and setting value to input fields
var autocreatedPassword = autoGeneratePassword();
$("#companyPassword").val(autocreatedPassword);
$("#confirmPassword").val(autocreatedPassword);
$("#companyPassword").attr("disabled", true);
$("#confirmPassword").attr("disabled", true);


//show hide functionality of password
$(document).on("click", "#passwordFunction", function(){
    var buttoneValue = Number($(this).val());
    if(buttoneValue){
        $(this).val("0");
        $(this).html(`<i id="iconView" class="fa fa-eye text-primary"></i>`);
        $("#companyPassword").attr("type", "password");
        $("#confirmPassword").attr("type", "password");
        $("#companyPassword").attr("disabled", true);
        $("#confirmPassword").attr("disabled", true);
    }else{
        $(this).val("1");
        $(this).html(`<i id="iconView" class="fa fa-eye-slash text-danger"></i>`);
        $("#companyPassword").attr("type", "text");
        $("#confirmPassword").attr("type", "text");
        $("#companyPassword").attr("disabled", false);
        $("#confirmPassword").attr("disabled", false);
    };
});


//form validations and creating company
$(document).on("click", "#creatCompany-btn", function(){
    var companyName = $("#companyName").val();
    var companyEmail = $("#companyEmail").val();
    var companyPassword = $("#companyPassword").val();
    var confirmPassword = $("#confirmPassword").val();
    var companySMSLimit = $("#companySMSLimit").val() == null ? 500 : $("#companySMSLimit").val();
    var companyCallService = $("#companyCallService").val() == "block" ? false : true;
    var companySMSService = $("#companySMSService").val() == "block" ? false : true;
    // inputs validation 
    if(companyName == ""){
        $("#createCompanyError").html("**Enter Company Name!");
        $("#companyName").addClass("border border-1 border-danger");
        $("#creatCompany-btn").attr("disabled", false);
    }else{
        $("#createCompanyError").html("");
        $("#companyName").removeClass("border border-1 border-danger");
        if(!isNaN(companyName)){
            $("#createCompanyError").html("**Invalid Company Name");
            $("#companyName").addClass("border border-1 border-danger");
            $("#creatCompany-btn").attr("disabled", false);
        }else{
            $("#createCompanyError").html("");
            $("#companyName").removeClass("border border-1 border-danger");
            if(companyName.length < 3){
                $("#createCompanyError").html("**Name of Company should be greater then 2!");
                $("#companyName").addClass("border border-1 border-danger");
                $("#creatCompany-btn").attr("disabled", false);
            }else{
                $("#createCompanyError").html("");
                $("#companyName").removeClass("border border-1 border-danger");
                if(companyName.length >= 50){
                    $("#createCompanyError").html("**Name of Company should be lesser than 50!");
                    $("#companyName").addClass("border border-1 border-danger");
                    $("#creatCompany-btn").attr("disabled", false);
                }else{
                    $("#createCompanyError").html("");
                    $("#companyName").removeClass("border border-1 border-danger");
                    if(companyEmail == ""){
                        $("#createCompanyError").html("**Enter Company Email!");
                        $("#companyEmail").addClass("border border-1 border-danger");
                        $("#creatCompany-btn").attr("disabled", false);
                    }else{
                        $("#createCompanyError").html("");
                        $("#companyEmail").removeClass("border border-1 border-danger");
                        if(companyEmail.indexOf('@') <= 0){
                            $("#createCompanyError").html("**Invalid '@' position!");
                            $("#companyEmail").addClass("border border-1 border-danger");
                            $("#creatCompany-btn").attr("disabled", false);
                        }else{
                            $("#createCompanyError").html("");
                            $("#companyEmail").removeClass("border border-1 border-danger");
                            if((companyEmail.charAt(companyEmail.length-4) != ".") && (companyEmail.charAt(companyEmail.length-3) != ".")){
                                $("#createCompanyError").html("**Invalid Email!");
                                $("#companyEmail").addClass("border border-1 border-danger");
                                $("#creatCompany-btn").attr("disabled", false);
                            }else{
                                $("#createCompanyError").html("");
                                $("#companyEmail").removeClass("border border-1 border-danger");
                                if(companyPassword == ""){
                                    $("#createCompanyError").html("**Enter Password!");
                                    $("#companyPassword").addClass("border border-1 border-danger");
                                    $("#creatCompany-btn").attr("disabled", false);
                                }else{
                                    $("#createCompanyError").html("");
                                    $("#companyPassword").removeClass("border border-1 border-danger");
                                    if(companyPassword == confirmPassword){
                                        $("#companyPassword").removeClass("border border-1 border-danger");
                                        $("#confirmPassword").removeClass("border border-1 border-danger");
                                        //ajax will goes here
                                        $.ajax({
                                            "url" : "/admin-ajax/create-company/",
                                            "method" : "POST",
                                            "headers" : {
                                                "Content-Type" : "application/json",
                                            },
                                            "data" :  JSON.stringify({
                                                "companyName" : companyName,
                                                "companyEmail" : companyEmail,
                                                "companyPassword" : companyPassword,
                                                "companySMSLimit" : companySMSLimit,
                                                "companyCallService" : companyCallService,
                                                "companySMSService" :  companySMSService,
                                            }),
                                            "success" :  function(response){
                                                console.log(response);
                                                if(response.success){
                                                    Swal.fire({
                                                        title: "Success",
                                                        text: "Company created successfully",
                                                        icon: "success",
                                                        confirmButtonColor: "#5156be",
                                                    }).then(function(e) {
                                                       location.reload();
                                                    });
                                                }else{
                                                    Swal.fire({
                                                        title: "Error",
                                                        text: "Failed to create the company",
                                                        icon: "error",
                                                        confirmButtonColor: "red",
                                                    });
                                                };
                                            },
                                        });
                                    }else{
                                        $("#createCompanyError").html("**Password and Confirm-Password are mismatched!");
                                        $("#companyPassword").addClass("border border-1 border-danger");
                                        $("#confirmPassword").addClass("border border-1 border-danger");
                                        $("#creatCompany-btn").attr("disabled", false);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
});


//create company btn functionality
// $(document).on("click", ".createCompanyBtn", function(){
//     console.log("I am create company");

// });