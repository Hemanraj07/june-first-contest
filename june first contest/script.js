let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  function PrintDeveloperbyMap() {
    let developers = employees.filter(employee => employee.profession === "developer");
    developers.map(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
  }
  
  function removeAdmin() {
    let filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    let newArray = [
      { id: 5, name: "emma", age: "22", profession: "developer" },
      { id: 6, name: "alex", age: "25", profession: "designer" },
      { id: 7, name: "mike", age: "23", profession: "developer" }
    ];
  
    let combinedArray = employees.concat(newArray);
    console.log(combinedArray);
  }
  