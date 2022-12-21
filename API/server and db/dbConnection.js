// (A) LOAD DB MODULE
 var showTable=function (){
const mysql = require("mysql");

// (B) CREATE CONNECTION - CHANGE TO YOUR OWN !
const db = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "password",
  database: "registration_form"
});
db.connect((err) => { 
  if (err) { throw err; }
  console.log("DB connection OK");
});
 
// (C) QUERY used to show table
db.query("SELECT * FROM `registration_form`", (err, results) => {
  if (err) { throw err; }
  console.log(results);
  let getData=results.map((x)=>{return (x.firstname)})
  console.log(getData);
  return getData;
 
});
}
// function(){ enter values
function saveToSql(){
db.query("insert into registration_form values('alapati','syamala','syamala@zelarsoft.com','78945612','78945612')", (err,results,feilds) => {
  if (err) { throw err; }
  console.log(results);
})
}
// db.query("insert into registration_form values('sameer','md','sameer2002@gmail.com','7075045338','7075045338')",(err,results,feilds) =>{
//   if (err) { throw err;}
//   console.log(results);
// });
showTable();

//export.mydbfn=showTable;
export default showTable;