function clearAll()
{
	window.location.reload()
}

function progress()
{ 
	var element = document.getElementById("myprogressBar");
	var email = document.getElementById("email").value;
    var pass = document.getElementById("psw").value;
	var name = document.getElementById("name").value;
	var p_url = document.getElementById("p_url").value;
	
	var b_date = document.getElementById("b_date").value;
	var b_month = document.getElementById("b_month").value;
	var b_year = document.getElementById("b_year").value;
	
	var a_date = document.getElementById("a_date").value;
	var a_month = document.getElementById("a_month").value;
	var a_year = document.getElementById("a_year").value;
	
	var d_date = document.getElementById("d_date").value;
	var d_month = document.getElementById("d_month").value;
	var d_year = document.getElementById("d_year").value;
	
		if(email != ""){
			element.style.width = 10 + '%'; 
			if(pass != ""){
			element.style.width = 20 + '%';
			 if(name != ""){
				element.style.width = 30 + '%'; 
				if(p_url != ""){
					element.style.width = 40 + '%';
					if(b_date != ""){
						element.style.width = 50 + '%';
						if(b_month != ""){
							element.style.width = 60 + '%';
							if(b_year != ""){
								element.style.width = 70 + '%';
								if(a_date != ""){
									element.style.width = 75 + '%';
									if(a_month != ""){
									element.style.width = 80 + '%';
										if(a_year != ""){
										element.style.width = 85 + '%';
										if(d_date != ""){
											element.style.width = 90 + '%';
											if(d_month != ""){
											element.style.width = 95 + '%';
												if(d_year != ""){
												element.style.width = 100 + '%';
												}
											}
										}
										}
									}
								}
							}
						}
					  }
					}
				}
			}
		}
		
		
		
		
	
}
function validate()
{
	
	var gender="";
	var valid = 0;
	var f_dob="";
	var f_adate = "";
	var f_ddate ="";
	var id="";
	var pack="";
	var duration = "";
	var desti="";
	var counter = 0;
	var email = document.getElementById("email").value;
    var pass = document.getElementById("psw").value;
	var name = document.getElementById("name").value;
	var p_url = document.getElementById("p_url").value;
	
	var b_date = document.getElementById("b_date").value;
	var b_month = document.getElementById("b_month").value;
	var b_year = document.getElementById("b_year").value;
	
	var a_date = document.getElementById("a_date").value;
	var a_month = document.getElementById("a_month").value;
	var a_year = document.getElementById("a_year").value;
	
	var d_date = document.getElementById("d_date").value;
	var d_month = document.getElementById("d_month").value;
	var d_year = document.getElementById("d_year").value;

	if(document.getElementById('male').checked) 
	{   
       gender = document.getElementById("male").value   
    }  
	if(document.getElementById('female').checked) 
	{   
       gender = document.getElementById("female").value   
    }
	if(document.getElementById('other').checked) 
	{   
       gender = document.getElementById("other").value   
    }
	//alert("yes"+gender);
	if(email=="" || pass=="" || name=="" || gender=="" || p_url=="" || b_date=="" || b_month=="" || b_year=="" || a_date=="" || a_month=="" || a_year=="" || d_date=="" || d_month=="" || d_year=="")
	{
		alert("Fill All the field");
	}
	else
		{
			f_dob = b_date+"/"+b_month+"/"+b_year;
			f_adate = a_date+"/"+a_month+"/"+a_year;
			f_ddate = d_date+"/"+d_month+"/"+d_year;
			
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
				  if(cursor.value.mail == email && cursor.value.passwords == pass)
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
				  //valid == 2;
				  wrong();
               }
				
				if (valid == 1)
				{
				  	
				  //alert("Login Success"); 
				  //window.location.href = "UserWishList.html";
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
						var objectStore = db.createObjectStore("TourBooking", {autoIncrement: true});
						
					 }
					 
					 
					 function readAll() {
						var objectStore = db.transaction("TourBooking").objectStore("TourBooking");
						
						objectStore.openCursor().onsuccess = function(event) {
						   var cursor = event.target.result;
						   
						   if (cursor) {
							  //alert("Name for id " + cursor.key + " is " + cursor.value.package_name + ", Age: " + cursor.value.duration + ", Email: " + cursor.value.destination);
							  id = cursor.key;
							  pack = cursor.value.package_name;
							  duration = cursor.value.duration;
							  desti = cursor.value.destination;
							  //getpackage(pack,duration,desti);
							  cursor.continue();
						   } else {
							  //alert("No more entries!");
							  
							  insertData();
						   }
						   //alert(id+" "+ pack+" "+duration+" "+desti);
						   document.getElementById("error_msg").innerHTML = "";
						};
						
					 }
					 
					 //alert("Your Tour Booked Successfully");
					 //window.location.href = "home.html";
				}
				function wrong()
				{
					//alert("run");
				     document.getElementById("error_msg").innerHTML = "Check Your Email/Password Or Register Yourself";
				}		
            };
         }
		 
		}
		
		function insertData()
		{	
			
			//alert(pack,duration,desti);
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
			let db;
			let dbReq = indexedDB.open('Pun', 1);
			dbReq.onupgradeneeded = function(event) {
			  // Set the db variable to our database so we can use it!  
			  db = event.target.result;

			  // Create an object store named notes. Object stores
			  // in databases are where data are stored.
			 let userdata = db.createObjectStore('userdata', {autoIncrement: true});
			}
			dbReq.onsuccess = function(event) {
			  db = event.target.result;
			  console.log("success"+db);
			  addStickyNote(db,email,pass,name,p_url,gender,f_dob,f_adate,f_ddate,pack,duration,desti);
			}
			dbReq.onerror = function(event) {
			  alert('error opening database ' + event.target.errorCode);
			}
			function addStickyNote(db,e,p,n,pu,gender,fb,fa,fd,pack,duration,desti) {
			  // Start a database transaction and get the notes object store
			  let tx = db.transaction(['userdata'], 'readwrite');
			  let store = tx.objectStore('userdata');
			  // Put the sticky note into the object store
			  let note = {email:e,pass:p,name:n,p_url:pu,gender:gender,dob:fb,adate:fa,ddate:fd,pack:pack,duration:duration,destination:desti};
			  store.add(note);
			  // Wait for the database transaction to complete
			  tx.oncomplete = function() { console.log('stored note!')
			  alert("Your Tour is Booked");
				document.getElementById("email").value="";
				document.getElementById("psw").value="";
				document.getElementById("name").value="";
				document.getElementById("p_url").value="";
				document.getElementById("b_date").value="";
				document.getElementById("b_month").value="";
				document.getElementById("b_year").value="";
				document.getElementById("a_date").value="";
				document.getElementById("a_month").value="";
				document.getElementById("a_year").value="";
				document.getElementById("d_date").value="";
				document.getElementById("d_month").value="";
				document.getElementById("d_year").value="";
				window.location.href="home.html";
			  }
			  tx.onerror = function(event) {
				alert('error storing note ' + event.target.errorCode);
			  }
			}
		}
}
