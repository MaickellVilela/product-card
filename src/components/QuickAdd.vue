<template>
  <div class="quick-add" :class="[isEmpty ? 'empty' : '']">
    <div class="quick-add__input">
      <button class="quick-add__button decrement" @click="decrement">
        <svg
          v-if="isOne"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1160_2613)">
            <path
              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM9 9H15C15.55 9 16 9.45 16 10V18C16 18.55 15.55 19 15 19H9C8.45 19 8 18.55 8 18V10C8 9.45 8.45 9 9 9ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1160_2613">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          v-if="!isOne"
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
              class="add-icon"
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
        <span class="add-text">Add</span>
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
  computed: {
    isEmpty() {
      return this.value === 0;
    },
    isOne() {
      return this.value === 1;
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
  max-width: 110px;
  border: 1px solid $color-brand-primary;
  border-radius: $button-border-radius;
  overflow: hidden;

  * {
    transition: all 0.3s ease-in-out;
  }

  &.empty {
    .quick-add__input-field {
      width: 0;
      padding-left: 0;
      padding-right: 0;
      flex-basis: 0;
      border-width: 0;
    }

    .quick-add__button {
      &.decrement {
        width: 0;
        padding-left: 0;
        padding-right: 0;
        border-width: 0;
      }

      &.increment {
        border-top-left-radius: $button-border-radius;
        border-bottom-left-radius: $button-border-radius;
        width: px-to-rem(82px);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background-color: $color-shades-light;

        .add-icon {
          fill: $color-brand-primary;
        }

        .add-text {
          font-size: 1rem;
          line-height: 100%;
          color: $color-brand-primary;
          overflow: hidden;
          width: px-to-rem(32px);
        }
      }
    }
  }
}

.quick-add__input {
  display: flex;
  flex-wrap: nowrap;
}

// input
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
}

// Button
.quick-add__button {
  z-index: 1;
  width: $button-size;
  height: $button-size;
  padding: $button-padding;
  background-color: $color-brand-primary;
  border: none;
  font-size: px-to-rem(24px);
  font-weight: 700;
  color: $color-shades-light;
  cursor: pointer;
  outline: none;
  overflow: hidden;

  svg {
    min-width: 24px;
    min-height: 24px;
  }

  &.decrement {
  }

  &.increment {
    .add-text {
      font-size: 1rem;
      line-height: 100%;
      overflow: hidden;
      width: 0;
    }
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
