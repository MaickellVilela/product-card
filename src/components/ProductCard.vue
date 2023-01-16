<template>
  <div class="product-card" :class="{ __unavailable: !product.available }">
    <div class="image-container">
      <img :src="product.img" alt="" />
      <span
        class="tag"
        :class="{
          'available-later': product.availabilityTag.type == 'availableLater',
          'available-at': product.availabilityTag.type == 'availableAt',
          'available-tomorrow':
            product.availabilityTag.type == 'availableTomorrow',
          'unavailable-class': product.availabilityTag.type == 'unavailable',
          'sold-out': product.availabilityTag.type == 'soldOut',
        }"
        >{{ product.availabilityTag.label }}</span
      >
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
@import "../assets/global-styles.scss";

$title-text-size: 1.5rem;
$price-text-size: $title-text-size;

$color-shades-80: #333;
$color-shades-70: rgba(0, 0, 0, 0.66);
$color-shades-60: #828282;
$color-shades-40: rgba(0, 0, 0, 0.25);
$color-aux-a: #903ae0;
$color-aux-b: #19917b;
$color-aux-c: #ce3f1d;

$mobile-img-size: 128px;

.product-card {
  background-color: white;
  max-width: 100%;
  border-radius: 0.5rem;
  display: flex;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.16));

  @include up-mobile {
    flex-direction: column;
    border-radius: 1rem;
  }

  &.__unavailable {
    .image-container {
      img {
        filter: opacity(0.5) saturate(0);
      }

      .tag {
        display: block;
      }
    }

    .info-container {
      .title {
        color: $color-shades-60;
      }

      .price,
      .price .amount {
        color: $color-shades-40;
      }
    }
  }

  .image-container {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: $mobile-img-size;
    height: $mobile-img-size;
    position: relative;

    @include up-mobile {
      width: 100%;
      max-width: 100%;
      height: auto;
    }

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 0.5rem 0 0 0.5rem;

      @include up-mobile {
        border-radius: 1rem 1rem 0 0;
      }
    }

    .tag {
      display: none;

      position: absolute;
      top: 0;
      right: 0;
      max-width: 100%;

      color: white;
      background-color: gray;

      border-top-right-radius: 0;
      border-bottom-left-radius: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.5rem;

      @include up-mobile {
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        font-weight: 400;
      }
    }

    .available-later {
      background-color: $color-aux-a;
    }

    .available-at,
    .available-tomorrow {
      background-color: $color-aux-b;
    }

    .sold-out,
    .unavailable-class {
      background-color: $color-aux-c;
    }
  }

  .info-container {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    gap: 0.5rem;
    flex-grow: 1;

    .title {
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      flex-grow: 0;

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
