let title = document.getElementById('title');


function navigationAboutMe() {
    removeOldElements(2);
    addAboutMCss();

    aboutMeStart();     
}
function addAboutMCss(){
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "aboutMe.css";
    

    document.head.appendChild(link);
    }

function navigationProjects() {

    removeOldElements(1)  
    addProjectCss();
    
    projectStart();  

}

function addProjectCss(){
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "project.css";
 
link.setAttribute('id', 'project.css');
document.head.appendChild(link);

}


function navigationHome() {
    location.reload(); // Reload the page to reset everything
}


function removeOldElements(index){
    try{
        if(index == 1){
        document.getElementById('container-aboutme').remove();
        console.log("container-aboutme deleted");
        }
        if(index == 2){
            document.getElementById('container-project').remove();
            console.log("container-project deleted");
        }        
    }catch{console.log("noting was removed")}
}



