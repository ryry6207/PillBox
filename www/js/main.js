// Setup Submit

 function onSubmit(){
	
	alert ("onSubmit called");
	
	//open database
	var theDB = openDatabase("pbdb3", "1.0", "pill box", 3 * 1024 * 1024);
	
	//creating table 
	theDB.transaction(function (tx) {
		
		
		var sqlStr = 'CREATE TABLE IF NOT EXISTS pillbox (male TEXT, female TEXT, none TEXT, name TEXT, surname TEXT, email TEXT, dob TEXT)';
			console.log(sqlStr);
			tx.executeSql(sqlStr, [], onSqlSuccess, onSqlError);
	 
		 
			alert("writng data");
	
			var id= 1;
			var male=$('#radio-choice-1').val();
			var female=$('#radio-choice-2').val();
			var none=$('#radio-choice-3').val();
			var name=$('#name').val();
			var surname=$('#surname').val();
			var email=$('#email').val(); 
			var dob=$('#dob').val();
			
			console.log(name);
			
			var sqlStr = 'INSERT INTO pillbox (male, female, none, name, surname, email, dob) VALUES (?, ?, ?, ?, ?, ?, ?)';
			tx.executeSql(sqlStr, [male, female, none, name, surname, email, dob]);
		});
 }
 
 function onTxError(tx, err){
	var msgText;
	if(err){
	//Tell the user what happened
		msgText = "TX: " + err.message + " (" + err .code +")";
	}
	else{
		msgText = "TX: Unknown error";
	}
	console.error(msgText);
	alert(msgText);
}
		
function onTxSucess(tx, msg){
			console.log("TX: success");
		}
		
function onSqlSuccess(tx, res) {
	alert("success");
}

function onSqlError(tx, err) {
		
		console.log(err.message);
		alert("Error: "  + err.message);
}


// Medication Submit

 function onSubmit2(){
	
	alert ("onSubmit2 called");
	
	//open database
	var theDB = openDatabase("pbdb4", "1.0", "pill box", 3 * 1024 * 1024);
	
	//creating table 
	theDB.transaction(function (tx) {
		
		
		var sqlStr = 'CREATE TABLE IF NOT EXISTS pillbox1 (name TEXT, dosage TEXT, time TEXT, repeat TEXT)';
			console.log(sqlStr);
			tx.executeSql(sqlStr, [], onSqlSuccess, onSqlError);
	 
		 
			alert("writng data");
	
			var id= 1;
			var name=$('#name').val();
			var dosage=$('#dosage').val();
			var time=$('#time').val(); 
			var repeat=$('#repeat').val();
			
			console.log(name);
			
			var sqlStr = 'INSERT INTO pillbox1 (name, dosage, time, repeat) VALUES (?, ?, ?, ?)';
			tx.executeSql(sqlStr, [name, dosage, time, repeat]);
		});
 }
 
 function onTxError(tx, err){
	var msgText;
	if(err){
	//Tell the user what happened
		msgText = "TX: " + err.message + " (" + err .code +")";
	}
	else{
		msgText = "TX: Unknown error";
	}
	console.error(msgText);
	alert(msgText);
}
		
function onTxSucess(tx, msg){
			console.log("TX: success");
		}
		
function onSqlSuccess(tx, res) {
	alert("success");
}

function onSqlError(tx, err) {
		
		console.log(err.message);
		alert("Error: "  + err.message);
}

//Selecting From Database
function onTxSucess (){
	tx.executeSql('SELECT * FROM pillbox1', [], function (tx, results) {
  		var len = results.rows.length, i;
  		for (i = 0; i < len; i++) {
   		alert(results.rows.item(i).text);
  }
});
}