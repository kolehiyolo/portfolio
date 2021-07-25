let layers = {
    troposphere: {
        id: 0,
        name: `troposphere`,
        label: `home`,
        description: `Home`,
        top: 0,
        bottom: 0,
    },
    epipelagic: {
        id: 1,
        name: `epipelagic`,
        label: `about`,
        description: `Who I am`,
        top: 0,
        bottom: 0,
    },
    mesopelagic: {
        id: 2,
        name: `mesopelagic`,
        label: `experience`,
        description: `Where I've Worked`,
        top: 0,
        bottom: 0,
    },
    bathypelagic: {
        id: 3,
        name: `bathypelagic`,
        label: `projects`,
        description: `What I've Built`,
        top: 0,
        bottom: 0,
    },
    abyssopelagic: {
        id: 4,
        name: `abyssopelagic`,
        label: `education`,
        description: `What I've Learned`,
        top: 0,
        bottom: 0,
    },
    hadalpelagic: {
        id: 5,
        name: `hadalpelagic`,
        label: `contact`,
        // description: `Contact Me`,
        description: `How to Contact Me`,
        top: 0,
        bottom: 0,
    },
}

function buildLayers() {
    for (let i in layers) {
        let cLayer = layers[i];
        $(`main`).append(`<section id="${cLayer.name}-layer"></section>`);
        $(`#${cLayer.name}-layer`).attr(`class`, `layers`);
        $(`#${cLayer.name}-layer`).addClass(`${cLayer.name}-gradient`);

        $(`#${cLayer.name}-layer`).append(`<div id="${cLayer.name}-box"></div>`);
        $(`#${cLayer.name}-box`).attr(`class`, `layer-box`);
        $(`#${cLayer.name}-box`).append(`<div id="${cLayer.name}-box-background"></div>`);
        $(`#${cLayer.name}-box-background`).attr(`class`, `layer-box-background`);
        
        $(`#${cLayer.name}-box`).append(`<div id="${cLayer.name}-content"></div>`);
        $(`#${cLayer.name}-content`).attr(`class`, `layer-content`);
        $(`#${cLayer.name}-content`).append(`<div id="${cLayer.name}-header"></div>`);
        $(`#${cLayer.name}-header`).attr(`class`, `layer-header`);

        $(`#${cLayer.name}-header`).append(`<h2 id="${cLayer.name}-header-title"></h2>`);
        $(`#${cLayer.name}-header-title`).attr(`class`,`layer-header-title`);
        $(`#${cLayer.name}-header-title`).html(`${cLayer.description}`);

        $(`#${cLayer.name}-header`).append(`<div id="${cLayer.name}-header-hr"></div>`);
        $(`#${cLayer.name}-header-hr`).attr(`class`,`layer-header-hr`);

        $(`#${cLayer.name}-content`).append(`<div id="${cLayer.name}-body"></div>`);
        $(`#${cLayer.name}-body`).attr(`class`, `layer-body`);
    }
    $(`#troposphere-box`).remove();
}

function setLayerDimension() {
    for (let i in layers) {
        let cLayer = layers[i];
        let layerBound = document.getElementById(`${cLayer.name}-layer`).getBoundingClientRect();
        cLayer.top = layerBound.top;
        cLayer.bottom = layerBound.bottom;
        console.log(`${cLayer.name} = [top: ${cLayer.top}, bottom: ${cLayer.bottom}]`);
    }
}

// $(window).resize(function () {
//     console.log(`Dimensions updated`);
//     setLayerDimension();
// });

buildLayers();
setLayerDimension();