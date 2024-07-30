
var tasks1 = [];
var tasks2 = [];
var tasks3 = [];
var tasks4 = [];
var tasks5 = [];
var tasks6 = [];


// TOGGLE FORM DISPLAY
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
};

let choice = 0;

$("#add-task-1").click(function () {
    choice = this.value;
})
$("#add-task-2").click(function () {
    choice = this.value;
})
$("#add-task-3").click(function () {
    choice = this.value;
})
$("#add-task-4").click(function () {
    choice = this.value;
})
$("#add-task-5").click(function () {
    choice = this.value;
})
$("#add-task-6").click(function () {
    choice = this.value;
})

document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let newTask = document.querySelector('#new-task').value;
    let html =`<div class="form-check">
        <input class="form-check-input" type="checkbox">
        <label class="form-check-label">
          ${newTask}
        </label>
        </div>`;

    switch (choice) {
        case "1":
            tasks1.push(html);
            updateChecklist(choice);
            console.log(1);
            break;
        case "2":
            tasks2.push(html);
            updateChecklist(choice);
            break;
        case "3":
            tasks3.push(html);
            updateChecklist(choice);
            break;
        case "4":
            tasks4.push(html);
            updateChecklist(choice);
            break;
        case "5":
            tasks5.push(html);
            updateChecklist(choice);
            break;
        case "6":
            tasks6.push(html);
            updateChecklist(choice);
            break;

    }

    togglePopup();

});

function updateChecklist(choice) {

    switch (choice) {
        case "1":
            $('#checklist-1').empty();
            for (i = 0; i < tasks1.length; i++) {
                $('#checklist-1').append(tasks1[i]);
            }
            break;
        case "2":
            $('#checklist-2').empty();
            for (i = 0; i < tasks2.length; i++) {
                $('#checklist-2').append(tasks2[i]);
            }
            break;
        case "3":
            $('#checklist-3').empty();
            for (i = 0; i < tasks3.length; i++) {
                $('#checklist-3').append(tasks3[i]);
            }
            break;
        case "4":
            $('#checklist-4').empty();
            for (i = 0; i < tasks4.length; i++) {
                $('#checklist-4').append(tasks4[i]);
            }
            break;
        case "5":
            $('#checklist-5').empty();
            for (i = 0; i < tasks5.length; i++) {
                $('#checklist-5').append(tasks5[i]);
            }
            break;
        case "6":
            $('#checklist-6').empty();
            for (i = 0; i < tasks6.length; i++) {
                $('#checklist-6').append(tasks6[i]);
            }
            break;
    }
};

$('#remove-task-1').click(function () {
    tasks1.pop();
    updateChecklist("1");
});
$('#remove-task-2').click(function () {
    tasks2.pop();
    updateChecklist("2");
});
$('#remove-task-3').click(function () {
    tasks3.pop();
    updateChecklist("3");
});
$('#remove-task-4').click(function () {
    tasks4.pop();
    updateChecklist("4");
});
$('#remove-task-5').click(function () {
    tasks5.pop();
    updateChecklist("5");
});
$('#remove-task-6').click(function () {
    tasks6.pop();
    updateChecklist("6");
});
