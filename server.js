const inquirer = require('inquirer');

// Import the mysql package
const mysql = require('mysql');

//const table = require("console.table")

// Connect to database using a localhost connection
const connection = mysql.createConnection({
  host: 'localhost',

  //port 3306

  // Your MySQL username
  user: 'admin',

  // Your MySQL password (leave blank for class demonstration purposes; fill in later)
  password: 'password',

  // Name of database
  database: 'employee_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
//   connection.end();
    questions()
});

async function questions(){
  //console.log("initializing")
  try {
    let answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'want',
        message: 'What would you like to do?',
        choices: ['Add', 'View', 'Update', 'Exit']
      }
    ]);
    // console.log(answer.want)
    switch (answer.want) {

      case 'Add':
      return Add();

      case 'View':
        return View();

      case 'Update':
        return Update();
      
      case 'Exit':
        return connection.end();
    }
  }catch (error) {
    throw error;
  }
};


//Add Function 
async function Add() {
  // console.log('adding')
  try {
    let add = await inquirer.prompt([
      {
        type: "list",
        name: "adder",
        message: "What would you like to add?",
        choices: ["Employee", "Role", "Department"],
      },
    ]);
    switch (add.adder) {
      case "Employee":
        return Employee();

      case "Role":
        return Role();

      case "Department":
        return Department();
    }
  } catch (error) {
    throw error;
  }
};

function Employee(){
  console.log('new employee func')
  try{
    inquirer.prompt([
      {
        type: 'input',
        name: 'first',
        messaege: "New Employee First Name:"
      },
      {
        type: 'input',
        name: 'last',
        messaege: "New Employee Last Name:"
      },
      {
        type: 'input',
        name: 'roleID',
        messaege: "New Employee Role ID:"
      },
      {
        type: 'input',
        name: 'managerID',
        messaege: "New Employee Manager ID:"
      }
    ])
    .then(function(newEmp) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: newEmp.first,
          last_name: newEmp.last,
          role_id: newEmp.roleID || 0,
          manager_id: newEmp.managerID || 0
        },
        function(err) {
          if (err) throw err;
          console.log("New Employee Added!");
          questions();
        }
      )
    })
  }catch (error) {
    throw error;
  }
};

function Role(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      messaege: "New Role Title:"
    },
    {
      type: 'input',
      name: 'salary',
      messaege: "New Role Salary:"
    },
    {
      type: 'input',
      name: 'department_id',
      messaege: "New Role Department ID:"
    }
  ])
  .then(function(newRole) {
    connection.query(
      "INSERT INTO roles SET ?",
      {
        title: newRole.title,
        salary: newRole.salary,
        department_id: newRole.department_id || 0
      },
      function(err) {
        if (err) throw err;
        console.log("New Role Added!");
        questions();
      }
    );
  });
}

function Department(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'New Department:'
    }
  ])
  .then(function(newDep) {
    connection.query(
      "INSERT INTO department SET ?",
      {
        department: newDep.department,
      },
      function(err) {
        if (err) throw err;
        console.log("New Department Added!");
        questions();
      }
    );
  });
}



//View Function
async function View() {
  //console.log('viewing')
  try {
    let add = await inquirer.prompt([
      {
        type: "list",
        name: "viewer",
        message: "What would you like to View?",
        choices: ["Employees", "Roles", "Departments"],
      },
    ]);
    switch (add.viewer) {
      case "Employees":
        return connection.query("SELECT * FROM employee", function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].first_name + " | " + res[i].last_name + " | " + res[i].role_id + " | " + res[i].manager_id);
          }
          questions()
        });

      case "Roles":
        return connection.query("SELECT * FROM roles", function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].salary + " | " + res[i].department_id);
          }
          questions()
        });

      case "Departments":
        return connection.query("SELECT * FROM department", function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].department);
          }
          questions()
        });
    }
  } catch (error) {
    throw error;
  }
};

//Upate Finction
function Update() {
  //console.log('updating')
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id +" | " + res[i].first_name + " | " + res[i].last_name + " | " + res[i].role_id + " | " + res[i].manager_id);
    }
    inquirer.prompt([
      {
        type: 'input',
        name: 'row',
        message: 'Row of Employee to be Updated'
      },
      {
        type: 'input',
        name: 'update',
        message: 'New Employee Role ID'
      }
    ])
    .then(function(updateEmp) {
      var query = connection.query(
        "UPDATE employee SET ? WHERE ?",
    [
      {
        role_id: updateEmp.update
      },
      {
        id: updateEmp.row
      },
    ],
    function(err, res) {
      if (err) throw err;
      console.log("Employees updated!\n");
          questions();
        }
      )
    })
  })
}