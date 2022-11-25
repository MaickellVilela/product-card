<template>
  <div class="container">
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss">
.container {
  background-color: rgb(235, 235, 235);

  width: 100%;
  max-width: 1184px;
  margin-left: auto;
  margin-right: auto;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: start;
  // gap: 2rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
</style>
