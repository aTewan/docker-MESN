<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let _id;
    export let title;
    export let statut;
    //export let __v;

    const dispatch = createEventDispatcher();

    function deleteTodo(e) {
        dispatch('deleteTodo', {
            id: _id
        });
    }

    function checkTodo() {
        dispatch('checkTodo', {
            id: _id
        });
    }
</script>

<style>
    .todo-item {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        animation-duration: 0.3s;
    }

    .remove-item {
        cursor: pointer;
        margin-left: 15px;
    }

    .remove-item:hover {
        color: lightseagreen; 
    }

    .todo-item-left {
        display: flex;
        align-items: center;
    }

    .todo-item-label {
        border: 1px solid white;
        margin-left: 12px;
    }

    .completed {
        text-decoration: line-through;
        color: grey;
    }
</style>

<div class="todo-item">
    <div class="todo-item-left" transition:fly="{{ y: 20, duration: 300 }}">
        <input type="checkbox" bind:checked={statut} on:change={checkTodo}>
        <div class="todo-item-label" class:completed={statut}>{title}</div>
    </div>
    <div class="remove-item" on:click={deleteTodo}>
        x
    </div>
</div>