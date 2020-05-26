//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms);
//console.log(document.links);

//GET ELEMENT BY ID//
var i = 1;
var j = 0;


function addNote() {
    //var element=document.getElementById("Notebox"); 

    i = i + 1;
    var obj = document.createElement('div');
    obj.setAttribute("id", i);
    obj.setAttribute("class", "col-md-12 Notes");


    obj.innerHTML =
    `
    
        <div id="main" class="card">
           <div class="card-body">
               <form class="form-inline">
                  <input type="text" id="text1" class="form-control" placeholder="Title" style="text-transform: uppercase; font-style: oblique; font-weight: 600;">
                  <textarea name="content" placeholder="Take a note..."></textarea>
                  <button type="button" onclick="addNote()"><span>+</span></button>
                </form>
            </div>
        </div>
        <button onclick="colorChange(this.parentElement.parentElement)" type="button" class="btn btn-info">Color</button>
        <button onclick="deleteNote(this.parentElement)" type="button" class="btn btn-danger">Delete</button>

    
    `;

    document.body.children[1].children[0].appendChild(obj);

}

function deleteNote(papa) {
    console.log(papa);
    papa.classList.add("deleted");
    papa.style.display = 'none';
}
function trash1() {
    console.log("call");
    var x = document.getElementsByClassName("deleted");
    for(i = 0; i <= x.length; i++) {
        var y=document.getElementsByClassName('Notes');
        console.log(y[i]);
        var z = y[i].classList.contains('deleted');
        if(z == true){
            y[i].style.display = "block";
        }
        else {
            y[i].style.display= "none";
        }    
    }
}

var m = 1;

function colorChange(oppa) {


    switch (m) {
        case 1:
            oppa.style.backgroundColor = "#8d9ffc";
            ++m;
            break;
        case 2:
            oppa.style.backgroundColor = "#fcc867";
            ++m;
            break;
        case 3:
            oppa.style.backgroundColor = "#c397fc";
            ++m;
            break;
        case 4:
            oppa.style.backgroundColor = "#8afcfc";
            ++m;
            break;
        case 5:
            oppa.style.backgroundColor = "#f9a4f4";
            ++m;
            break;
        case 6:
            oppa.style.backgroundColor = "#93fc76";
            ++m;
            break;
        case 7:
            oppa.style.backgroundColor = "#fc7676";
            ++m;
            break;
        case 8:
            oppa.style.backgroundColor = "white";
            ++m;
            break;
    }
    
    if (m == 9) m = 1;
}



