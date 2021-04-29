<template>
  <div id="nav" class="fixed bg-black flex flex-start w-full">
    <img class="ml-4 w-24 h-12" alt="logo" src="./assets/logo.png" />
    <div class="pt-2 pr-4 w-full flex justify-end space-x-2">
      <div class="space-x-4">
      <router-link to="/">HOME</router-link> 
      <router-link to="/product">PRODUCT</router-link> 
      <router-link to="/contact-us">CONTACT US</router-link>
      </div>
    </div>
  </div>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 16px;
  font-size: 20px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #FF008C;
}
</style>
