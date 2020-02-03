

/******************************   ADD  **************************************/

var form = document.getElementById('book-form'); /**** FORM ID ****/

var rIndex, table = document.getElementById('table');

form.addEventListener('submit',add);

function add(e){
  e.preventDefault();
   
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var isbn = document.getElementById('isbn').value;

  tab = table.insertRow(table.length)

  
  var td1 = tab.insertCell(0)
  var td2 = tab.insertCell(1)
  var td3 = tab.insertCell(2)

  td1.innerHTML = title;
  td2.innerHTML = author;
  td3.innerHTML = isbn;

   select();
}

/******************************   RESET  **************************************/


form.addEventListener('reset',clear);

function clear(){
  document.getElementById('title').value = ""
  document.getElementById('author').value = ""
  document.getElementById('isbn').value = ""
}



/******************************   SELECT   **************************************/

function select(){
  
   for(let i = 1; i < table.rows.length; i++){

          table.rows[i].onclick = function(){
                 //to get the selected row
                 rIndex = this.rowIndex;
                
                 document.getElementById('title').value = this.cells[0].innerHTML;
                 document.getElementById('author').value = this.cells[1].innerHTML;
                 document.getElementById('isbn').value = this.cells[2].innerHTML;

          };
   }
}
select();


/**************************   EDIT   **********************************************/

var btn = document.getElementById('edit');
btn.addEventListener('click',edit);

function edit(){

  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var isbn = document.getElementById('isbn').value;

  table.rows[rIndex].cells[0].innerHTML = title;
  table.rows[rIndex].cells[1].innerHTML = author;
  table.rows[rIndex].cells[2].innerHTML = isbn;
}

/**************************   REMOVE   **********************************************/

var dlt = document.getElementById('delete');
dlt.addEventListener('click',remove)

function remove(){

   table.deleteRow(rIndex);

}