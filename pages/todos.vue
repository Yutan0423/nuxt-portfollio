<template>
    <div class="content-inner">
        <h2 class="content-title">ToDoリスト</h2>
        <form @submit.prevent="add" action="">
            <label for="task">Tasks</label>
            <input id="task" v-model="name" type="text">
            <button>Add Task</button>
        </form>
        <h3 class="content-subtitle">Current Tasks</h3>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <span v-if="todo.created">
                    <input type="checkbox" :bind="todo.done" @change="toggle(todo)">
                    <!-- {{todo}} -->
                    <span :class="{done: todo.done}">
                        {{todo.name}} {{todo.created.toDate() | dateFilter}}
                    </span>
                    <button @click="remove(todo.id)">Delete</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            name: '',
            done: false
        }
    },
    created() {
        this.$store.dispatch('todos/init')
    },
    methods: {
        add() {
            this.$store.dispatch('todos/add', this.name)
            this.name = ''
        },
        remove(id) {
            this.$store.dispatch('todos/remove', id)
        },
        toggle(todo) {
            this.$store.dispatch('todos/toggle', todo)
        }
    },
    computed: {
        todos() {
            // return this.$store.state.todos.todos
            return this.$store.getters['todos/orderedTodos']
        }
    },
    filters: {
        dateFilter(date) {
            return moment(date).format('YYYY/MM/DD HH:mm:ss')
        }
    }
}
</script>

<style lang="scss" scoped>
.content-inner {
  max-width: 990px;
  padding: 0 60px;
  margin: 48px auto 64px;
}
.content-title {
    margin-bottom: 16px;
}
.content-subtitle {
    margin-bottom: 16px;
}
form {
    margin-bottom: 48px;
    label {
        display: block;
    }
}
ul {
    padding: 0;
    li {
        list-style: none;
        margin-bottom: 8px;
        span > span.done {
            text-decoration: line-through;
        }
    }
}
@media screen and (max-width: 768px) {
    .content-inner {
        padding: 0 30px;
    }
}
</style>


