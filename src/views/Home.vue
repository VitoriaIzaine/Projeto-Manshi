<template>
  <div>
    <div class="home">
      <h1>Bem vindo ao <br> Roberto Manshi</h1>
    </div>
    <cardInfo
      text_title="Tratamento Especial!"
      text_content="O Manshi 
      conquistou o 10º prêmio de Melhor Restaurante Japonês do guia Comer e 
      Beber da Revista Veja Campinas em 2019. Além de típicas receitas japonesas 
      a Casa oferece, também, especialidades diversificadas que permeiam 
      referências tailandesas, chinesas, além de trazer aos pratos, elementos e 
      temperos brasileiros. O espaço, moderno e descontraído, incorpora estilo e 
      design para servir um completo bufê de almoço, festivais completos à noite, 
      pratos à la carte, além de uma temakeria interna, sempre à disposição dos 
      clientes."
      back_color="black"
      text_color="white"
      :imgs="my_imgs"
    />
  </div>
</template>

<script>
import cardInfo from "../components/cardInfo.vue"
export default {
  name: 'Home',
  components:{
    cardInfo
  },
  data(){
    return{
      my_imgs:[]
    }
  },
  methods:{
    async getImagesBackEnd(){
      const request= await fetch("http://localhost:3000/imgback");
      const jsonData = await request.json();
      
      for(let i=0; i<jsonData.length; i++){
        console.log(jsonData[i].source);
        this.my_imgs.push(jsonData[i].source)
      }
      console.log(this.my_imgs);
    }
  },
  mounted(){
    this.getImagesBackEnd();
  }
}
</script>

<style scoped src="./Home.css">

</style>