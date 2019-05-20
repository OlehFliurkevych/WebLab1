'use strict';

const Customer = require('./Customer');
const Project = require('./Project');
const Performer = require('./Performer');

let customer1 = new Customer("Oleh", "Fliurkevych");
let customer2 = new Customer("Stepan", "Senychun");
let customer3 = new Customer("Andriy", "Schevchuk");
let customer4 = new Customer("Mykola", "Pankiv");

let project1 = new Project("BMW");
let project2 = new Project("Volkswagen");
let project3 = new Project("Volvo");
let project4 = new Project("Audi");
let project5 = new Project("Mercedes");
let project6 = new Project("Renault");

let performer1 = new Performer("Ivan", "Petrenko");
let performer2 = new Performer("Vasul", "Logoziak");
let performer3 = new Performer("Pavlo", "Schevchenko");
let performer4 = new Performer("Roman", "Tarantino");

console.log("~~~~~~~~~~~~Customers list~~~~~~~~~~~~");
console.log(Customer.getCustomerList());
console.log("~~~~~~~~~~~~Projects list~~~~~~~~~~~~");
console.log(Project.getProjectList());
console.log("~~~~~~~~~~~~Performers list~~~~~~~~~~~~");
console.log(Performer.getPerformerList());

console.log("~~~~~~~~~~~~Editing~~~~~~~~~~~~");

customer1.setFirstName("Roman");
customer3.setFirstName("Bill");
customer3.setSecondName("Smith");
console.log(Customer.getCustomerList());

console.log("~~~~~~~~~~~~Deleting~~~~~~~~~~~~");

customer2.deleteCustomerFromCollection();

console.log(Customer.getCustomerList());

customer1.addProjectForCustomer(project2.id);
customer1.addProjectForCustomer(project1.id);
customer3.addProjectForCustomer(project5.id);
customer4.addProjectForCustomer(project6.id);
customer4.addProjectForCustomer(project4.id);

console.log("~~~~~~~~~~~~After adding project to customer~~~~~~~~~~~~");

console.log(Customer.getCustomerList());

console.log("~~~~~~~~~~~~Get customer's projects~~~~~~~~~~~~");

console.log("For customer : " + customer4.first_name + " " + customer4.second_name);
console.log(customer4.getCustomerProjects());

performer1.addProjectForPerformer(project3.id);
performer3.addProjectForPerformer(project3.id);
performer3.addProjectForPerformer(project6.id);
performer2.addProjectForPerformer(project5.id);
performer1.addProjectForPerformer(project4.id);

console.log("~~~~~~~~~~~~After adding project to performer~~~~~~~~~~~~");

console.log(Performer.getPerformerList());

console.log("~~~~~~~~~~~~After editing and deleting performer~~~~~~~~~~~~");

performer3.deletePerformerFromCollection();
performer4.setFirstName("Oleksandr");
performer2.setSecondName("Romaniuk");

console.log(Performer.getPerformerList());


console.log("~~~~~~~~~~~~Get performer's projects~~~~~~~~~~~~");

console.log("For performer : " + performer1.first_name + " " + performer1.second_name);
console.log(performer1.getPerformerProjects());
