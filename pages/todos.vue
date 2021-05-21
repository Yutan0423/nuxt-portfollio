<template>
  <div class="content-inner">
    <h2 class="content-title">ToDoリスト</h2>
    <form @submit.prevent="add" action="">
      <label for="task">Tasks</label>
      <input
        id="task"
        v-model="name"
        type="text"
        placeholder="Fill in your task!"
      />
      <button class="form-btn">Add Task</button>
    </form>
    <h3 class="content-subtitle">Current Tasks</h3>
    <ul>
      <li class="content-list" v-for="todo in todos" :key="todo.id">
        <span v-if="todo.created">
          <!-- {{todo}} -->
          <div class="content-flex">
            <div style="display: inline-block;">
              <input type="checkbox" :bind="todo.done" @change="toggle(todo)" />
              <span :class="{ done: todo.done }">
                {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
              </span>
            </div>
            <button class="delete-btn" @click="remove(todo.id)">Delete</button>
          </div>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      done: false
    };
  },
  created() {
    this.$store.dispatch("todos/init");
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    }
  },
  computed: {
    todos() {
      // return this.$store.state.todos.todos
      return this.$store.getters["todos/orderedTodos"];
    }
  },
  filters: {
    dateFilter(date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  &-inner {
    max-width: 990px;
    padding: 0 60px;
    margin: 48px auto 64px;
  }
  &-list {
    margin-bottom: 18px;
  }
  &-title {
    margin-bottom: 16px;
  }
  &-subtitle {
    margin-bottom: 16px;
  }
  &-flex {
    display: flex;
    justify-content: space-between;
  }
}
.delete-btn {
  color: #fff;
  background-color: #db4437;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
}
form {
  margin-bottom: 48px;
}
label {
  font-size: 16px;
  font-weight: bold;
  display: block;
}
input {
  font-size: 14px;
  padding: 8px 6px;
  border: 1px solid #cccccc;
  border-radius: 8px;
}
.form-btn {
  color: #fff;
  background-color: #4285f4;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  margin-left: 6%;
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
