//initializing number array as a variable
var numbersArray = [];

//functionality to perform on clicking Buy Number Btn and Clear Data
function resetModalBox(){
    numbersArray=[];
    $("#usersNumber").attr("disabled", false);
    $("#selectedCountry").attr("disabled", false);
    $("#voiceFeature").attr("checked", false);
    $("#smsFeature").attr("checked", false);
    $("#mmsFeature").attr("checked", false);
    $("#voiceFeature").attr("disabled", true);
    $("#smsFeature").attr("disabled", true);
    $("#mmsFeature").attr("disabled", true);
    $(".searchNumberSpinner").hide();
    $(".searchNumberMessage").html("");
    $("#usersNumber").val("1");
    $("#selectedCountry").val("--Select Your Country--");
    $("#purchaseBtn").css("display", "none");
    $("#searchNumberBtn").attr("disabled", true);
    $("#clearNumberDataBtn").attr("disabled", true);
    $("#buyNumberModelBox").modal("show");
    $("#buyNumberModelBox").modal({backdrop: "static", keyboard: false});
};

//reset or clear modal box
$(document).on("click", ".buyNumberModalBoxBtn", function(){
    resetModalBox();
});
$(document).on("click", "#clearNumberDataBtn", function(){
    resetModalBox();
});

//select users to buy number validation
$(document).on("keyup", "#usersNumber", function(){
    var noOfUsers = Number($(this).val());
    // console.log(noOfUsers, typeof noOfUsers);
    if(String(noOfUsers).charAt(0) == 0){
        $(this).val("");
    }else{
        if(isNaN(noOfUsers)){
            $(this).addClass("border border-1 border-danger");
        }else{
            if(noOfUsers > 10){
                $(this).val(10);
            }else{
                //further code goes here
            };
        };
    };
});

//selecting options for a number
$(document).on("change", "#selectedCountry", function(){
    //getting required values
    $("#searchNumberBtn").attr("disabled", false);
    $("#clearNumberDataBtn").attr("disabled", false);
    var countrySMSFeature = $("#selectedCountry").find(":selected").attr("data-smsFeature");
    var countryVoiceFeature = $("#selectedCountry").find(":selected").attr("data-voiceFeature");
    var countryMMSFeature = $("#selectedCountry").find(":selected").attr("data-mmsFeature");
    //checking checkbox on the behalf of country selection
    countrySMSFeature == "true" ? $("#smsFeature").attr("checked", true) : $("#smsFeature").attr("checked", false);
    countryVoiceFeature == "true" ? $("#voiceFeature").attr("checked", true) : $("#voiceFeature").attr("checked", false);
    countryMMSFeature == "true" ? $("#mmsFeature").attr("checked", true) : $("#mmsFeature").attr("checked", false);
    //disabling and enabeling the checkboxes
    countrySMSFeature == "true" ? $("#smsFeature").attr("disabled", false) : $("#smsFeature").attr("disabled", true);
    countryVoiceFeature == "true" ? $("#voiceFeature").attr("disabled", false) : $("#voiceFeature").attr("disabled", true);
    countryMMSFeature == "true" ? $("#mmsFeature").attr("disabled", false) : $("#mmsFeature").attr("disabled", true);
});

