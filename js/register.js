function validate()
	{
		
		var name = document.getElementById("r_email").value;
		var pass = document.getElementById("r_password").value;
		var atposition=x.indexOf("@");  
		var dotposition=x.lastIndexOf(".");
		if(name=="" || pass=="")
		{
			alert("Fill the Field")
		}
		else
		{
			if (atposition<1 || dotposition<atposition+2 || dotposition+2>=name.length){  
			     alert("Enter Valid Email");
			     return false;  
			 }
			 else
			 {
			document.getElementById("r_email").value="";
			document.getElementById("r_password").value="";
			//prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         var db;
         var request = window.indexedDB.open("PunjabDB", 3);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
			add();
         };
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("Regis_user", {keyPath: "mail"});
            
            
         }
         
         
         function add() {
            var request = db.transaction(["Regis_user"], "readwrite")
            .objectStore("Regis_user")
            .add({ mail : name, passwords : pass});
            
            request.onsuccess = function(event) {
               alert("Your Registration is Done");
            };
            
            request.onerror = function(event) {
               alert("Unable to add data\r\nThis User is aready exists");
            }
         }
		}
		}
	}
