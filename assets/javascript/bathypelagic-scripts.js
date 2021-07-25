function buildBathypelagic() {
    // LEFT
    $(`#bathypelagic-body`).append(`<div id="bathypelagic-left"></div>`);

    // Here we build the Info panel
    $(`#bathypelagic-left`).append(`<div id="bathypelagic-info"></div>`);
    $(`#bathypelagic-info`).addClass(`anim-500`);
    $(`#bathypelagic-info`).append(`<p id="bathypelagic-info-name"></p>`);
    $(`#bathypelagic-info`).append(`<p id="bathypelagic-info-description"></p>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-links"></div>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-technologies"></div>`);
    $(`#bathypelagic-info`).append(`<div id="bathypelagic-info-tools"></div>`);

    // Finally, we add the Explore Button
    $(`#bathypelagic-left`).append(`<button id="bathypelagic-button"></button>`);
    $(`#bathypelagic-button`).attr(`type`, `button`);
    $(`#bathypelagic-button`).html(`Explore`);

    // RIGHT
    $(`#bathypelagic-body`).append(`<div id="bathypelagic-right"></div>`);
    // Now we add the Project Video
    $(`#bathypelagic-right`).append(`<div id="bathypelagic-video"></div>`);
    // $(`#bathypelagic-video`).addClass(`anim-500`);

    // Now we add the Project Navigation panel
    $(`#bathypelagic-right`).append(`<div id="bathypelagic-projects"></div>`);
    $(`#bathypelagic-projects`).append(`<div id="bathypelagic-nav"></div>`);
    $(`#bathypelagic-nav`).append(`<button id="bp-nav-up" class="bp-nav"><i class="fas fa-arrow-up"></i></button>`);
    $(`#bathypelagic-nav`).append(`<button id="bp-nav-grid" class="bp-nav"><i class="fas fa-th"></i></button>`);
    $(`#bathypelagic-nav`).append(`<button id="bp-nav-video" class="bp-nav"><i class="fas fa-video"></i></button>`);
    $(`#bathypelagic-nav`).append(`<button id="bp-nav-down" class="bp-nav"><i class="fas fa-arrow-down"></i></button>`);
    $(`.bp-nav`).click(function () {
        switch (this.id) {
            case `bp-nav-up`:
                projectsNav.active = `up`;
                projectsNav.row = (projectsNav.row === 1) ? 1 : parseInt(projectsNav.row) - 1;
                // projectsNav.row = parseInt(projectsNav.row)-1;
                break;
            case `bp-nav-down`:
                projectsNav.active = `down`;
                projectsNav.row = (projectsNav.row === projectsNav.rows) ? projectsNav.row : parseInt(projectsNav.row) + 1;
                // projectsNav.row = parseInt(projectsNav.row)+1;
                break;
            case `bp-nav-video`:
                projectsNav.active = `video`;
                // projectsNav.mode = `video`;
                break;
            case `bp-nav-grid`:
                projectsNav.active = `grid`;
                // projectsNav.mode = `grid`;
                break;
        }
        // console.log(`${this.id} is clicked!`);
        // console.log(`YO = ${projectsNav.active}`);
        switch (projectsNav.active) {
            case `up`:
            case `down`:
                navProjects();
                break;
            case `video`:
            case `grid`:
                changeProjectsMode();
                break;
        }
    });
    projectsNav.position = [];
    for (let i = 0; i < projectsNav.rows; i++) {
        projectsNav.position[i] = i * 165;
    }

    // Now we build the Projects Grid
    $(`#bathypelagic-projects`).append(`<div id="bathypelagic-projects-grid"></div>`);
    for (let i = 1; i <= projects.count; i++) {
        $(`#bathypelagic-projects-grid`).append(`<div id="bathypelagic-project-${i}"></div>`);
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
}

function navProjects() {
    let activeRowItem = parseInt(projectsNav.row) * 3 - 2;
    activeRowItem = `bathypelagic-project-${activeRowItem}`;

    $(`#bathypelagic-projects-grid`).stop().animate({
        scrollTop: projectsNav.position[projectsNav.row - 1]
    }, 10, `swing`, function () {});
}

function changeProjectsMode() {
    console.log(`changeProjectsMode()`);
    console.log(`projectsNav.mode = ${projectsNav.mode}`);
    console.log(`projectsNav.active = ${projectsNav.active}`);
    if (projectsNav.mode === projectsNav.active) {} else {
        projectsNav.mode = String(projectsNav.active);
        $(`#bathypelagic-right`).removeClass(`bp-video-mode`);
        $(`#bathypelagic-right`).removeClass(`bp-grid-mode`);
        $(`#bathypelagic-right`).addClass(`bp-${projectsNav.mode}-mode`);
    }

}

function showProjectInfo() {
    console.log(`projects.active = ${projects.active}`);
    let cProjects = projects[`project${projects.active}`];

    setTimeout(() => {
        $(`#bathypelagic-video-content`).removeClass(`visible`);
        $(`#bathypelagic-video-content`).addClass(`hidden`);
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
    $(`.bil-list-item a`).attr(`target`, `_blank`);

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

    setTimeout(() => {
        $(`#bathypelagic-video`).html(`<video id="bathypelagic-video-content" autoplay controls loop></video>`);
        // $(`#bathypelagic-video`).html(`<video id="bathypelagic-video-content" autoplay loop></video>`);
        $(`#bathypelagic-video`).addClass(`bathypelagic-video-active`);
        $(`#bathypelagic-video-content`).addClass(`hidden anim-500`);
        $(`#bathypelagic-video-content`).attr(`width`, `100%`);
        $(`#bathypelagic-video-content`).attr(`height`, `100%`);
        $(`#bathypelagic-video-content`).append(`<source type="video/mp4">`);
        $(`#bathypelagic-video-content source`).attr(`src`, `${cProjects.video}`);
    }, 500);

    $(`#bathypelagic-button`).attr(`onClick`, `openProject()`);
    $(`#bathypelagic-button`).addClass(`bathypelagic-info-button-active`);

    setTimeout(() => {
        $(`#bathypelagic-video-content`).addClass(`visible`);
        $(`#bathypelagic-video-content`).removeClass(`hidden`);
    }, 750);
}

function openProject() {
    let cProjects = projects[`project${projects.active}`];
    window.open(`${cProjects.live}`, `_blank`);
}

let projects = {
    active: 1,
    // count: 14,
    count: 7,
    project1: {
        name: `My Portfolio`,
        description: `This project is where so much of my skills are poured into. Here I showcase my expertise with Web Design and Development, as well as my familiarity with Game Design principles. I built everything that you see here from scratch, from the sounds to the vector illustrations and even the different web functionalities`,
        image: `assets/images/projects/my-portfolio.png`,
        video: `assets/videos/projects/my-portfolio.mp4`,
        live: `https://kolehiyolo.github.io/portfolio/`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/portfolio`],
            // [`YouTube`, `https://www.youtube.com/watch?v=dQw4w9WgXcQ`],
            // [`Dribbble`, `https://dribbble.com/`],
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
        video: `assets/videos/projects/the-snake-pit.mp4`,
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
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project3: {
        name: `Build a Tribute Page`,
        description: `As part of the Responsive Web Design Certification from freeCodeCamp, I built this simple page by copying the sample CodePen page as closely as possible, down to the Responsive CSS properties.`,
        image: `assets/images/projects/fcc-build-a-tribute-page.png`,
        video: `assets/videos/projects/fcc-build-a-tribute-page.mp4`,
        live: `https://kolehiyolo.github.io/freeCodeCamp_projects/pages/C01%20-%20Responsive%20Web%20Design/pages/C01P01%20-%20Build%20a%20Tribute%20Page/index.html`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project4: {
        name: `Build a Survey Form`,
        description: `As part of the Responsive Web Design Certification from freeCodeCamp, I built this simple page by copying the sample CodePen page as closely as possible, down to the Responsive CSS properties.`,
        image: `assets/images/projects/fcc-build-a-survey-form.png`,
        video: `assets/videos/projects/fcc-build-a-survey-form.mp4`,
        live: `https://kolehiyolo.github.io/freeCodeCamp_projects/pages/C01%20-%20Responsive%20Web%20Design/pages/C01P02%20-%20Build%20a%20Survey%20Form/index.html`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project5: {
        name: `Build a Product Landing Page`,
        description: `As part of the Responsive Web Design Certification from freeCodeCamp, I built this simple page by copying the sample CodePen page as closely as possible, down to the Responsive CSS properties.`,
        image: `assets/images/projects/fcc-build-a-product-landing-page.png`,
        video: `assets/videos/projects/fcc-build-a-survey-form.mp4`,
        live: `https://kolehiyolo.github.io/freeCodeCamp_projects/pages/C01%20-%20Responsive%20Web%20Design/pages/C01P03%20-%20Build%20a%20Product%20Landing%20Page/index.html`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project6: {
        name: `Build a Technical Documentation Page`,
        description: `As part of the Responsive Web Design Certification from freeCodeCamp, I built this simple page by copying the sample CodePen page as closely as possible, down to the Responsive CSS properties.`,
        image: `assets/images/projects/fcc-build-a-technical-documentation-page.png`,
        video: `assets/videos/projects/fcc-build-a-survey-form.mp4`,
        live: `https://kolehiyolo.github.io/freeCodeCamp_projects/pages/C01%20-%20Responsive%20Web%20Design/pages/C01P04%20-%20Build%20a%20Technical%20Documentation%20Page/index.html`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
    project7: {
        name: `Build a Personal Portfolio Webpage`,
        description: `As part of the Responsive Web Design Certification from freeCodeCamp, I built this simple page by copying the sample CodePen page as closely as possible, down to the Responsive CSS properties.`,
        image: `assets/images/projects/fcc-build-a-personal-portfolio-webpage.png`,
        video: `assets/videos/projects/fcc-build-a-survey-form.mp4`,
        live: `https://kolehiyolo.github.io/freeCodeCamp_projects/pages/C01%20-%20Responsive%20Web%20Design/pages/C01P05%20-%20Build%20a%20Personal%20Portfolio%20Webpage/index.html`,
        links: [
            [`GitHub`, `https://github.com/kolehiyolo/the_snake_pit`],
        ],
        technologies: [
            `HTML5`,
            `CSS3`,
            `Git`,
        ],
        tools: [
            `Visual Studio Code`,
            `Google Chrome`,
            `GitHub`,
        ],
    },
}

function createDummyProjects() {
    for (let i = 8; i <= projects.count; i++) {
        projects[`project${i}`] = JSON.parse(JSON.stringify(projects.project1));
        projects[`project${i}`].name = `Project ${i}`;
        projects[`project${i}`].image = `assets/images/projects/dummy-project.jpg`;
        projects[`project${i}`].description = `This is just a dummy project`;

    }
}

let projectsNav = {
    rows: Math.ceil(parseInt(projects.count) / 3),
    active: `video`,
    row: 1,
    mode: `grid`,
};


createDummyProjects();
buildBathypelagic();
showProjectInfo();
changeProjectsMode()