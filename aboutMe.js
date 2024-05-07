function aboutMeStart(){
    let animation = document.getElementById('mainDiv');
    if (animation) {
        animation.remove();
    }

    prepareForAboutMe( );
}

function prepareForAboutMe(){
    console.log(document.getElementById('title'));
    let title = document.getElementById('title');
    if (title) {
        title.innerHTML = "About Me"; // Set title to About Me
    } else {
        console.error('Title element not found');
    }
    if (!document.getElementById('header')) {
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
    
    
    const divs = [document.createElement('div'), document.createElement('div')];
    
loadAboutMeContent(section, divs, contentDivs)
}
}
function doesAboutMeExist(){
    let countDiv = 0;

        console.log(document.getElementsByClassName('item-aboutme')[0]);
        if(document.getElementsByClassName('item-aboutme')[0]){
            countDiv++;
        }
    if(countDiv == 1){
        return true;
    }
return false;
}

function loadAboutMeContent(section, divs, contentDivs){
    let i = 0;
    console.log(section, divs, contentDivs);
    
    divs.forEach(element => {
        element.setAttribute('class', 'item-aboutme');
        
        let divTitle = document.createElement('header');
        divTitle.setAttribute('class', 'divTitle');

        let divText = document.createElement('div');
        divText.setAttribute('class', 'divText');

        createDivContent(divTitle, divText, i);


        element.appendChild(divTitle);
        element.appendChild(divText);
    
        console.log(element);

        contentDivs.appendChild(element);
        i++;
    });

    section.appendChild(contentDivs);    
}



function createDivContent(divTitle, divText, i) {

    switch(i){
        case 0:
        divTitle.innerText = "Me as a Person";
        divText.innerHTML = GetTextMeAsAPerson(); 
        break;
        case 1:
        divTitle.innerText = "My current education";
        divText.innerHTML = GetTextEducation(); 
        break;
    }
}

function GetTextMeAsAPerson(){
    return `
        <p>Hello, I'm delighted that you've made it to my site. Here you can get a little insight into my personality and my favorite projects.</p>
        <br>
        <p>My name is Pascal, I was born in 2004 and I live in beautiful Switzerland. My hobbies are sports, programming, and spending time with my closest friends.</p>
        <p>I do a lot of sports, especially jogging and going to the gym. From time to time, I enjoy the beautiful underwater world while diving.</p>
        <p>I like programming and often deal with the security of the digital world (cyber security). I am very open-minded and always happy to learn new things.</p>
    `;
}

function GetTextEducation(){
    return `
        <p>I am currently attending the IMS (IT secondary school) and I am doing my vocational baccalaureate there, as well as training as a computer scientist in application development. I'm having a lot of fun and learning something new every day.</p>
        <p>During my training as a computer scientist in application development, I will turn my hobby into a profession.</p>
        <p>I have worked with the following:</p>
        <br>
        <p>C#, js, java, SQL, NoSQL, SQLight</p>
    `;
}





