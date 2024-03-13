var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for( var i = 0 ; i < numberOfDrumButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

    function makeSound(key){
        switch(key){
            case "w":
                var beats = new Audio("sounds/crash.mp3");
                beats.play();
                break;
            case "a":
                var beats = new Audio("sounds/kick-bass.mp3");
                beats.play();
                break;
            case "s":
                var beats = new Audio("sounds/snare.mp3");
                beats.play();
                break;
            case "d":
                var beats = new Audio("sounds/tom-1.mp3");
                beats.play();
                break;
            case "j":
                var beats = new Audio("sounds/tom-2.mp3");
                beats.play();
                break;
            case "k":
                var beats = new Audio("sounds/tom-3.mp3");
                beats.play();
                break;
            case "l":
                var beats = new Audio("sounds/tom-4.mp3");
                beats.play();
                break;

                default: console.log(buttonInnerHtml);

        }
       
    }
    


