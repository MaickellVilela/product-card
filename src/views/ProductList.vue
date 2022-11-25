<template>
  <div class="container">
    <ProductCard
      v-for="(product, index) in PRODUCTS"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";
import PRODUCTS from "@/mocks/products";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data: function () {
    return {
      PRODUCTS,
    };
  },
};
</script>

<style lang="scss">
.container {
  background-color: rgb(235, 235, 235);

  // contentainer width
  width: 100%;
  max-width: 1184px;

  // centering
  margin-left: auto;
  margin-right: auto;

  // grid
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  // breakpoints
}
</style>
