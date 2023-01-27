<template>
  <div class="">
    <div class="config">
      <input
        id="showRestaurantName"
        type="checkbox"
        v-model="showRestaurantName"
      />
      <label for="showRestaurantName">Show restaurant name</label>
    </div>
    <div class="container">
      <ProductCard
        v-for="(product, index) in PRODUCTS"
        :key="index"
        :product="product"
        :showRestaurantName="showRestaurantName"
      />
    </div>
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
      showRestaurantName: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/global-styles.scss";

// ignore this code, this is an example
.config {
  display: flex;
  gap: 0.25rem;
  padding: px-to-rem(24px);
}

.container {
  // contentainer width
  width: 100%;
  padding: px-to-rem(8px);

  // centering
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include up-mobile {
    // contentainer width
    max-width: 1440px;
    padding: px-to-rem(32px);

    // grid
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(224px, 1fr));
    gap: 2rem;
  }
}
</style>
