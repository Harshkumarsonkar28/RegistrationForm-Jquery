$(document).ready(function () {

  // only user enter 10 digit

  $("#phone").on('input',function(){
    let val = $(this).val().replace(/\D/g,"");
    if(val.length >10){
      val = val.slice(0,10);
    }
    $(this).val(val);
  })

  // password show /hide
$("#show-pwd").click(function(e){
  e.preventDefault()
$("#password").attr("type","text");
$("#show-pwd").hide();
$("#hide-pwd").show()
})
$("#hide-pwd").click(function(e){
  e.preventDefault()
$("#password").attr("type","password");
$("#hide-pwd").hide();
$("#show-pwd").show()
})
  
// confirm password show/hide
$("#conf-show-pwd").click(function(e){
  e.preventDefault()
$("#confpassword").attr("type","text");
$("#conf-show-pwd").hide();
$("#conf-hide-pwd").show()
})
$("#conf-hide-pwd").click(function(e){
  e.preventDefault()
$("#confpassword").attr("type","password");
$("#conf-hide-pwd").hide();
$("#conf-show-pwd").show()
})

  $("#submit").click(function (e) {
    e.preventDefault();
   
    let isvalid = true;

    // Email
    let email = $("#email").val().trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
      //for blank emailinput field
      $("#emailerror").text("Please Enter Email");
      isvalid = false;
    } else if (!emailPattern.test(email)) {
      //check the email is correct or not
      $("#emailerror").text("Please Enter Valid Email");
      isvalid = false;
    } else {
      $("#emailerror").text(""); //after all validation is correct error msg not show
    }

    //    Phone

    let phone = $("#phone").val().trim();

    if (phone === "") {
      //for blank phoneinput field
      $("#phoneerror").text("Please Enter Phone Number");
      isvalid = false;
    } else if (phone.length !== 10) {
      // check phone number length is 10
      $("#phoneerror").text("Please Enter 10 digit Number");
      isvalid = false;
    } else {
      $("#phoneerror").text(""); //after all validation is correct error msg not show
    }

    //  password

    let pwd = $("#password").val().trim();
    let minlength = 8;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(pwd);

    if (pwd === "") {
      //for blank passwordinput field
      $("#pwderror").text("Please Enter Password");
      isvalid = false;
    } else if (pwd.length < minlength) {
      // for password length must be minlength
      $("#pwderror").text(
        `Password must be at least ${minlength} characters long`
      );
      isvalid = false;
    } else if (!hasUppercase) {
      //for atleat one  uppercase
      $("#pwderror").text(
        "Password must contain at least one uppercase letter."
      );
      isvalid = false;
    } else if (!hasLowercase) {
      //for atleat one  lowercase
      $("#pwderror").text(
        "Password must contain at least one lowercase letter."
      );
      isvalid = false;
    } else if (!hasNumber) {
      //for atleat one number
      $("#pwderror").text("Password must contain at least one Number.");
      isvalid = false;
    } else if (!hasSpecialChar) {
      //for atleat one SpecialCharcter
      $("#pwderror").text(
        "Password must contain at least one SpecialCharacter."
      );
      isvalid = false;
    } else {
      ////after all validation is correct error msg not show
      $("#pwderror").text("");
    }

 

    // conmfirm password

    let confpassword = $("#confpassword").val().trim();

    if (confpassword === "") {
      $("#cnfpwderror").text("Please Enter Confirm Password");
      isvalid = false;
    } else if (confpassword !== pwd) {
      $("#cnfpwderror").text("Password and Confirm Password not matched");
      isvalid = false;
    } else {
      $("#cnfpwderror").text(""); //after all validation is correct error msg not show
    }

    if (isvalid) {
      $(".container").find("input").val(""); //after all validation is correct all input field is clear
      $("#success").text("Successfully Submitted");
    }

   
  });
});
