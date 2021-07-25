let scrollToSpeed = 1500;
let previousLayer = 0;
let currentLayer = 0;

let scroller = {
    origin: {
        id: 0,
        name: `home`,
    },
    destination: {
        id: 0,
        name: `home`,
    },
    speed: 0,
    distance: 0,
    direction: `up`,
    opposite: `down`,
}

// window.onbeforeunload = function () {
//     window.scrollTo(0, 1);
// }


function setClicks() {
    for (let i in layers) {
        let cLayers = layers[i];
        $(`#nav-${cLayers.label}, #gauge-${cLayers.label}`).click(function () {
            SearchForDestination: {
                for (let i in layers) {
                    let destRegEx = new RegExp(`\\w-${cLayers.label}`);
                    if (destRegEx.test(`${this.id}`)) {
                        scroller.destination.id = cLayers.id;
                        scroller.destination.name = cLayers.name;
                        break SearchForDestination;
                    }
                }
            }
            scrollToLayer();
        });
    }
}

function scrollToLayer() {
    console.log(`scrollToLayer()`);
    scroller.distance = parseInt(scroller.origin.id) - parseInt(scroller.destination.id);
    scroller.direction = (scroller.distance < 0) ? `down` : `up`;
    scroller.opposite = (scroller.distance < 0) ? `up` : `down`;
    scroller.distance = Math.abs(parseInt(scroller.distance));

    let interval = (1750 - (parseInt(scroller.distance) * 100))
    scroller.speed = parseInt(scroller.distance) * interval;

    console.log(`---scroller.origin.id = ${scroller.origin.id}`);
    console.log(`---scroller.distance = ${scroller.distance}`);
    console.log(`---scroller.direction = ${scroller.direction}`);
    console.log(`---scroller.opposite = ${scroller.opposite}`);
    console.log(`---scroller.speed = ${scroller.speed}`);
    moveSubmaboat();
    // detectOrigin();
    $(`html,body`).stop().animate({
        scrollTop: $(`#${scroller.destination.name}-layer`).offset().top
    }, scroller.speed, `swing`, function () {
        levelSubmaboat()
    });
    scroller.origin.id = parseInt(scroller.destination.id);
    scroller.origin.name = String(scroller.destination.name);

}

function moveSubmaboat() {
    if (scroller.origin.id === 0) {
        $(`#submaboat`).attr(`class`, `submaboat-submerging`);
    } else if (scroller.destination.id === 0) {
        $(`#submaboat`).attr(`class`, `submaboat-surfacing`);
    } else {
        $(`#submaboat`).attr(`class`, `submaboat-go-${scroller.direction}`);
    }
    // setTimeout(() => {
    //     levelSubmaboat();
    // }, scroller.speed -500);
}

let originInterval;
let originCount = 0;
function detectOrigin() {
    originInterval = setInterval(()=>{
        if (originCount<=(scroller.speed/10)) {
            originCount++;
            // let destName = String(scroller.destination.name);
            // console.log(`#${destName}-layer`); 
            // let loca = document.getElementById(`${destName}-layer`).getBoundingClientRect();
            // console.log(`loca.top = ${loca.top}`); 

        }else{
            originCount = 0;
            console.log(`Count stop`); 
            clearInterval(originInterval)
        }
    },10);
}

function levelSubmaboat() {
    if (scroller.destination.id === 0) {
        $(`#submaboat`).attr(`class`, `submaboat-docked`);
    } else {
        $(`#submaboat`).attr(`class`, `submaboat-underwater`);
    }
}

setClicks();