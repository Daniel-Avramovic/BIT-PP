// Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

(function () {
    // description: "This is a project dedicated to solve the issue of creating a multiple object to the some kind"
    // programingLanguage: "JavaScript".
    // gitRepo: 'https://gtihub.com/programer/first-project'.
    // status: true,
    function createProject(description, programingLanguage, gitRepo, status,){
        var obj = {
            description: description,
            programingLanguage: programingLanguage,
            gitRepo: gitRepo,
            developmentStatus: status,
            printRepo: function(){
                return obj.gitRepo;
            }
        }
        return obj;
    }
    var project1 = createProject('This is a project dedicated to solve the issue of creating a multiple object to the some kind');
    var project2 = createProject('New project', 'JS', 'https://gtihub.com/programer/first-project', true);
    console.log(project2.printRepo());
})();