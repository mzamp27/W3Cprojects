function display() {
  var queryURL = "https://gist.githubusercontent.com/heiswayi/7fde241975ed8a80535a/raw/ff1caaeaf62bd6740ab7cafcd61f1215de173379/datatables-data.json";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", queryURL, true);

  // called when the response is arrived
  xhr.onload = function(e) {
    // turn the response into a JavaScript object
    var users = JSON.parse(xhr.response);

    displayUsersAsATable(users.data);
  };

  // in case of error
  xhr.onerror = function(err) {
    console.log("Error: " + err);
  };

  // sends the request
  xhr.send();
}

function displayUsersAsATable(users) {
  // users are a JavaScript objects

  // empty the div that contains the results
  var usersDiv = document.querySelector("#users");
  usersDiv.innerHTML = "";

  // creates and populate the table with users
  var table = document.createElement("table");

  // creates a row headers
  table.insertRow().innerHTML =
    "<th scope='col'>User Name</th><th scope='col'>Age</th><th scope='col'>Occupation</th><th scope='col'>City</th><th scope='col'>Salary</th>";

  // iterate on the array of users
  users.forEach(function(currentUser) {
    var row = table.insertRow();

    // insert cells in the row
    var userNameCell = row.insertCell();
    userNameCell.innerHTML = currentUser[0];

    var userNameCell = row.insertCell();
    userNameCell.innerHTML = currentUser[3];

    var userNameCell = row.insertCell();
    userNameCell.innerHTML = currentUser[1];

    var userOccupationCell = row.insertCell();
    userOccupationCell.innerHTML = currentUser[2];

    var userSalaryCell = row.insertCell();
    userSalaryCell.innerHTML = currentUser[5];
  });

  // adds the table to the div
  usersDiv.append(table);
}
