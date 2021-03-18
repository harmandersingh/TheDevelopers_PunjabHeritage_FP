function tour(desti)
{
	var package_name = "";
	var duration = "";
	var destination = "";
	if(desti == "amritsar")
	{
		package_name = "Amritsar Tour Packages";
		duration = " 02 nights/ 03 Days";
		destination = " Amritsar-delhi-Amritsar";
	}
	else if(desti=="holidays")
	{
		package_name = "Punjab Holiday Packages";
		duration = "05 nights/ 06 Days";
		destination = "Amritsar,Jalandhar,Anandpur Sahib";
	}
	else if(desti=="gurdwara")
	{
		package_name = "Punjab Gurdwaras Tour Package";
		duration = "07 nights/ 09 Days";
		destination = "Amritsar,Patna Sahib,Anandpur";
	}
	else if(desti=="chandigarh")
	{
		package_name = "Chandigarh Tour Package";
		duration = " 02 nights/ 03 Days";
		destination = " RockGarden,SuknaLake,RoseGarden";
	}
	else if(desti=="nakodar")
	{
		package_name = "Nakodar";
		duration = "01 nights/ 02 Days";
		destination = "Nakodar";
	}
	if(package_name != "" && duration != "" && destination != "")
	{
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
         
		 request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("TourBooking", {autoIncrement: true});   
         }
		 
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
			add(db, package_name,duration,destination);
         };
         
         function add(db, pack,dur,des) {
			  // Start a database transaction and get the notes object store
			  let tx = db.transaction(['TourBooking'], 'readwrite');
			  let store = tx.objectStore('TourBooking');
			  // Put the sticky note into the object store
			  let note = {package_name: pack, duration:dur, destination:des};
			  store.add(note);
			  // Wait for the database transaction to complete
			  tx.oncomplete = function() { console.log('stored note!')
			  window.location.href="Book_reg_form.html";
			  }
			  tx.onerror = function(event) {
				alert('error storing note ' + event.target.errorCode);
			  }
			}
         
         
         
		
	}
}