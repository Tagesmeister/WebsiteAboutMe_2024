let title = document.getElementById('title');


function navigationAboutMe() {
    removeOldElements(2);
    aboutMeStart();     
}

function navigationProjects() {

    removeOldElements(1)  
    projectStart();  

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



