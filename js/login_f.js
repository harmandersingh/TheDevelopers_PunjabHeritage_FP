function validate()
	{
		var name = document.getElementById("l_username").value;
		var pass = document.getElementById("l_password").value;
		var atposition=x.indexOf("@");  
		var dotposition=x.lastIndexOf(".");
		identify();
		function identify()
		{
				var valid = 0;
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
					document.getElementById("l_username").value="";
					document.getElementById("l_password").value="";
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
					readAll();
				 };
				 
				 request.onupgradeneeded = function(event) {
					var db = event.target.result;
					var objectStore = db.createObjectStore("Regis_user", {keyPath: "mail"});
					
					
				 }
				 
					function readAll() {
					var objectStore = db.transaction("Regis_user").objectStore("Regis_user");
				   
					objectStore.openCursor().onsuccess = function(event) {
					   var cursor = event.target.result;
					   
					   if (cursor) {
						  //alert("Email " + cursor.value.mail + ", Password: " + cursor.value.passwords);
						  if(cursor.value.mail == name & cursor.value.passwords == pass)
						  {
							  //alert("Login Success");
							  valid = 1;
							  //alert(valid)
						  }
						  else
						  {
							cursor.continue();
						  }
					   } else {
						  //alert("No more entries!");
						  valid = 2;
					   }
						
						if (valid == 1)
						{
							
						  alert("Login Success"); 
						  document.getElementById("wrong_password").innerHTML = "";
						  readData();
						  //window.location.href = "UserWishList.html";
						}
						if(valid == 2)
						{
							document.getElementById("wrong_password").innerHTML = "Wrong Details....";
						   
						}
					};
				 }
				 
					}
				}
		}
		
		function readData()
		{
					 var db;
					 var request = window.indexedDB.open("Pun", 1);
					 
					 request.onerror = function(event) {
						console.log("error: ");
					 };
					 
					 request.onsuccess = function(event) {
						db = request.result;
						console.log("success: "+ db);
						readAll();
					 };
					 
					 request.onupgradeneeded = function(event) {
						var db = event.target.result;
						var objectStore = db.createObjectStore("userdata", {autoIncrement: true});
						
					 }
					createtable(0,"Email","Name","Personal_URL","Gender","DOB","Arrival Data","Departure Data","Package","Duration","Destination");	
					 function readAll() {

								  
						var objectStore = db.transaction("userdata").objectStore("userdata");
						
						objectStore.openCursor().onsuccess = function(event) {
						   var cursor = event.target.result;
						   
						   if (cursor) {
							  //alert("Name for id " + cursor.key + " is " + cursor.value.email + ", Age: " + cursor.value.name + ", Email: " + cursor.value.adate);
							  if(cursor.value.email == name && cursor.value.pass == pass)
							  {
								//alert("Name for id " + cursor.key + " is " + cursor.value.email + 
								//", Age: " + cursor.value.name + ", Email: " + cursor.value.adate);
								createtable(1,cursor.value.email,cursor.value.name,cursor.value.p_url,cursor.value.gender,cursor.value.dob,cursor.value.adate,cursor.value.ddate,cursor.value.pack,cursor.value.duration,cursor.value.destination);	  
							  }
							  cursor.continue();
						   } else {
							  //alert("No more entries!");

						   }
						   

						};
						
					 }
				function createtable(row,e,n,pu,g,b,ad,dd,pa,du,de)
				{
					var table = document.getElementById("myTable");
					var row = table.insertRow(row);
					var email = row.insertCell(0);
					var name = row.insertCell(1);
					var Personal_URL = row.insertCell(2);
					var gender = row.insertCell(3);
					var dob = row.insertCell(4);
					var adate = row.insertCell(5);
					var ddate = row.insertCell(6);
					var Package = row.insertCell(7);
					var Duration = row.insertCell(8);
					var Destination = row.insertCell(9);
					
					email.innerHTML = e;name.innerHTML =n ;Personal_URL.innerHTML = pu;
					gender.innerHTML = g;dob.innerHTML = b;adate.innerHTML = ad;
					ddate.innerHTML = dd;Package.innerHTML = pa;
					Duration.innerHTML = du;Destination.innerHTML = de;
				}	 
							
		}
	}