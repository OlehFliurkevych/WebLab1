var _ = require('lodash');

const Project = require('./Project');
const performerList = [];
let count = 1;

module.exports = class Performer {
    constructor(first_name, second_name) {
        this.id = count++;
        this.first_name = first_name;
        this.second_name = second_name;
        this.projects = this.projects || [];
        performerList.push(this);
    }

    static getPerformerList() {
        return performerList;
    }

    addProjectForPerformer(projectId){
        this.projects.push(Project.getProjectById(projectId));
    }

    getPerformerProjects(){
        return this.projects;
    }

    setFirstName(name) {
        this.first_name = name;
    }

    setSecondName(name) {
        this.second_name = name;
    }

    deletePerformerFromCollection() {
        performerList.splice(performerList.indexOf(this), 1);
    }

    static getPerformerById(id) {
        return _.filter(performerList, x => x.id === id);
    }
}

