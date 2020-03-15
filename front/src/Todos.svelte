<script>
    import axios from 'axios'
    import { onMount } from 'svelte'
    import TodoItem from './TodoItem.svelte';

    let newTodoTitle = '';

    let todos = [];
    let isLoading = false;

    onMount(async function() {
        await getTodos();
    })

    async function getTodos() {
        isLoading = true;
        axios({
            method: "GET",
            url: "http://localhost:80/todos"
        })
        .then(async res => {
            if (res.status == "200") {
                todos = res.data;
                console.log(todos);
                isLoading = false;
            }
        })
    }

    function addTodo(event) {
        if (event.key === 'Enter') {
            axios({
                method: "POST",
                url: "http://localhost:80/todos",
                headers: {},
                data: {
                    title: newTodoTitle
                }
            }).then(async res => {
                isLoading = true;
                if (res.status == 200) {
                    await getTodos();
                }
            });
            newTodoTitle = '';
        }
    }

    function handleDeleteTodo(event) {
        console.log(event.detail.id);
        axios({
            method: "DELETE",
            url: `http://localhost:80/todos/${event.detail.id}`,
            headers: {}
        }).then(async res => {
            isLoading = true;
            if (res.status == 200) {
                todos = todos.filter(todo => todo._id == event.detail._id);
                isLoading = false;
            }
        })
    }

    function handleCheckTodo(event) {
        console.log(event.detail.id);
        axios({
            method: "PATCH",
            url: `http://localhost:80/todos/${event.detail.id}`,
            headers: {}
        });
    }

</script>

<style>
    * {
        margin: 0;
    }
    .container {
        margin: 0;
        background-color: orangered;
        height: 100%;
    }

    .todo-input {
        margin-left: 20%;
        font-size: 18px;
    }
</style>

<div class="container">
    <h2>Todo App</h2>
    <input type="text" class="todo-input" placeholder="Ajoutez un todo ..." bind:value={newTodoTitle} on:keydown={addTodo} >
    {#if !isLoading}
        {#if todos.length == 0}
            <p>Aucun todo</p>
        {:else}
            {#each todos as todo}
                <div class="todo-item">
                    <TodoItem {...todo} on:deleteTodo={handleDeleteTodo} on:checkTodo={handleCheckTodo}/>
                </div>
            {/each}
        {/if}
    {:else}
        <p>Chargement ...</p>
    {/if}
    
</div>