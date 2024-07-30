
var tasks = [];


// TOGGLE FORM DISPLAY
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
};

document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let newTask = document.querySelector('#new-task').value;
    tasks.push(`<div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    ${newTask}
                  </label>
                </div>`);

    updateChecklist();    
    togglePopup();
    
});

function updateChecklist(){

    $('#checklist').empty();

    for(i=0; i < tasks.length; i++){
        $('#checklist').append(tasks[i]);
    }
};

$('#removeTask').click(function(){
    tasks.pop();
    updateChecklist();
});