<template>
  <div class="home">
    <div>
      <img class="inset-x-0 object-cover w-full" alt="group1" src="../assets/Group1.png">
    </div>

  <div class="flex justify-center mt-2">
    <img class="h-18 w-16" alt="scroll" src="../assets/scroll.png"  />
  </div>

  <div class="container mx-auto">
  <div class="flex flex-col md:flex-row items-center mt-2 md:-m-2">
    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <img class="h-full w-full rounded-md" alt="adidas" src="../assets/adidas.png" />
      </div>
    </div>
    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <img class="h-full w-full rounded-md " alt="nike" src="../assets/nike.png" />
      </div>
    </div>
    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <img class="h-full w-full rounded-md " alt="nb" src="../assets/nb.png" />
      </div>
    </div>
  </div>
  </div>

  <div class="flex justify-center mt-2">
    <img class="inset-x-0 pt-6 object-cover w-full" alt="group2" src="../assets/Group2.png"  />
  </div>

  <div class="flex justify-center mt-2">
    <p class="text-3xl text-gray-900 font-extrabold uppercase">recommend </p>
  </div>

  <div class="container mx-auto">
  <div class="flex flex-col md:flex-row items-center mt-2 ml-1">
    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <base-block>
          <img class="object-cover w-full lg:h-36 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/Airmax-90-4.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Nike Air Max 90 </p>
            <p class=" text-sm text-gray-500 font-normal"> 4600 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class=" w-full p-1 md:p-2">
        <base-block>
          <img class="object-cover w-full lg:h-36 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/574-2.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> New Balance 574 </p>
            <p class=" text-sm text-gray-500 font-normal"> 2900 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <base-block>
          <img class="object-cover w-full lg:h-36 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/Air-Flight.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Nike Air Flight 89 </p>
            <p class=" text-sm text-gray-500 font-normal"> 6900 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
      <div class="w-full p-1 md:p-2">
        <base-block>
          <img class="object-cover w-full lg:h-36 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/NMDR1-1.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Adidas NMD R1 </p>
            <p class=" text-sm text-gray-500 font-normal"> 4600 THB </p>
          </div>
        </base-block>
      </div>
    </div>
  </div>
  </div>

</div>


  <footer class="bg-black mt-12">
     <div class="container flex flex-col justify-center p-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-left md:pl-20 md:mt-0 md:text-left">
        <div class="w-full px-4 pl-0 lg:w-1/4 md:w-1/2">
            <router-link to="/product">
              <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font no-underline">Products
              </h1>
            </router-link>
            <nav class="list-none w-full">
              <router-link to="/product">
                <li>
                  <p class="text-sm text-white break-normal no-underline">Nike Sneaker</p>
                </li>
              </router-link>
              <router-link to="/product">
                <li>
                  <p class="text-sm mt-2 text-white">Adidas Sneaker</p>
                </li>
              </router-link>
              <router-link to="/product">
                <li>
                  <p class="text-sm mt-2 text-white">NB Sneaker</p>
                </li>
              </router-link>
            </nav>
        </div>
        <div class="w-full px-4 pl-0  lg:w-1/4 md:w-1/2">
            <router-link to="/product">
              <h1 class="mb-3 text-lg font-bold tracking-widest text-white  uppercase title-font">Collections
              </h1>
            </router-link>
              <nav class="mb-8 list-none">
                <router-link to="/product">
                <li>
                    <p class="text-sm text-white">Nike Air</p>
                </li>
                </router-link>
                <router-link to="/product">
                  <li>
                    <p class="text-sm mt-2 text-white">Sperstar NMD</p>
                  </li>
                </router-link>
                <router-link to="/product">
                <li>
                    <p class="text-sm mt-2 text-white">574</p>
                </li>
                </router-link>
              </nav>
        </div>
        <div class="w-full px-4 pl-0 lg:w-1/4 md:w-1/2">
          <router-link to="/contact-us">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Support
            </h1>
          </router-link>
            <nav class="mb-8 list-none">
            <router-link to="/contact-us">
              <li>
                <p class="text-sm text-white">Nike</p>
              </li>
            </router-link>
            <router-link to="/contact-us">
              <li>
                <p class="text-sm mt-2 text-white">Adidas</p>
              </li>
            </router-link>
            <router-link to="/contact-us">
              <li>
                <p class="text-sm mt-2 text-white">New Balance</p>
              </li>
            </router-link>
            </nav>
        </div>
        <div class="w-full pl-2 lg:w-1/4 md:w-1/2">
          <img class="w-24 h-12 lg:mt-20 md:mt-8" alt="logofooter" src="../assets/logo.png" />
        </div>
      </div>
    </div>         
  </footer>


</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
