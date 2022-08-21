<template>
  <div class="p-catalog">
      <Header />
      <Main>
        <Card 
          v-for="(product, index) in products" 
          :key="index"
          :imageId="product.image_public_id"
          :title="product.title"
          :path="product.context"
          :price="product.price"
        />
      </Main>
   <!-- <a
       v-for="product in products"
       :key="product.id"
       :href="`https://www.enjoei.com.br/p/${product.slug}-${product.id}`"
     >
       {{ product.title.name }}
    </a>-->
  </div>
</template>

<script>
import axios from 'axios'
import productCard from '../components/product-card.vue'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Card from '../components/product-card.vue'


  export default {
  components: {
    productCard,
    Header,
    Main,
    Card
},
  data() {
    return {
      products: []
    }
  },
  created() {
    axios
      .get('/api/v5/users/enjoei-pro/products/liked?page=1&query=camisa')
      .then((res) => {
        console.log( res.data.products)
        this.products = res.data.products
        console.log(this.products)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  }
</script>
<style scoped>
  .p-catalog {
    width: 100%;
    height: 100vh;
  }
</style>

