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
  console.log("initializing")
  try {
    let answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'want',
        message: 'What would you like to do?',
        choices: ['Update', 'View', 'Delete']
      }
    ]);
    // console.log(answer.want)
    switch (answer.want) {

      case 'Update':
      return Update();

      case 'View':
        return View();

      case 'Delete':
        return Delete();
    }
  }catch (error) {
    throw error;
  }
};



function Update() {
  // console.log('update employee managers');
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function View() {
  console.log('viewing')
}

function Delete() {
  console.log('deleting')
}