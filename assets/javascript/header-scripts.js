function buildHeader() {
    // We first add the Navbar
    $(`header`).append(`<nav id="header-navbar"></nav>`)
    $(`#header-navbar`).append(`<a id="nav-resume" class="nav-links" target="_blank"></a>`)
    $(`#nav-resume`).append(`<button>Résumé</button>`);
    for (let i in layers) {
        let cLayer = layers[i];
        $(`#header-navbar`).append(`<a id="nav-${cLayer.label}" class="nav-links"></a>`)
        $(`#nav-${cLayer.label}`).append(`${cLayer.label}`);
    }
    $(`#nav-home`).remove();

    // We then add the Sidebar
    // -- First we add the Anima Button
    $(`header`).append(`<nav id="header-sidebar"></nav>`);
    $(`#header-sidebar`).append(`<div id="anima-button"></div>`);
    $(`#anima-button`).append(`<a id="nav-home"></a>`);
    imageBuilder(`anima`, `nav-home`);
    // -- Now we add the Gaugebar
    $(`#header-sidebar`).append(`<div id="gauge-bar"></div>`);
    for (let i in layers) {
        let cLayer = layers[i];
        $(`#gauge-bar`).append(`<a id="gauge-${cLayer.label}" class="gauge-links"></a>`)
        $(`#gauge-${layers[i].label}`).addClass(`${layers[i].name}-gradient`);
    }
    $(`#gauge-home`).remove();

}

let images = {
    anima: {
        name: `anima`,
        id: `anima-profile`,
        class: ``,
        link: `assets/images/anima_profile.png`,
    },
    troposphere: {
        island: {
            name: `island`,
            id: `troposphere-island`,
            class: `troposphere-object`,
            link: `assets/images/reverse-island.png`,
        },
        cloud1: {
            name: `cloud-1`,
            id: `troposphere-cloud-1`,
            class: `troposphere-object troposphere-cloud`,
            link: `assets/images/cloud_1.png`,
        },
        cloud2: {
            name: `cloud-2`,
            id: `troposphere-cloud-2`,
            class: `troposphere-object troposphere-cloud`,
            link: `assets/images/cloud_2.png`,
        },
    },
}

function imageBuilder(image, location, layer) {
    if (layer === undefined) {
        $(`#${location}`).append(`<img id="${images[image].id}">`);
        $(`#${images[image].id}`).attr(`src`, `${images[image].link}`);
        $(`#${images[image].id}`).attr(`alt`, `${images[image].id}-img`);
    }
    else {
        $(`#${location}`).append(`<img id="${images[layer][image].id}">`);
        $(`#${images[layer][image].id}`).attr(`class`, `${images[layer][image].class}`);
        $(`#${images[layer][image].id}`).attr(`src`, `${images[layer][image].link}`);
        $(`#${images[layer][image].id}`).attr(`alt`, `${images[layer][image].id}-img`);
    }
}

buildHeader();