<template>
  <div id="nav" class="bg-black relative select-none bg-grey md:flex md:items-stretch w-full">
    <router-link to="/">
      <img class="ml-4 w-24 h-12 mt-2" alt="logo" src="./assets/logo.png" />
    </router-link>

    <div class=" pr-4 md:flex md:items-stretch md:flex-no-shrink md:flex-grow">
      <div class="md:flex md:items-stretch md:justify-end ml-auto">
        <div class="flex-no-grow flex-no-shrink py-2 px-4 leading-normal text-white no-underline flex items-center">
          <router-link to="/">HOME</router-link> 
        </div>
        <div class="flex-no-grow flex-no-shrink py-2 px-4 leading-normal text-white no-underline flex items-center">
          <router-link to="/product">PRODUCT</router-link>
        </div>
        <div class="flex-no-grow flex-no-shrink py-2 px-4 leading-normal text-white no-underline flex items-center"> 
          <router-link to="/contact-us">CONTACT US</router-link>
        </div>
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
  padding: 18px;
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
