var _ = require('lodash');
const projectList = [];
let count = 1;

module.exports = class Project {
    constructor(title) {
        this.id = count++;
        this.title = title;
        projectList.push(this);
    }

    static getProjectList() {
        return projectList;
    }

    setTitle(title) {
        this.title = title;
    }

    deleteProjectFromCollection() {
        projectList.splice(projectList.indexOf(this), 1);
    }

    static getProjectById(id) {
        return _.filter(projectList, x => x.id === id);
    }
}

