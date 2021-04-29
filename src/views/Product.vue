<template>
  <div id="menu" class="fixed bg-white p-5 mt-20 w-full shadow-md ">
    <div class="pt-2 pr-4 w-full flex justify-around">
      <h1 class="uppercase"> 
        <router-link to="/product">View Products</router-link> 
      </h1>
      <h1 class="uppercase">
        <router-link to="/">
           Add Products 
        </router-link>
      </h1>
    </div>
  </div>

  <!-- <footer class="bg-black mt-12">
     <div class="container flex flex-col justify-center p-6 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
      <div class="flex flex-row justify-center space-x-4 mt-6 -mb-6 text-left md:pl-20 md:mt-0 ">
        <div class="w-full px-2 pl-0 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Products
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">NB Sneaker</p>
              </li>
            </nav>
        </div>
        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h1 class="mb-3 text-lg font-bold tracking-widest text-white  uppercase title-font">Collections
              </h1>
              <nav class="mb-8 list-none">
                <li>
                  <p class="text-sm text-white">Nike Air</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">Sperstar NMD</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">574</p>
                </li>
              </nav>
        </div>
        <div class="w-full px-2 pl-10 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Support
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">New Balance</p>
              </li>
            </nav>
        </div>
        <div class="w-full mt-16 pl-2 lg:w-1/4 md:w-1/2">
          <img class="w-24 h-12" alt="logofooter" src="../assets/logo.png" />
        </div>
      </div>
    </div>         
  </footer> -->

</template>

<style>

#menu a {
  font-weight: bold;
  color: #9EAAA7;
}

#menu a.router-link-exact-active {
  color: #FF008C;
}
</style>