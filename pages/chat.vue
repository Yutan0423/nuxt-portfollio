<template>
  <div class="content-inner">
    <h2 class="content-title">Bulletin board</h2>
      <div class="form-inner">
        <form @submit.prevent="add" action="">
            <label for="name">Name</label>
            <input class="form-text" id="name" v-model="name" type="text">
            <label for="message">message</label>
            <textarea class="form-text" name="message" v-model="message" cols="30" rows="6"></textarea>
            <button>Send message</button>
        </form>
      </div>
        <h3 class="content-subtitle">Time Line</h3>
        <ul>
            <li v-for="content in contents" :key="content.id">
                <span v-if="content.created">
                    <span>
                      {{content.created.toDate() | dateFilter}} : {{content.name}} 
                    </span>
                    <hr>
                    <span>
                      {{content.message}}
                    </span>
                    <button @click="remove(content.id)">Delete</button>
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
            message: ''
        }
    },
    created() {
        this.$store.dispatch('chat/init')
    },
    methods: {
        add() {
            this.$store.dispatch('chat/add', [this.name, this.message])
            this.name = ''
            this.message=''
        },
        remove(id) {
            this.$store.dispatch('chat/remove', id)
        }
    },
    computed: {
        contents() {
            // return this.$store.state.todos.todos
            return this.$store.getters['chat/orderedContents']
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
    text-align: center;
    margin-bottom: 16px;
}
.content-subtitle {
    margin-bottom: 16px;
}
.form-inner {
  width: 80%;
  margin: 0 auto;
}
form {
    margin-bottom: 48px;
    text-align: center;
    label {
      display: block;
      text-align-last: left;
    }
    .form-text {
      width: 100%;
      max-width: 100%;
      margin-bottom: 18px;
      border: 1px solid #ddd;
      border-radius: 6px;
      background: #eaedf2;
      font-size: 16px;
      padding: 8px 16px;
    }
    button {
      width: 100%;
      height: 48px; 
      border-radius: 6px;
      font-size: 20px;
      background-color: rgb(29, 161, 242);
      color: #fff;
      border: none;
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


