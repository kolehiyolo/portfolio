function buildBathypelagic() {
    // Here we build the Info panel
    $(`#bathypelagic-body`).append(`<div id="bathypelagic-info"></div>`);
    $(`#bathypelagic-info`).addClass(`anim-500`);
    $(`#bathypelagic-info`).append(`<p id="bathypelagic-info-name"></p>`);
    $(`#bathypelagic-info`).append(`<p id="bathypelagic-info-description"></p>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-links"></div>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-technologies"></div>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-tools"></div>`);

    // Now we add the Project Video
    $(`#bathypelagic-body`).append(`<div id="bathypelagic-video"></div>`);
    $(`#bathypelagic-video`).addClass(`hidden anim-500`);

    // Now we build the Projects Grid
    $(`#bathypelagic-body`).append(`<div id="bathypelagic-projects"></div>`);
    for (let i = 1; i <= projects.count; i++) {
        $(`#bathypelagic-projects`).append(`<div id="bathypelagic-project-${i}"></div>`);
        $(`#bathypelagic-project-${i}`).addClass(`bathypelagic-project`);
        $(`#bathypelagic-project-${i}`).addClass(`anim-500`);
        $(`#bathypelagic-project-${i}`).click(function () {
            SearchForProject: {
                for (let j = 1; j <= projects.count; j++) {
                    if (`bathypelagic-project-${j}` === (`${this.id}`)) {
                        projects.active = j;
                        break SearchForProject;
                    }
                }
            }
            showProjectInfo();
        });
        $(`#bathypelagic-project-${i}`).append(`<div id="bp-${i}-img-div"></div>`);
        $(`#bp-${i}-img-div`).addClass(`bp-img-div`);
        $(`#bp-${i}-img-div`).append(`<img id="bp-${i}-img">`);
        $(`#bp-${i}-img`).attr(`src`, `${projects[`project${i}`].image}`);
        $(`#bp-${i}-img`).addClass(`bp-img`);

        $(`#bathypelagic-project-${i}`).append(`<p id="bp-${i}-name"></p>`);
        $(`#bp-${i}-name`).addClass(`bp-name`);
        $(`#bp-${i}-name`).append(`${projects[`project${i}`].name}`);
    }
    $(`.bathypelagic-project`).addClass(`bathypelagic-project-unactive`);

    // Finally, we add the Explore Button
    $(`#bathypelagic-body`).append(`<button id="bathypelagic-button"></button>`);
    $(`#bathypelagic-button`).attr(`type`, `button`);
    $(`#bathypelagic-button`).html(`Explore`);
}

