console.log("welcome to node app");
showNotes();

// if user adds a note, add it to the localStorage

let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){

    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj=JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);
    showNotes();

});



// function to show from local storage
function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj=JSON.parse(notes);
    }

    let html="";
    notesObj.forEach(function(element,index){
        html += `
        <div class="notCard my-4 mx-3 card" style="width: 17rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">
            ${element}

            </p>
            <button href="#" id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
    </div> `;


    });


    let notesElm=document.getElementById("notes");
    if(notesObj.length !=0){
        notesElm.innerHTML=html;
    }else{
        notesElm.innerHTML='Nothing to show ! Use "Add a note" section above to add notes. ';
    }

}

// function to delete notes

function deleteNote(index){
    // console.log("I am delete this note", index);

    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}


//  for search card 
let search=document.getElementById('searchTxt');
searchTxt.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    // console.log('Input event fired !' ,inputVal);
    let noteCards =document.getElementsByClassName('notCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })

})


