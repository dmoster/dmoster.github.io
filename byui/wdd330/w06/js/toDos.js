/**
 * Main Brain
 */

import * as ls from './ls-helpers.js';
import { filterList, addTask, deleteTask, completeTask } from './utilities.js'

if (!ls.load('toDoList')) {
  ls.save('toDoList', '[]');
}
let toDoList = JSON.parse(ls.load('toDoList'));


const filters = document.forms['filters'].elements['filter'];
for (let i = 0, numFilters = filters.length; i < numFilters; ++i) {
  filters[i].addEventListener('click', () => filterList(filters[i].value, toDoList));
}


document.getElementById('taskAdder').addEventListener('click', () => addTask(toDoList));

document.getElementById('activeFilter').click();


export function addListeners() {

  const deleteBtns = document.getElementsByClassName('deleteBtn');
  for (const i in deleteBtns) {
    if (deleteBtns.hasOwnProperty(i)) {
      deleteBtns[i].addEventListener('click', () => deleteTask(deleteBtns[i].id, toDoList));
    }
  }

  const checkGroups = document.getElementsByClassName('check-group');
  for (const i in checkGroups) {
    if (checkGroups.hasOwnProperty(i)) {
      checkGroups[i].addEventListener('click', () => completeTask(checkGroups[i].id, toDoList));
    }
  }
}