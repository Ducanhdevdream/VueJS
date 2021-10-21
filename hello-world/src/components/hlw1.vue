<template>
    <div class="infoWrap">
      <div class="infoLabel">
        Hello {{username}}
        <h3>task list</h3>
        <ul>
          <li v-for="item in doneTodos" :key="item.id">{{item.text}}</li>
        </ul>
        <h3>total task done: {{doneTodosCount}}</h3>
        <h3>task 3: {{gettodobyId(3)}}</h3>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: "Welcome",
  computed: {
      ...mapState([
        'username',
        'todo'
      ]),
      ...mapGetters([
        'doneTodos',
        'doneTodosCount',
        'gettodobyId'
      ])
    }

}
</script> 
  
<style scoped lang="scss">
    .infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
</style>