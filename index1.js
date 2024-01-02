var numberofbuttons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",sound);
function sound(){
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
   
}
}
document.addEventListener("keypress",function(event){
makesound(event.key);
buttonanimation(event.key);
}
)

function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
            case "s":
             var tom2=new Audio("tom-2.mp3");
            tom2.play();
             break;

                case "a":
                    var tom3=new Audio("tom-3.mp3");
                    tom3.play();
                    break;

                    case "d":
                        var tom4=new Audio("tom-4.mp3");
                        tom4.play();
                        break;

                        case "j":
                            var tom5=new Audio("crash.mp3");
                            tom5.play();
                            break;

                            case "k":
                                var tom6=new Audio("snare.mp3");
                                tom6.play();
                                break;

                                case "l":
                                    var tom7=new Audio("kick-bass.mp3");
                                    tom7.play();
                                    break;
                                    default:console.log(buttoninnerhtml);
 }
}
function buttonanimation(currentkey){
          var activebutton=document.querySelector("."+currentkey);
          activebutton.classList.add("pressed");
          setTimeout(function(){
            activebutton.classList.remove("pressed");
          },100)
}