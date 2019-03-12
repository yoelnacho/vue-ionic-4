<template>

<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <form @submit.prevent="add">
                <input v-model="nuevoItem" name="nuevoItem" placeholder="Name" />
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <ul>
              <li v-for="el in list" :key="el.id">
                <p>
                {{ el.name }} - <strong> {{ el.date }} </strong>
                </p>
              </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import { myMixin } from "../mixins/mixin";

export default {
  name: "Item",
  data() {
    return {
      el: {
        uid: 0,
        name: "",
        date: ""
      }
    };
  },
  mixins: [myMixin]
};
</script>
