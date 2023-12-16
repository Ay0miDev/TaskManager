// ALTERNATE JAVASCRIPT CODE BUT EDIT DOESN'T WORK


// let input = document.getElementById("newTaskInput");
// let form = document.getElementById("newTaskForm");
// let listElement = document.getElementById('tasks');


// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const task = input.value

//     if(task === '') {
//         alert('Input field must not be empty')
//     }else {
//         console.log('success');
    

//     // creating div's and input fields
//     const taskElement = document.createElement('div')
//     taskElement.classList.add('task')

//     const taskContentElement = document.createElement('div')
//     taskContentElement.classList.add('content')

//     const taskInputElement = document.createElement('input')
//     taskInputElement.classList.add('text')
//     taskInputElement.type ='text'
//     taskInputElement.value = task
//     taskInputElement.setAttribute('readonly', 'readonly')
//     taskContentElement.appendChild(taskInputElement)

//     const taskActionsElement = document.createElement('div')
//     taskActionsElement.classList.add('actions')

//     // edit btn
//     const taskEditBtn = document.createElement('button')
//     taskEditBtn.classList.add('edit')
//     taskEditBtn.innerText = 'edit'
//     // delete btn
//     const taskDeleteBtn = document.createElement('button')
//     taskDeleteBtn.classList.add('delete')
//     taskDeleteBtn.innerText = 'delete'

//     taskActionsElement.appendChild(taskEditBtn)
//     taskActionsElement.appendChild(taskDeleteBtn)

//     taskElement.appendChild(taskContentElement)
//     taskElement.appendChild(taskActionsElement)
//     listElement.appendChild(taskElement)

//     taskEditBtn.addEventListener('click', () => {
//         if(taskEditBtn.innerText === 'edit'){
//             taskInputElement.removeAttribute("readonly");
//             taskEditBtn.innerText = 'save'
//         }else{
//             taskInputElement.setAttribute('readonly', 'readonly')
//             taskEditBtn.innerText = 'edit'
//         }
//     })

//     taskDeleteBtn.addEventListener('click', () => {
//         // listElement.removeChild(taskElement)
//         taskElement.remove()
//     })
// }

// } )



// Get references to HTML elements
let input = document.getElementById("newTaskInput");
let form = document.getElementById("newTaskForm");
let listElement = document.getElementById('tasks');

// Add a submit event listener to the form
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the value from the input field
    const task = input.value;

    // Check if the input is empty
    if (task === '') {
        // Show an alert and stop the function if the input is empty
        alert('Input field must not be empty');
        return;
    }

    // Create HTML elements for the task
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskContentElement = document.createElement('div');
    taskContentElement.classList.add('content');

    const taskInputElement = document.createElement('input');
    taskInputElement.classList.add('text');
    taskInputElement.type = 'text';
    taskInputElement.value = task;
    taskInputElement.setAttribute('readonly', 'readonly');
    taskContentElement.appendChild(taskInputElement);

    const taskActionsElement = document.createElement('div');
    taskActionsElement.classList.add('actions');

    const taskEditBtn = document.createElement('button');
    taskEditBtn.classList.add('edit');
    taskEditBtn.innerText = 'edit';

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('delete');
    taskDeleteBtn.innerText = 'delete';

    taskActionsElement.appendChild(taskEditBtn);
    taskActionsElement.appendChild(taskDeleteBtn);

    taskElement.appendChild(taskContentElement);
    taskElement.appendChild(taskActionsElement);

    // Add the task element to the task list
    listElement.appendChild(taskElement);

    // Add click event listeners for edit and delete buttons
    taskEditBtn.addEventListener('click', () => {
        // Toggle the read-only attribute of the input field on button click
        taskInputElement.readOnly = !taskInputElement.readOnly;

        // Change the button text based on the read-only attribute
        taskEditBtn.innerText = taskInputElement.readOnly ? 'edit' : 'save';
    });

    taskDeleteBtn.addEventListener('click', () => {
        // Remove the task element from the task list on delete button click
        taskElement.remove();
    });
    // Creating an event that indicate if the text has been edited
        taskEditBtn.addEventListener('click', ()=>{
            taskInputElement.addEventListener('click', ()=>{
                taskInputElement.style.background = 'red'
                taskInputElement.style.border = '1px solid black'
                taskInputElement.style.color = 'white'
            })
        })
    });
