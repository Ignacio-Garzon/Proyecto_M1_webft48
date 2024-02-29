class Activity { 
    constructor({ id, title, description, imgUrl }) {
        console.log(id)
        this.id = id
        this.title = title
        this.description = description
        this.imgUrl = imgUrl
    }
}

class Repository {
    constructor() {
        this.activities = []
        this.id = 0
    }
    getAllActivities() {
        return this.activities
    }
    createActivity(act) {
        this.id++
        const activity = new Activity()
        
        this.activities.push(activity)
    }
    deleteActivity(id) { 
        const filtered = this.activities.filter(act => act.id !== id)
        this.activities = filtered
    }
}

const repository = new Repository();

const obj = {
title: "Actividad 1",
description: "Description Ac.1",
imgUrl: "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2018/07/aprender-programar-gratis.png",
};
console.log(repository)
repository.getAllActivities(obj)
console.log(repository);
repository.getAllActivities(obj);
console.log(repository);
repository.getAllActivities(obj);
console.log(repository);
repository.getAllActivities(obj);
console.log(repository.getAllActivities())
repository.deleteActivity(2)
repository.deleteActivity(3)
repository.deleteActivity(4)
repository.deleteActivity(1);
console.log(repository.getAllActivities());
