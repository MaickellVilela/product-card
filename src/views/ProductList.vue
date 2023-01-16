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
@import "../assets/global-styles.scss";

.container {
  // contentainer width
  width: 100%;

  // centering
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include up-mobile {
    // contentainer width
    max-width: 1440px;

    // grid
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    gap: 2rem;
  }
}
</style>
