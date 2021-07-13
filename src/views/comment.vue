<template>
  <div class="container">
    <div class="jumbotron">
      <label class="mr-5">comment</label>
      <input type="text" placeholder="write your comment" v-model="text" name="comment">
      <button class="ml-5 btn btn-dark" @click.prevent="addComment"> Comment </button>
    </div>
    <div>
      <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">comment</th>
          <th scope="col">user</th>
          <th scope="col">time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="comment in comments" :key="comment">
          <th scope="row">{{comment.idcomment}}</th>
          <td>{{comment.textcomment}}</td>
          <td>{{comment.userid}}</td>
          <td>{{comment.tempscomment}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data () {
    return {
      text : '',
      news_id : '',
      comments : []
    }
  },
  methods :{
    addComment (){
      const data = {
        text : this.text,
        news_id : 25987615
      }
      axios.post('addComment',data).then(response =>{
        console.log(response);
        this.text = '';
        this.news_id = '';
        axios.get('getComments').then(response =>{
          this.comments = response.data;
        });
      });
    }
  },
  mounted(){
    axios.get('getComments').then(response =>{
      this.comments = response.data;
    });


  }
}
</script>


<style>

</style>
