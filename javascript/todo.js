const todoList = ['make dishes', 'wash dishes'];
renderTodoList();
function renderTodoList () 
{
    let todoListHtml = '';
    for (let i  = 0 ; i < todoList.length; i++)
    {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHtml += html
        document.querySelector('.js-todo-list').innerHTML = todoListHtml
    }
    console.log(todoListHtml)
}


function listAdd()
{
    const inputElement = document.querySelector('.js-input'); 
    const name = inputElement.value; 
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();

}