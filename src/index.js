document.addEventListener('DOMContentLoaded',()=>{
 let form =  document.getElementById('create-task-form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  taskLister(e.target.new_task_description.value)
  form.reset()
})




function taskLister(taskList){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',deleteTask)
  li.textContent=taskList
  li.appendChild(btn)
  btn.textContent = 'X'
  document.getElementById('tasks').appendChild(li)
  
  console.log(btn)
  console.log(taskList)
  
}
})
function deleteTask(e){
  e.target.parentNode.remove()
}




