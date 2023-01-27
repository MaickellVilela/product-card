<template>
  <div class="quick-add">
    <div class="quick-add__input">
      <button class="quick-add__button decrement" @click="decrement">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1160_2639)">
            <path
              d="M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1160_2639">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <input
        class="quick-add__input-field"
        type="number"
        min="0"
        :value="value"
      />
      <button class="quick-add__button increment" @click="increment">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1160_2643)">
            <path
              d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1160_2643">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickAdd",
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    increment() {
      this.value++;
      console.log(this.value);
    },
    decrement() {
      if (this.value > 0) {
        this.value--;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/global-styles.scss";

$button-size: px-to-rem(40px);
$input-width: px-to-rem(30px);
$button-border-radius: 0.5rem;
$button-padding: 0.5rem;

.quick-add {
  width: 110px;
}

.quick-add__input {
  display: flex;
  flex-wrap: nowrap;
}

.quick-add__input-field {
  flex: 0 1 $input-width;
  appearance: none;
  min-width: 0;
  text-align: center;
  background: $color-brand-primary;
  border: 1px solid $color-brand-primary;
  color: $color-shades-light;
  user-select: none;
  pointer-events: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  z-index: 2;
  overflow: visible;
}

.quick-add__button {
  z-index: 1;
  width: $button-size;
  height: $button-size;
  padding: $button-padding;
  border: 1px solid $color-brand-primary;
  background-color: $color-brand-primary;
  font-size: px-to-rem(24px);
  font-weight: 700;
  color: $color-shades-light;
  cursor: pointer;
  outline: none;

  &.decrement {
    border-top-left-radius: $button-border-radius;
    border-bottom-left-radius: $button-border-radius;
  }

  &.increment {
    border-top-right-radius: $button-border-radius;
    border-bottom-right-radius: $button-border-radius;
  }
}

// To remove the default arrows from the input field
/* Chrome, Safari, Edge, Opera */
.quick-add__input-field::-webkit-outer-spin-button,
.quick-add__input-field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.quick-add__input-field[type="number"] {
  -moz-appearance: textfield;
}
</style>
