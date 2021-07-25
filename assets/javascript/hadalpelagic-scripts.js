function buildHadalpelagic() {
    $(`#hadalpelagic-layer`).append(`<div id="hadalpelagic-trenches"></div>`)
    for (let i = 1; i <= 7; i++) {
        $(`#hadalpelagic-trenches`).append(`<img id="hadalpelagic-trench-${i}">`);
        $(`#hadalpelagic-trench-${i}`).attr(`class`,`hadalpelagic-trench`);
        $(`#hadalpelagic-trench-${i}`).attr(`src`,`assets/images/trenches/trench_${i}.png`);
    }
}


console.log(`hadalpelagic-scripts.js Loaded`); 
buildHadalpelagic();