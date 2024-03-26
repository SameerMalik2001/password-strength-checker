let textToggle = false

$(document).ready(function () {
  gsap.from($(".nav")[0], {
    y: -100,
    duration: 0.5,
    ease: "power1.inOut",
    opacity: 0,
  });

  gsap.from($("#myForm")[0], {
    y: 300,
    duration: 1,
    ease: "power1.inOut",
    delay: 0.5,
    opacity: 0,
  });

  gsap.from($(".pvala")[0], {
    y: 300,
    duration: 1,
    ease: "power1.inOut",
    delay: 0.5,
    opacity: 0,
  });

  $('.eyeBox').on('click', ()=>{
    var Input = $('#myForm').serializeArray();
    let text = Input[1].value
    let password = Input[0].value

    if($('.opened').hasClass('hidden')) {
      $('.opened').removeClass('hidden');
      $('.closed').addClass('hidden');
      $('.textInput').addClass('hidden');
      $('.textInput').val("");
      $('.textInput1').removeClass('hidden');
      $('.textInput1').val(password)
      // console.log(password)
      textToggle = true
    } else {
      $('.opened').addClass('hidden');
      $('.closed').removeClass('hidden');
      $('.textInput').removeClass('hidden');
      $('.textInput1').addClass('hidden');
      $('.textInput1').val("");
      $('.textInput').val(text)
      // console.log(text)
      textToggle = false
    }

  })


  $("#myForm").on("submit", function (e) {
    e.preventDefault();
    var Input = $(this).serializeArray();
    let password;

    console.log(textToggle);
    if(textToggle) {
      password = Input[1].value
      $('#InputText').val(password)
      // Input = $(this).serializeArray();
    } else {
      password = Input[0].value
    }

    if (password.trim().length === 0) {
      alert("Please enter a valid password...");
    } else {
      Enzoic.applyToInputElement($("#InputText")[0]);
      // 0 - hacked, 1 - very weak, 2 - weak, 3 - medium, 4 - strong, 5 - very strong
      if (Enzoic.currentPasswordScore === 0) {
        $(".score").text("Hacked Password");
      } else if (Enzoic.currentPasswordScore === 1) {
        $(".score").text("Very Weak Password");
      } else if (Enzoic.currentPasswordScore === 2) {
        $(".score").text("Weak Password");
      } else if (Enzoic.currentPasswordScore === 3) {
        $(".score").text("Medium Password");
      } else if (Enzoic.currentPasswordScore === 4) {
        $(".score").text("Strong Password");
      } else if (Enzoic.currentPasswordScore === 5) {
        $(".score").text("Very Strong Password");
      }
    }
  });
});
