<template>
  <div class="p-catalog">
    <Header />
      <div class="p-catalog__search">
        <input v-model="item" class="p-catalog__search-input" type="text" name="search" placeholder="Busca" />
        <button class="p-catalog__search-button" type="submit" v-on:click="fetchItem"> <img class="p-catalog__search-button-search" :src="search"/></button>
      </div>
    <Main>
      <ProductCard 
        v-for="(product, index) in products" 
        :key="index"
        :imageId="product.image_public_id"
        :title="product.title"
        :path="product.context"
        :price="product.price"
      />
    </Main>
    <div class="p-catalog__navigation">
      <nav class="p-catalog__navigation-nav">
        <button class="p-catalog__navigation-nav-left" type="submit" v-on:click="previous"><img class="p-catalog__navigation-nav-left-arrow" :src="left"/> <p>anterior</p></button>
        <button class="p-catalog__navigation-nav-right" type="submit" v-on:click="next"> <p>próximo</p> <img class="p-catalog__navigation-nav-right-arrow" :src="rigth"/></button>
      </nav>
    </div>
  </div>
</template>

<script>
import { anyTypeAnnotation } from '@babel/types'
import axios from 'axios'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import ProductCard from '../components/ProductCard.vue'
import rigth from '../assets/arrow-right-icon.svg'
import left from '../assets/arrow-left-icon.svg'
import search from '../assets/search-icon.svg'

  export default {
  components: {
    ProductCard,
    Header,
    Main
  },
  pageTitle() {
    return 'Catalgo'
  },
  data() {
    return {
      products: [],
      paginations: [],
      number: 1,
      item: '',
      rigth,
      left,
      search
    }
  },
  watch: {
    number(value) {
      this.getData(value)
    }
  },
  methods: {
    next(e) {
      this.number = this.pagination.next_page
    },
    previous(e) {
      this.number = this.pagination.prev_page
    },
    async fetchItem(e) {
      await this.getData(this.number, this.item)
    },
    async requestData(number, item) {
      try {
        const response = await axios 
          .get(`/api/v5/users/enjoei-pro/products/liked?page=${number}&query=${item}`)
        return response.data
      } catch (error){
        console.log(error)
      }
    },
    async getData(number, item) {
      const response = await this.requestData(number, item)
      this.products = response.products
      this.pagination = response.pagination
      console.log(this.pagination)
      console.log(this.item)
    }
  },
  mounted() {
   this.getData(this.number, this.item)
  }
}
</script>
<style scoped>
  .p-catalog {
    width: 100%;
    height: 100vh;
  }

  .p-catalog__search {
    display: flex;
    border: 1px solid var(--color-gray-2);
    width: 240px;
    height: 42px;
    border-radius: 4px;
    position: absolute;
    left: 1104px;
    top: 94px;
  }

  .p-catalog__search-button{
    position: absolute;
    border-color: var(--color-white);
    background-color: var(--color-white);
    border: 0px;
    padding-top: 8px;
    left: 199px;
  }

  .p-catalog__search-button :active {
    opacity: 0.4;
  }

  .p-catalog__search-input{
    position: absolute;
    margin-top: 7px;
    left: 12px;
    background-color: var(--color-white);
    border: 0px;
    font-family: 'Proxima Nova';
    font-weight: var(--font-weight-extra-bold);
    color: #CAC7C5;
    outline: 0;
  }

  .p-catalog__search-button-search{
    width: 25px;
    height: 25px;
    display: flex;
  }
  .p-catalog__navigation {
    margin: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .p-catalog__navigation-nav {
    margin: 40px;
    display: flex;
  }

  .p-catalog__navigation-nav button{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 132px;
    height: 48px;
    padding: 0;
    background-color: var(--color-white);
    border: 1.5px solid var(--color-gray-2);
    font-family: 'Proxima Nova';
    font-weight: var(--font-weight-bold);
    border-radius: 4px;
    font-size: 16px;
  }

   .p-catalog__navigation-nav-left {
      color: var(--color-gray-3);
      margin-right: 12px;
   }

    .p-catalog__navigation-nav-right {
      color: var(--color-pink);
      margin-left: 12px;
   }

   .p-catalog__navigation-nav-left p {
      margin-left: 51px;
      position: absolute;
   }

   .p-catalog__navigation-nav-right p {
      margin-left: 24px;
      position: absolute;
   }

   .p-catalog__navigation-nav-left-arrow {
      width: 19px;
      height: 13px;
      margin-left: 26px;
      position: absolute;
   }

    .p-catalog__navigation-nav-right-arrow {
      width: 19px;
      height: 13px;
      margin-left: 90px;
      position: absolute;
   }

    .p-catalog__navigation-nav button:active {
      background-color: var(--color-gray-2);
      border-color: var(--color-gray-3);
    }

    @media (max-width: 699px){
      .p-catalog__search {
        width: 335px;
        height: 42px;
        border-radius: 4px;
        position: absolute;
        left: 100px;
        top: 94px;
      }
      .p-catalog__search-button{
        left: 296px;
      }
      .p-catalog__navigation-nav-left {
        margin-right: 36px;
      }

      .p-catalog__navigation-nav-right {
        margin-left: 36px;
      }
      
    } 

</style>

