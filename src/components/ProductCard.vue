<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.img" alt="" />
    </div>
    <div class="info-container">
      <div class="title">{{ product.title }}</div>
      <div class="details">
        <div class="price">
          <span>$</span>
          <div class="amount">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    options: Object,
    index: Number,
  },
};
</script>

<style lang="scss">
$title-text-size: 1.5rem;
$price-text-size: $title-text-size;

$color-shades-80: #333;
$color-shades-70: #565656;
$color-shades-60: #828282;

.product-card {
  background-color: white;
  max-width: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  .image-container {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    max-width: 100%;

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 1rem 1rem 0 0;
    }
  }

  .info-container {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: 0.5rem;
    flex-grow: 1;

    .title {
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      flex-grow: 1;

      font-size: $title-text-size;
      color: $color-shades-80;
    }

    .price {
      font-size: $price-text-size;
      color: $color-shades-60;
      text-align: right;

      .amount {
        font-weight: 700;
        display: inline-block;
        color: $color-shades-70;
      }
    }
  }
}
</style>
