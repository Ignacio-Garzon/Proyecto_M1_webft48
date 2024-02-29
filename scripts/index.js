class Activity {
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor(){
        this.activities = [];
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(id, title, description, imgUrl){
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}


function activityToHTML(activityInstance) { 
    const { title, description, imgUrl } = activityInstance;

    
    const activityCard = document.createElement('div');
    activityCard.classList.add('activity-card'); 

    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.classList.add('activity-title'); 

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.classList.add('activity-description'); 

    const imageElement = document.createElement('img');
    imageElement.src = imgUrl;
    imageElement.alt = title;
    imageElement.classList.add('activity-image'); 


    activityCard.appendChild(titleElement);
    activityCard.appendChild(descriptionElement);
    activityCard.appendChild(imageElement);


    activityCard.classList.add('activity-card-container');

    return activityCard;
}

function renderActivities(containerId, repositoryInstance) {

    const container = document.getElementById(containerId);


    container.innerHTML = '';


    const activities = repositoryInstance.getAllActivities();


    const activityElements = activities.map(activityToHTML);


    activityElements.forEach(element => {
        container.appendChild(element);
    });
}

function addButtonClickHandler() {

    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');
    const imgUrlInput = document.getElementById('img-url-input');


    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const imgUrl = imgUrlInput.value.trim();


    if (!title || !description || !imgUrl) {
        alert("Por favor completa todos los campos.");
        return; 
    }


    const repositoryInstance = new Repository();
    repositoryInstance.createActivity(generateUniqueId(), title, description, imgUrl);


    renderActivities('activity-container', repositoryInstance);


    titleInput.value = '';
    descriptionInput.value = '';
    imgUrlInput.value = '';
}
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        addButtonClickHandler();
    });
});

module.exports = { Activity, Repository };

