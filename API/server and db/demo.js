const dbconnection= require("../dbConnection.js")



let getData=dbconnection.showTable;
var mainElement=document.createElement("ul");
 let getdata= results.map((x)=>{
            var firstListItem=document.createElement("li"); 
            firstListItem.innerHTML=x.firstname;
            mainElement.appendChild(firstListItem);
 })
 document.body.append(mainElement);
export default demo