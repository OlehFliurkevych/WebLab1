var _ = require('lodash');
const Project = require('./Project');

const customerList = [];
let count = 1;

module.exports = class Customer {
    constructor(first_name, second_name) {
        this.id = count++;
        this.first_name = first_name;
        this.second_name = second_name;
        this.projects = this.projects || [];
        customerList.push(this);
    }

    static getCustomerList() {
        return customerList;
    }

    addProjectForCustomer(projectId) {
        this.projects.push(Project.getProjectById(projectId));
    }

    getCustomerProjects() {
        return this.projects;
    }

    setFirstName(name) {
        this.first_name = name;
    }

    setSecondName(name) {
        this.second_name = name;
    }

    deleteCustomerFromCollection() {
        customerList.splice(customerList.indexOf(this), 1);
    }

    static getCustomerById(id) {
        return _.filter(customerList, x => x.id === id);
    }
}

