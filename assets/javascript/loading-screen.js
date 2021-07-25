$(`#header-navbar`).addClass(`hide-navbar`);
$(`.gauge-links`).addClass(`hide-gaugelinks`);
$(`#gauge-bar`).addClass(`hide-gaugebar`);
$(`#surface-objects`).addClass(`hide-surface-objects`);

setTimeout(()=>{
    $(`#header-navbar`).addClass(`anim-1000`);
    $(`#gauge-bar`).addClass(`anim-1000`);
    $(`.gauge-links`).addClass(`anim-1000`);
    $(`#surface-objects`).addClass(`anim-5000`);
},1);

setTimeout(()=>{
    $(`#surface-objects`).removeClass(`hide-surface-objects`);
    $(`#header-navbar`).removeClass(`hide-navbar`);
    $(`.gauge-links`).removeClass(`hide-gaugelinks`);
    $(`#gauge-bar`).removeClass(`hide-gaugebar`);
},2000);
