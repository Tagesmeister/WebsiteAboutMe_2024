function aboutMeStart(){

    let animation = document.getElementById('mainDiv');
    if (animation) {
        animation.remove();
    }

    prepareForAboutMe( );
}

function prepareForAboutMe(){
let title = document.getElementById('title');
title.innerHTML="ABOUT ME";

if(!document.getElementById('header')){
createAboutMeHeader();
}


builAboutMeContent();
}

function createAboutMeHeader(){
    let section = document.getElementsByClassName('nav')[0];
    let mainTitle = document.getElementById('title')
    
    let header = document.createElement('header');
    header.setAttribute('id','header');
    
    header.appendChild(mainTitle)
    
    section.appendChild(header);
    
    console.log(header)

}
function builAboutMeContent(){

if(!doesAboutMeExist()){

    let contentDivs = document.createElement("div");

    contentDivs.setAttribute('id', 'container-aboutme')
    
    let section = document.getElementsByClassName('nav')[0];
    
    
    const divs = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
    
loadAboutMeContent(section, divs, contentDivs)
}
function loadAboutMeContent(section, divs, contentDivs){

    console.log(section, divs, contentDivs);
    
    let i = 0;
    divs.forEach(element => {
        element.setAttribute('class', 'item-aboutme');
        i++;
    
        console.log(element);
    
        contentDivs.appendChild(element);
    });

    section.appendChild(contentDivs);
}


}
function doesAboutMeExist(){
    let i = 0;
    let countDiv = 0;
    for(; i < 3; i++){
        console.log(document.getElementsByClassName('item-aboutme')[i]);
        if(document.getElementsByClassName('item-aboutme')[i]){
            countDiv++;
        }
    }
    if(countDiv == 3){
        return true;
    }
return false;
}