//search-number
$(document).on("click", "#searchNumberBtn", function(){
    // setting up the values for the url
    $("#searchNumberBtn").attr("disabled", true);
    const limit = ((($("#usersNumber").val()) == 0) || (($("#usersNumber").val()) == "")) ? 1 : $("#usersNumber").val();
    const country = $("#selectedCountry").val();
    var smsFeature = $("#smsFeature").is(":checked") ? "&features=sms" : "";
    var voiceFeature = $("#voiceFeature").is(":checked") ? "&features=voice" : "";
    var mmsFeature = $("#mmsFeature").is(":checked") ? "&features=mms" : "";
    $("#voiceFeature").attr("disabled", true);
    $("#smsFeature").attr("disabled", true);
    $("#mmsFeature").attr("disabled", true);
    $("#clearNumberDataBtn").attr("disabled", true);
    const messageCountries = ["US", "CA", "AU", "NL"].includes(country);
    const numberType = "type=mobile";
    var searchNumberApiUrl = messageCountries ? 
        `https://numbers.messagebird.com/v1/available-phone-numbers/${country}?${numberType}&limit=${limit}${smsFeature}${voiceFeature}${mmsFeature}`
        : 
        `https://numbers.messagebird.com/v1/available-phone-numbers/${country}?${numberType}&limit=${limit}`;
    // console.log(searchNumberApiUrl);
    $(".searchNumberSpinner").show();
    $("#usersNumber").attr("disabled", true);
    $("#selectedCountry").attr("disabled", true);
    $(".searchNumberMessage").html("");
    $.ajax({
        "url" : "/admin-ajax/search-number/",
        "method" : "POST",
        "headers" : {
            "Content-Type" :  "application/json",
        },
        "data" : JSON.stringify({
            "url" :searchNumberApiUrl
        }),
        "success" : (response)=>{
            if(response.success){
                console.log("Numbers Are Ready To Purchase");
                console.log(response.message)
                numbersArray = response.message;
                if(numbersArray.length > 0){
                    console.log(numbersArray);
                    $(".searchNumberSpinner").hide();
                    $("#purchaseBtn").css("display", "block");
                    $("#clearNumberDataBtn").attr("disabled", false);
                    $("#searchNumberBtn").attr("disabled", true);
                    $(".searchNumberMessage").removeClass("text-danger");
                    $(".searchNumberMessage").addClass("text-success");
                    $(".searchNumberMessage").html(`**${numbersArray.length} Numbers are found and ready to purchase.**`);
                }else{
                    console.log(numbersArray);
                    $(".searchNumberSpinner").hide();
                    $("#purchaseBtn").attr("display", "none");
                    $("#clearNumberDataBtn").attr("disabled", false);
                    $("#searchNumberBtn").attr("disabled", false);
                    $(".searchNumberMessage").removeClass("text-success");
                    $(".searchNumberMessage").addClass("text-danger");
                    $(".searchNumberMessage").html(`**No numebr found against the country you selected.**`);
                    $("#usersNumber").attr("disabled", false);
                    $("#selectedCountry").attr("disabled", false);
                }
            }else{
                Swal.fire({
                    title: "Error",
                    text: "An unexpected error occured",
                    icon: "error",
                    confirmButtonColor: "#F27474"
                });
                $("#buyNumberModelBox").modal("hide");
            }
        }
    });
});

//buy numbers
$(document).on("click", "#purchaseBtn", ()=>{
    $("#clearNumberDataBtn").attr("disabled", true);
    console.log(numbersArray.length);
    $("#loaderSpan").html(`            
        <div class="spinner-border text-info buyNumberLoader"  role="status"></div> 
    `);
    $.ajax({
        "url" : "/admin-ajax/buy-number/",
        "method" : "POST",
        "headers" : {
            "Content-Type" :  "application/json",
        },
        "data" : JSON.stringify({
            "numbersArray" :  numbersArray,                            
        }),
        "success" : (response)=>{
            if(response.success){
                $("#loaderSpan").html(`            
                    <i class="fas fa-check" style="font-size: 15px;"></i> 
                `)
                console.log(response.message);
                Swal.fire({
                    title: "Success",
                    text: `${numbersArray.length} numbers are buyed successfully!`,
                    icon: "success",
                    confirmButtonColor: "#5156be"
                }).then(function(e) {
                    location.reload();
                });
            }else{
                Swal.fire({
                    title: "Error",
                    text: "An unexpected error occured",
                    icon: "error",
                    confirmButtonColor: "#F27474"
                });
                $("#buyNumberModelBox").modal("hide");
            };
        },
    });
});

//configure the number 
$(document).on("click", "#configureNumber", function(){
    $("#configureNumberModalBox").modal("show");
});

$(document).on("click", "#stepOneNext", function(){
    var smsService = $("input[name=sms]:checked").val();
    var mmsService = $("input[name=mms]:checked").val();
    var callService = $("input[name=call]:checked").val();
    
    console.log(smsService);
    console.log(mmsService);
    console.log(callService);
});

$(document).on("click", "#stepTwoNext", function(){
   console.log("I am step two next");
});

$(document).on("click", "#stepOnePrevious", function(){
    console.log("I am step one previous");
 });