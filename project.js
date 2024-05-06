function projectStart(){
    let animation = document.getElementById('mainDiv');
    if (animation) {
        animation.remove();
    }
    prepareForProjects();
}

function prepareForProjects(){
    console.log(document.getElementById('title')); // Check what this returns
    let title = document.getElementById('title');
    if (title) {
        title.innerHTML = "FAVOURITE PROJECTS";
    } else {
        console.error('Title element not found');
    }
    
    if(!document.getElementById('header')){
    createProjectHeader();
    }

    buildProjectContent();
    }
    function createProjectHeader(){
        let section = document.getElementsByClassName('nav')[0];
        let mainTitle = document.getElementById('title')
        
        let header = document.createElement('header');
        header.setAttribute('id','header');
        
        header.appendChild(mainTitle)
        
        section.appendChild(header);
        
        console.log(header)
    
    }
    function buildProjectContent(){

        if(!doesProjectExist()){
        
            let contentDivs = document.createElement("div");
        
            contentDivs.setAttribute('id', 'container-project')
            
            let section = document.getElementsByClassName('nav')[0];
            
            
            const divs = [document.createElement('div'), document.createElement('div'), document.createElement('div'),document.createElement('div')];
            
        loadProjectContent(section, divs, contentDivs)
        }
        function loadProjectContent(section, divs, contentDivs){
            let i = 0;
            divs.forEach(element => {
                element.setAttribute('class', 'item-project');
                i++;
            
                console.log(element);
            
                contentDivs.appendChild(element);
            });
        
            section.appendChild(contentDivs);

            loadImage(divs);
        }
        
        
        }
        function doesProjectExist(){
            let i = 0;
            let countDiv = 0;
            for(; i < 4; i++){
                console.log(document.getElementsByClassName('item-project')[i]);
                if(document.getElementsByClassName('item-project')[i]){
                    countDiv++;
                }
            }
            if(countDiv == 4){
                return true;
            }
            
        return false;
        }

        function loadImage(divs) {
            const imageAttributes = ["portfolio", "schoologramm", "blackjack", "API"];
            const srcImages = [
                'Image/Portfolioprojekt.png',
                'Image/C-Sharp-Tutorials.webp',
                'Image/BlackJack2.png',
                'Image/API2.png',
            ];
            const linkToRepo = [
                "https://github.com/Tagesmeister/Portfolio_2024",
                "https://github.com/Tagesmeister/LA_ILA2_1301_Schoologramm_2023",
                "https://github.com/Tagesmeister/LA1304-BlackJack",
                "https://github.com/Tagesmeister/API-Lernatelier-1303",
               
            ];
        
            divs.forEach((div, index) => {
                const img = document.createElement('img');
                img.setAttribute('alt', imageAttributes[index]);
                img.setAttribute('class', 'images');
                img.src = srcImages[index];
        
                div.appendChild(img);
                createOverlay(linkToRepo[index], div);
            });
        }
        
        function createOverlay(linkToRepo, div) {
            const overlay = document.createElement('div');
            const overlayContent = document.createElement('div');
            const linkElement = document.createElement('a');
        
            linkElement.setAttribute('class', 'GitHub');
            linkElement.setAttribute('href', linkToRepo);
            linkElement.textContent = 'View GitHub Repository';
        
            overlayContent.setAttribute('class', 'overlay-content');
            overlayContent.appendChild(linkElement);
        
            overlay.setAttribute('class', 'overlay');
            overlay.appendChild(overlayContent);
        
            div.appendChild(overlay);
        }
        
        