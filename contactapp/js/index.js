window.onload= init;

// The contact manager as a global variable
let cm;

function init() {
	// create an instance of the contact manager
	cm = new ContactManager();

  	cm.addTestData();
  	cm.printContactsToConsole();

	// Display contacts in a table
	// Pass the id of the HTML element that will contain the table
	//cm.displayContactsAsATable("tablediv");
}

function emptyList() {
	cm.empty();
  	cm.displayContactsAsATable("tablediv");
}

function loadList() {
	cm.load();
  	cm.displayContactsAsATable("tablediv");
}


class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class ContactManager {
  constructor() {
    this.listOfContacts = [];
  }

  empty () {
    this.listOfContacts = [];
  }

  add(contact) {
    this.listOfContacts.push(contact);
  }

  remove(contact) {
    for (let i = 0; i < this.listOfContacts.length; i++){
      var c = this.listOfContacts[i];

      if(c.email === contact.email){
        this.listOfContacts.splice(i,i);
        break;
      }
    };
  }


  // As our array contains objects, we need to pass as argument
  // a method that can compare two contacts.
  sort() {
    this.listOfContacts.sort(ContactManager.compareByName);
  }

  // class method for comparing two contacts by name
	static compareByName(c1, c2) {
		// JavaScript has builtin capabilities for comparing strings
		// in alphabetical order
		if (c1.name < c2.name)
     		return -1;

    	if (c1.name > c2.name)
     		return 1;

    	return 0;
	}

  load () {
    if(localStorage.contacts !== undefined) {
			// the array of contacts is saved in JSON, let's convert
			// it back to a reak JavaScript object.
			this.listOfContacts = JSON.parse(localStorage.contacts);
		}
  }

  save () {
    // *Stored by browser in browser specific folder ex.
    // :\Users\<Windows login/user name>\AppData\Roaming\Mozilla\Firefox\Profiles\<profile folder>\webappsstore.sqlite
    localStorage.contacts = JSON.stringify(this.listOfContacts);
  }


  printContactsToConsole() {
    this.listOfContacts.forEach(function (c) {
      console.log(c.name);
    });

  }

  displayContactsAsATable(nameOfContainer) {
  		// empty the container that contains the results
      	let container = document.querySelector("#" + nameOfContainer);
      	container.innerHTML = "";


  		if(this.listOfContacts.length === 0) {
  			container.innerHTML = "<p>No contacts to display!</p>";
  			// stop the execution of this method
  			return;
  		}

      	// creates and populate the table with users
      	let table = document.createElement("table");

      	// iterate on the array of users
      	this.listOfContacts.forEach(function(currentContact) {
          	// creates a row
          	let row = table.insertRow();

  			row.innerHTML = "<td>" + currentContact.name + "</td>"
  							+ "<td>" + currentContact.email + "</td>"
       	});

       	// adds the table to the div
       	container.appendChild(table);
  	}


    addTestData() {
		let c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
  		let c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
  		let c3 = new Contact("Angus Young", "angus@acdc.com");
  		let c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

		this.add(c1);
		this.add(c2);
		this.add(c3);
		this.add(c4);

		// Let's sort the list of contacts by Name
		this.sort();
	  }
  }
