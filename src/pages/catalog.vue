<template>
  <div class="p-catalog">
      <Header />
      <Main>
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          :imageId="product.image_public_id"
          :title="product.title"
          :path="product.context"
          :price="product.price"
        />

        <nav class="p-navigation">
          <input type="submit" value="<- Ant" v-on:click="ant"/>
          <input type="submit" value="Prox ->" v-on:click="prox"/>
        </nav>
      </Main>

      <a
       v-for="product in products"
       :key="product.id"
       :href="`https://www.enjoei.com.br/p/${product.slug}-${product.id}`"
      >
       {{ product.title.name }}
    </a>    
  </div>
</template>

<script>
import { anyTypeAnnotation } from '@babel/types'
import axios from 'axios'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import ProductCard from '../components/ProductCard.vue'


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
      number: 1
    }
  },
  watch: {
    number(value) {
      console.log(value)
      this.getData(value)
    }
  },
  methods: {
    prox(e) {
      this.number = this.pagination.next_page
    },
    ant(e) {
      this.number = this.pagination.prev_page
    },
    async requestData(number) {
      try {
        const response = await axios 
          .get(`/api/v5/users/enjoei-pro/products/liked?page=${number}&query=camisa`)
        return response.data
      } catch (error){
        console.log(error)
      }
    },
    async getData(number) {
      const response = await this.requestData(number)
      this.products = response.products
      this.pagination = response.pagination
      console.log(this.pagination)
    }
  },
  mounted() {
   this.getData(this.number)
  }
}
</script>
<style scoped>
  .p-catalog {
    width: 100%;
    height: 100vh;
  }

  .p-navigation {

  }
</style>

