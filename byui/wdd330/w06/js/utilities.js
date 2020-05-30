/**
 * Utilities
 */

import * as ls from './ls-helpers.js';
import { addListeners } from './toDos.js';


// Create list from saved data
function buildList(listData) {
  let listHTML = '';

  for (const i in listData) {
    listHTML += createListItem(listData[i]);
  }

  document.getElementById('toDoList').innerHTML = listHTML;
  addListeners();

  getActiveFilter().click();
}

function createListItem(itemData) {
  return `<li class="toDoItem" id="${itemData.id}">
            <div class="check-group" id="check${itemData.id}">
              <i class="far fa-${itemData.completed ? 'check-' : ''}square" id="check${itemData.id}"></i>
              <span class="taskContent${itemData.completed ? ' completed' : ''}" id="content${itemData.id}">${itemData.content}</span>
            </div>
            <i class="fas fa-times deleteBtn" id="delete${itemData.id}"></i>
          </li>`;
}


// Filter the list
function filterList(listType, toDoList) {
  if (listType === 'active') {
    const openTasks = toDoList.filter(item => !item.completed)
    buildList(openTasks);
    updateCounter(openTasks.length);
  }
  else if (listType === 'complete') {
    buildList(toDoList.filter(item => item.completed));
  }
  else if (listType === 'all') {
    buildList(toDoList);
  }
}

function getActiveFilter() {
  if (document.getElementById('activeFilter').checked) {
    return document.getElementById('activeFilter');
  }
  else if (document.getElementById('completeFilter').checked) {
    return document.getElementById('completeFilter');
  }
  else {
    return document.getElementById('allFilter');
  }
}


// Update the task counter
let taskCounter = 0;

function updateCounter(numOpenTasks) {
  taskCounter = numOpenTasks;
  document.getElementById('taskCounter').innerHTML = taskCounter;
}


// Add a new task
function addTask(toDoList) {
  const newTask = document.getElementById('taskDescription')
  const taskDescription = newTask.value;
  const whiteSpace = /\s/g;
  const message = document.getElementById('message');

  if (taskDescription.trim() == '') {
    message.style.color = 'tomato';
    message.innerHTML = 'Please enter a valid task.'
  }
  else {

    let data = {
      id: Date.now(),
      content: taskDescription,
      completed: false
    };
  
    toDoList.push(data);
  
    let toDoListJSON = JSON.stringify(toDoList);
    ls.save(data.id, data);
    ls.save('toDoList', toDoListJSON);
  
    buildList(toDoList);
    
    const openTasks = toDoList.filter(item => !item.completed)
    updateCounter(openTasks.length);

    message.style.color = '#66cc94';
    message.innerHTML = ''
  }


  newTask.value = '';
}


// Delete a task
function deleteTask(deleteId, toDoList) {
  const id = deleteId.replace('delete', '');
  
  for (const i in toDoList) {
    if (toDoList.hasOwnProperty(i)) {
      if (toDoList[i].id == id) {
        toDoList.splice(i, 1);
        
        let toDoListJSON = JSON.stringify(toDoList);
        ls.save('toDoList', toDoListJSON);
      }
    }
  }

  buildList(toDoList);

  const openTasks = toDoList.filter(item => !item.completed)
  updateCounter(openTasks.length);
}


// Complete a task
function completeTask(checkId, toDoList) {
  const id = checkId.replace('check', '');
  console.log(id);

  for (const i in toDoList) {
    if (toDoList.hasOwnProperty(i)) {
      if (toDoList[i].id == id) {
        if (!toDoList[i].completed) {
          toDoList[i].completed = true;
        }
        else {
          toDoList[i].completed = false;
        }
        
        let toDoListJSON = JSON.stringify(toDoList);
        ls.save('toDoList', toDoListJSON);
      }
    }
  }

  buildList(toDoList);

  const openTasks = toDoList.filter(item => !item.completed)
  updateCounter(openTasks.length);
}


export { filterList, addTask, deleteTask, completeTask }