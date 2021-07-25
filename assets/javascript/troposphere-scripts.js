function buildTroposphere() {
    $(`#troposphere-layer`).append(`<div id="troposphere-objects"></div>`);
    imageBuilder(`island`, `troposphere-objects`, `troposphere`);
    imageBuilder(`cloud1`, `troposphere-objects`, `troposphere`);
    imageBuilder(`cloud2`, `troposphere-objects`, `troposphere`);

    $(`#troposphere-layer`).append(`<div id="troposphere-header"></div>`)
    $(`#troposphere-header`).append(`<h1 id="troposphere-intro-1"></h1>`)
    $(`#troposphere-header`).append(`<h2 id="troposphere-intro-2"></h2>`)
    $(`#troposphere-header h1, #troposphere-header h2`).addClass(`troposphere-header-elements`);
    $(`#troposphere-intro-1`).html(`Hi, I'm Tristan`);
    // $(`#troposphere-intro-2`).html(`just a creative`);
    $(`#troposphere-intro-2`).html(`and this page is still a work-in-progress`);
}

buildTroposphere();