function showProjectInfo() {
    console.log(`projects.active = ${projects.active}`);
    let cProjects = projects[`project${projects.active}`];

    setTimeout(() => {
        // $(`#bathypelagic-info`).removeClass(`visible`);
        $(`#bathypelagic-video`).removeClass(`visible`);

        // $(`#bathypelagic-info`).addClass(`hidden`);
        $(`#bathypelagic-video`).addClass(`hidden`);
    }, 1);

    $(`.bathypelagic-project-active`).addClass(`bathypelagic-project-unactive`);
    $(`.bathypelagic-project-active`).removeClass(`bathypelagic-project-active`);

    $(`#bathypelagic-project-${projects.active}`).addClass(`bathypelagic-project-active`);

    // setTimeout(() => {
    $(`#bathypelagic-info-name`).html(`${cProjects.name}`);
    $(`#bathypelagic-info-description`).html(`${cProjects.description}`);

    $(`#bathypelagic-info-links`).html(`<ul id="bil-list"></ul>`);
    for (let i = 1; i <= cProjects.links.length; i++) {
        $(`#bil-list`).append(`<li id="bil-list-${i}"></li>`);
        $(`#bil-list-${i}`).addClass(`bil-list-item`);
        $(`#bil-list-${i}`).html(`<a><i id="bil-list-${i}-icon"></i>${cProjects.links[i-1][0]}</a>`);
        $(`#bil-list-${i} a`).attr(`href`, `${cProjects.links[i-1][1]}`);
        let listItemIcon;
        switch (cProjects.links[i - 1][0]) {
            case `GitHub`:
                listItemIcon = `fab fa-github`;
                break;
            case `YouTube`:
                listItemIcon = `fab fa-youtube`;
                break;
            case `Dribbble`:
                listItemIcon = `fab fa-dribbble`;
                break;
        }
        $(`#bil-list-${i}-icon`).addClass(`${listItemIcon}`);
        $(`#bil-list-${i}-icon`).addClass(`bil-list-item-icon`);
    }

    $(`#bathypelagic-info-technologies`).empty();
    $(`#bathypelagic-info-technologies`).append(`<p id="bite-list-title">Technologies</p>`);
    $(`#bathypelagic-info-technologies`).append(`<ul id="bite-list"></ul>`);
    for (let i = 1; i <= cProjects.technologies.length; i++) {
        $(`#bite-list`).append(`<li id="bite-list-${i}">${cProjects.technologies[i-1]}</li>`);
        $(`#bite-list-${i}`).addClass(`bite-list-item`);
    }

    $(`#bathypelagic-info-tools`).empty();
    $(`#bathypelagic-info-tools`).append(`<p id="bito-list-title">Tools</p>`);
    $(`#bathypelagic-info-tools`).append(`<ul id="bito-list"></ul>`);
    for (let i = 1; i <= cProjects.tools.length; i++) {
        $(`#bito-list`).append(`<li id="bito-list-${i}">${cProjects.tools[i-1]}</li>`);
        $(`#bito-list-${i}`).addClass(`bito-list-item`);
    }

    // $(`#bathypelagic-video`).html(`<video id="bathypelagic-video-content" autoplay controls loop></video>`);
    setTimeout(() => {
        $(`#bathypelagic-video`).html(`<video id="bathypelagic-video-content" autoplay loop></video>`);
        $(`#bathypelagic-video`).addClass(`bathypelagic-video-active`);
        $(`#bathypelagic-video-content`).attr(`width`, `100%`);
        $(`#bathypelagic-video-content`).attr(`height`, `100%`);
        $(`#bathypelagic-video-content`).append(`<source type="video/mp4">`);
        $(`#bathypelagic-video-content source`).attr(`src`, `${cProjects.video}`);
    }, 500);
    
    $(`#bathypelagic-button`).attr(`onClick`, `openProject()`);
    $(`#bathypelagic-button`).addClass(`bathypelagic-info-button-active`);

    // }, 500);

    setTimeout(() => {
        // $(`#bathypelagic-info`).addClass(`visible`);
        $(`#bathypelagic-video`).addClass(`visible`);

        // $(`#bathypelagic-info`).removeClass(`hidden`);
        $(`#bathypelagic-video`).removeClass(`hidden`);
    }, 750);
}

function openProject() {
    let cProjects = projects[`project${projects.active}`];
    window.open(`${cProjects.live}`, `_blank`);
}

let projects = {
    active: 1,
    count: 7,
    project1: {
        name: `My Portfolio`,
        description: `This project is where so much of my skills are poured into. Here I showcase my expertise with Web Design and Development, as well as my familiarity with Game Design principles. I built everything that you see here from scratch, from the sounds to the vector illustrations and even the different web functionalities`,
        image: `assets/images/projects/my-portfolio.png`,
        video: `assets/videos/projects/my-portfolio.mp4`,
        live: `file:///Z:/Projects/Portfolio/index.html`,
        links: [
            [`GitHub`, `https://www.google.com`],
            [`YouTube`, `https://www.youtube.com/watch?v=dQw4w9WgXcQ`],
            [`Dribbble`, `https://dribbble.com/`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `JavaScript ES6+`,
            `jQuery`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Adobe XD`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project2: {
        name: `The Snake Pit`,
        description: `As I was exploring JavaScript and the DOM, I stumbled upon the idea of using a grid-based system to create an entirely web-based snake game. As the project progressed, however, it eventually grew to be an interesting 2-player game where each snake tries to trap/kill the other. After several iterations more, the game now has several snakes with their own unique set of skills that evoke different play-styles`,
        image: `assets/images/projects/the-snake-pit.png`,
        video: `assets/videos/projects/the-snake-pit.mp4git `,
        live: `https://kolehiyolo.github.io/the_snake_pit/`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `JavaScript ES6+`,
            `jQuery`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Adobe XD`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
}

function createDummyProjects() {
    for (let i = 3; i <= projects.count; i++) {
        projects[`project${i}`] = JSON.parse(JSON.stringify(projects.project1));
        projects[`project${i}`].name = `Project ${i}`;
        projects[`project${i}`].image = `assets/images/projects/dummy-project.jpg`;
        projects[`project${i}`].description = `This is just a dummy project`;

    }
}

createDummyProjects();
buildBathypelagic();
showProjectInfo();