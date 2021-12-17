const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

// Preload images
// const preloadImages = (selector = 'img') => {
//     return new Promise((resolve) => {
//         imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
//     });
// };


// Gets the Screen size
const ScreenCheck = (mediasize) => {
    if (typeof window.matchMedia !== "undefined"){ 
        var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
        if( screensize.matches ) {
            return true;
        } else {
            return false; 
        }
    } 
};




export {
    ScreenCheck,
    getMousePos,
    //preloadImages,
    lerp,
    clamp,
    map
};