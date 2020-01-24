var input = document.getElementById('addForm'); /**** form id ****/
       
var ul = document.getElementById('items');    /**** ul id ****/

input.addEventListener('submit',addItems);

function addItems(e){
     e.preventDefault();
     var txt =document.getElementById('list').value;  //getting input id "list" assigning to variable "txt"

     var li = document.createElement('li');     //Creating <li> tag  to append the input from user.
     var btn = document.createElement('button');

     li.className = "list-group-item";           //assigning the class name = "list-group-item" of <li>
     btn.className = "btn btn-danger btn-sm float-right delete";
     btn.innerText = "X"   // or createtextnode for text

     var a = document.createTextNode(txt);      //textnode - creating a text between the <li> tag      ------->  creating the textnode calling input ie. createTextNode(txt) and assigning to the variable.
     

     li.appendChild(a);      //appending the input ie. txt to li ie <li>
     li.appendChild(btn);
     
     ul.appendChild(li);     //appending the li to ul.
    
}




/////////    to delete the element from list    ///////////////////

   ul.addEventListener('click',remove);

   function remove(e){
     
     if(e.target.classList.contains('delete')){
          if(confirm('Are you sure..???')){
               var li = e.target.parentElement    /// parentElement is li  target element is btn
               ul.removeChild(li);
          }
     }
   }

 /////////    to search the element from list    /////////////////// 

   function search() { 
     let input = document.getElementById('filter').value.toUpperCase();

     let x = document.getElementsByClassName('list-group-item'); 
       
     for (i = 0; i < x.length; i++) {  

         if (x[i].innerHTML.toUpperCase().indexOf(input) > -1) { 

             x[i].style.display=""; 
         } else { 
             x[i].style.display="none";                  
         } 
     } 
 } 



