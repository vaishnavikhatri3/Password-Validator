var lockIcon = document.querySelector(".fa-lock");
        var inner = document.querySelector(".inner");
        var password = document.querySelector("#myPass");
        var state = false;
        let text,validIcons,invalidIcons;

        function toggle(){
            myFunction();
            if(state){
                function displayPass(){
                    document.getElementById("myPass").
                    setAttribute("type","password");
                }
                setTimeout(displayPass,80);
               
                lockIcon.classList.remove("color-change");
                inner.classList.remove("inner-hover");
                state = false;
            }
            else{
                function displayText(){
                    document.getElementById("myPass").
                    setAttribute("type","text");
                }
                setTimeout(displayText,80);

                lockIcon.classList.add("color-change");
                inner.classList.add("inner-hover");
                state = true;
            }
        }

function myFunction(){
  var eye = document.querySelector(".eye-close");
  imgsrc = document.getElementById("img1").src;
  if(imgsrc.indexOf("eye-close")!= -1){
    eye.classList.add('eye-open');
    document.getElementById("img1").src="https://i.postimg.cc/3JHFrZ3v/eye-open.png";
  }else{
    eye.classList.remove('eye-open');
    document.getElementById("img1").src = "https://i.postimg.cc/HWMtCN1m/eye-close.png";
  }
}

        function valid(item , validIcon , invalidIcon){
            text = document.querySelector(`#${item}`);
            text.style.opacity = "1";
            validIcons = document.querySelector(`#${item} .${validIcon}`);
            validIcons.style.opacity='1';
            invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
            invalidIcons.style.opacity="0";
        }

        function invalid(item , validIcon , invalidIcon){
            text = document.querySelector(`#${item}`);
            text.style.opacity = "0.5";
            validIcons = document.querySelector(`#${item} .${validIcon}`);
            validIcons.style.opacity='0';
            invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
            invalidIcons.style.opacity="1";
        }

        
        function textChange() {
            let isUpperCase = password.value.match(/[A-Z]/) != null;
            let isNumber = password.value.match(/[0-9]/) != null;
            let isSpecialChar = password.value.match(/[!@#$%^&*]/) != null;
            let isLengthValid = password.value.length >= 8;
            
            if (isUpperCase) valid('capital', 'fa-check', 'fa-times');
            else invalid('capital', 'fa-check', 'fa-times');
        
            if (isNumber) valid('number', 'fa-check', 'fa-times');
            else invalid('number', 'fa-check', 'fa-times');
        
            if (isSpecialChar) valid('special-char', 'fa-check', 'fa-times');
            else invalid('special-char', 'fa-check', 'fa-times');
        
            if (isLengthValid) valid('more-than-8', 'fa-check', 'fa-times');
            else invalid('more-than-8', 'fa-check', 'fa-times');
        
            // Check if all conditions are met
            let statusText = document.getElementById("password-status");
            if (isUpperCase && isNumber && isSpecialChar && isLengthValid) {
                statusText.innerText = "Strong Password 💪";
                statusText.style.color = "green";
            } else {
                statusText.innerText = "Weak Password ❌";
                statusText.style.color = "red";
            }
        }
        