<template>
  <div class="product-card">
    <div class="image-container">
      <img src="https://via.placeholder.com/500" alt="" />
    </div>
    <div class="info-container">
      <div class="title">Easy Feast St Louis Pork Ribs and Whole Chicken</div>
      <div class="details">
        <div class="price">
          $
          <div class="amount">54.99</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-card {
  background-color: white;
  // border: 1px solid red;

  max-width: 100%;

  border-radius: 1rem;

  .image-container {
    max-width: 100%;

    img {
      display: block;
      width: 100%;
      border-radius: 1rem 1rem 0 0;
    }
  }

  .info-container {
    padding: 0.5rem 1rem;

    .title {
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      font-size: 1.5rem;
    }
  }
}
</style>
