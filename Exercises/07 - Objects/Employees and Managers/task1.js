//Employees and Managers

// Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department

// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value on the given value

// All employees should inherit methods:
// getData which returns the name, surname and salary 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10% 


(function(){
    function Person(name, surname){
        this.name = name;
        this.surname = surname;
    };
    Person.prototype.getFullName = function(){
        return this.name + ' ' + this.surname;
    }
    function Employee(name, surname, job){
        Person.call(this, name, surname)
        this.job = job;
    };
    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Employee.prototype.getSalary = function(){
        return this.salary;
    };
    Employee.prototype.getData = function(){
        return this.getFullName() + ' ' + this.getSalary(); 
    };
    Employee.prototype.increaseSalary = function(num){
        return this.getSalary() + ((this.getSalary()/100) * num);
    }
    function Developer(name, surname, job,spec,salary){
        Employee.call(this, name, surname, job, salary);
        this.specialization = spec;
        this.salary = salary;
    };
    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;

    Developer.prototype.getSpecialization = function(){
        return this.specialization;
    }
    
    function Manager(name, surname, job,department,salary){
        Employee.call(this, name, surname, job, salary);
        this.department = department;
        this.salary = salary;
    };
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;

    Manager.prototype.getDepartment = function(){
        return this.department;
    };
    Manager.prototype.changeDepartment = function(newDepartment){
      return this.department = newDepartment;
    };

    var person1 = new Developer('Daniel', 'Avramovic', 'Developer', 'JS', 400);
    var person2 = new Manager('Daniel', 'Avramovic', 'Manager for Developers', 'Comunications', 500);

    console.log(person1.increaseSalary(10));
    person2.changeDepartment('Boss');
    console.log(person2);

})()