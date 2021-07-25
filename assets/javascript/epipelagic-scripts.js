function buildEpipelagic() {
    let epipelagicString = ``;
    for (let i =1;i<=5;i++) {
        epipelagicString = epipelagicString + `<p>${epipelagicText[`p${i}`]}</p>`;
    }
    $(`#epipelagic-body`).append(`<div id="epipelagic-text"></div>`);
    $(`#epipelagic-text`).append(`${epipelagicString}`);

    $(`#epipelagic-body`).append(`<div id="epipelagic-img-div"></div>`);
    $(`#epipelagic-img-div`).append(`<img id="epipelagic-img">`);
    $(`#epipelagic-img`).attr(`src`,`assets/images/real_profile_grayscaled.png`);
    $(`#epipelagic-img-div`).append(`<div id="epipelagic-img-filter"></div>`);
    $(`#epipelagic-img-div`).append(`<div id="epipelagic-img-shadow"></div>`);
    
    let epipelagicImgCaption = `I hope to present myself as candidly as possible through this project while, at the same time, inspiring those following the same path.`;

    $(`#epipelagic-body`).append(`<p id="epipelagic-img-caption"></p>`);
    $(`#epipelagic-img-caption`).html(`${epipelagicImgCaption}`);
    $(`#epipelagic-body`).append(`<button id="epipelagic-button"></button>`);
    $(`#epipelagic-button`).html(`Get to know me better`);
    $(`#epipelagic-button`).attr(`type`,`button`);
}

let epipelagicText = {
    p1: `Good day! I am a problem-solver by heart who's very willing to learn, learn fast, and let others learn from me.`,
    p2: `Professionally, I have been working as a Customer Service Specialist for the past 2 years, providing support to clients when faced with technically challenging obstacles that range from ordering floral deliveries to multi-faceted SaaS products used by SMBs and enterprise-scale businesses.`,
    p3: `In my leisure, however, I choose to spend my energy and time in creative pursuits such as Music Production and Digital Design, which inevitably led me to exploring the fascinating world of Web Development.`,
    p4: `I've always had a deep passion and curiosity for modern technology (reflected by my choices of College Education), which is why I spent the past few months furthering my knowledge in the field to the point where I can now showcase my skills through this portfolio!`,
    p5: `So please, enjoy my work!`,
    p0: `Professionally, I have been working as a Customer Service Specialist for the past 2 years, providing support to clients when faced with technically challenging obstacles that range from ordering floral deliveries to multi-faceted SaaS products used by SMBs and enterprise-scale businesses.
    
    In my leisure, however, I choose to spend my energy and time in creative pursuits such as Music Production and Digital Design, which inevitably led me to exploring the fascinating world of Web Development. 
    
    I've always had a deep passion and curiosity for modern technology (reflected by my choices of College Education), which is why I spent the past few months furthering my knowledge in the field to the point where I can now showcase my skills through this portfolio! 
    
    So please, enjoy my work!`,
}

buildEpipelagic();