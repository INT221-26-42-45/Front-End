<template>
  <div class="flex flex-col justify-center">
    <div class="mt-6">
      <h1 class="text-3xl font-semibold uppercase text-darkgray">members</h1>
    </div>


    <div class="flex flex-col md:flex-row items-center mt-2 ml-1">
      <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
        <div class="w-full p-1 md:p-2">
          <base-block>
            <img class="object-cover lg:h-96 w-full py-4 p-2 border-gray-200 " src="../assets/Boong.jpg" />
            <div class="text-center pl-2 p-2">
              <p class="text-lg text-gray-800 font-bold uppercase"> donlawan petcharat </p>
              <p class=" text-lg text-gray-800 font-bold"> 62130500026 </p>
              <p class=" text-xl text-gray-800 font-thin uppercase"> devops & network </p>
            </div>
          </base-block>
        </div>
      </div>

      <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
        <div class=" w-full p-1 md:p-2">
          <base-block>
            <img class="object-cover lg:h-96 w-full py-4 p-2 border-gray-200 " src="../assets/Jam.jpg" />
            <div class="text-center pl-2 p-2">
              <p class="text-lg text-gray-800 font-bold uppercase"> nattima mahapan </p>
              <p class=" text-lg text-gray-800 font-bold"> 62130500042 </p>
              <p class=" text-xl text-gray-800 font-thin uppercase"> back-end & front-end </p>
            </div>
          </base-block>
        </div>
      </div>

      <div class="flex flex-wrap md:flex-row w-full md:w-1/2 lg:w-1/3">
        <div class="w-full p-1 md:p-2">
          <base-block>
            <img class="object-cover lg:h-96 w-full py-4 p-2 border-gray-200 " src="../assets/Ple.jpg" />
            <div class="text-center pl-2 p-2">
              <p class="text-lg text-gray-800 font-bold uppercase"> niraphon jongkraijak </p>
              <p class=" text-lg text-gray-800 font-bold"> 62130500045 </p>
              <p class=" text-xl text-gray-800 font-thin uppercase"> database & front-end </p>
            </div>
          </base-block>
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
