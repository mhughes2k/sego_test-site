function myFunctionA(event) {

    event.preventDefault();
    console.log(event);

    document.getElementById('form').style.display ='none';
    document.getElementById('wrap').style.display = 'block';
}
function myFunction(showStuff) {
    showStuff.preventDefault();
    // This works but shows all the images

        // let divs = document.getElementById('wrap');

        // if (persona.value == 'introvert') {
        //     divs.style.display = 'block';


    // This doesn't work and should show only product_img_2 and hide product_img_3 when introvert is chosen
    document.getElementById('form').style.display ='none';
    
    let dogs = document.querySelectorAll('.product_grid');
    dogs.forEach(e => {e.style.display ='none'});
    
    if (personalbar.value != "indifferent") {
        let divs = document.querySelectorAll("[data-personality='" + persona.value + "']");
        console.log("[data-personality='" + persona.value + "']");
        divs.forEach(div => {
            div.style.display = 'block';
        })
    }
    
            
}
