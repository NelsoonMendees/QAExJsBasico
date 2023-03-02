const LIST = [
  { id: 1, nome: "Mestre Yoda", avatar: "images/yoda.png" },
  { id: 2, nome: "Luke Skywalker", avatar: "images/luke.png" },
  { id: 3, nome: "Princesa Leia", avatar: "images/leia.png" },
  { id: 4, nome: "Han Solo", avatar: "images/hansolo.png" },
  { id: 5, nome: "Dath Vader", avatar: "images/vader.png" },
  { id: 6, nome: "Chewbacca", avatar: "images/chewbacca.png" },
  { id: 7, nome: "C3pO", avatar: "images/c3po.png" },
  { id: 8, nome: "R2D2", avatar: "images/r2d2.png" },
];

const App = new Vue({
  el: "#app",
  data: {
    title: "Star Wars Lego",
    userName: "Nelson",
    characters: LIST,
    searchName: "",
  },
  methods: {
    like(characterName) {
      alert(`O personagem ${characterName} recebeu um like`);
    },

    search() {
      if (this.searchName === "") {
        return alert("O campo de busca é obrigatório!");
      }
      const list = (this.characters = LIST);

      const result = list.filter((item) => {
        return item.nome === this.searchName;
      });

      if (result.length <= 0) {
        alert("Nenhum registro encontrado!");
      } else {
        this.characters = result;
      }
    },

    remove(id) {
      const list = this.characters;

      const result = list.filter((item) => {
        return item.id !== id;
      });

      this.characters = result;
    },
  },
});