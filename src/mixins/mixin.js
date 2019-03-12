export const myMixin = {
  data() {
    return {
      list: [{ uid: 0, name: "hola", date: "27/10/2018 13:42:40" }],
      nuevoItem: null
    };
  },
  methods: {
    add() {
      this.list.unshift({
        uid: Math.floor(new Date().valueOf() * Math.random()),
        name: this.nuevoItem,
        date: new Date(Date.now()).toLocaleString()
      });
      this.nuevoItem = null;
    }
  }
};
