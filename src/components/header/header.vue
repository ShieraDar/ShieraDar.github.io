<template>
    <nav class="fixed_top">
        <div>
            <img src="../../assets/logo.png" class="logo" alt="" srcset="">
        </div>
        <div class="dropdown" v-on:click="changeMenuStatus">
            <button class="dropbtn">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            </button>
        </div>
        </nav>
        <transition name="fade">
        <div class="nav_list" v-if="showMenu">
            <a href="#product" v-on:click="moveToSpecificArea('product')">Product</a>
            <a href="#about" v-on:click="moveToSpecificArea('about')">About</a>
            <a href="#contact" v-on:click="moveToSpecificArea('contact')">Contact</a>
        </div>
    </transition>
</template>

<script>
import $ from 'jquery';
export default {
    name: 'Header',
    data () {
        return {
            showMenu: false,
        };
    },
    methods: {
        changeMenuStatus(){
            this.showMenu = !this.showMenu;
        },
        moveToSpecificArea(id){
            $('html,body').animate({
                scrollTop: $("."+id).offset().top - 100},
                'slow');
        }
        
    }
}
</script>

<style scoped src="./style.scss"></style>