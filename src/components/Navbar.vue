<template>
    <div id="navbar" :style="cssCustom">
        <router-link to="/">Home</router-link> 
        <router-link to="/history"> Nossa história </router-link> 
        <router-link to="/network">Rede</router-link> 
        <router-link to="/work"> Trabalhe conosco</router-link> 
        <router-link to="/menu">Menu</router-link> 
        <img id="myLogo" :src="img_logo" alt="logo"/>
    </div>
  
</template>

<script>
export default {
    name: "Navbar",
    props:["text_color", "back_color" , "img_logo"],
    computed:{
        cssCustom(){
            return{
                '--mycolor': this.text_color,
                '--myback': this.back_color,
                '--myimg': this.img_logo,

            }
        }
    }

}
</script>

<style scoped src="./Navbar.css">
</style>