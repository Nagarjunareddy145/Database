let students = [{
    name: "Harry potter",
    house: "Gryffindor"
  }, {
    name: "Draco Malfoy",
    house: "Slytherin"
  }];
  
  let newStudent =[{
    name: "Cedric Diggory",
    house: "Hufflepuff"
  }];

  
  //TimeOut is added to have some delay
  const addCharacter = (character) => {
    setTimeout(() => {
      students.push(character);
      getListOfSortedStudents(character); // Move this inside the callback to ensure it's called after the student is added
    }, 1000);
  };
  
  // Initial call to addCharacter will now handle listing inside its callback
  //addCharacter(newStudent);
  
  
  const getListOfSortedStudents = (list) => {
    list.forEach((student, index) => {
      console.log(`${index + 1}. ${student.name} is added to ${student.house}`);
    })
  };

  
  // Initial call to addCharacter will now handle listing inside its callback
  addCharacter(newStudent);
  //addCharacter(newStudent);
  //addCharacter(newStudent);

  
  // This function will add a new student to the list,
  // but the catch here is it will take 1 second
  //addCharacter(newStudent);
  
  // This will console the list of the sorted student
  getListOfSortedStudents(students);

//Synchronousfunction
  function greet(name) {
    console.log(`Hello, ${name}!`);
}
function greet1(name) {
    console.log(`Hello, ${name}!`);
}

greet();
greet1();

// Asynchronous with callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Kalyan", age: 25 };
        callback(data);
    }, 1000);
}


fetchData((data) => {
    console.log("Data received:", data);
});