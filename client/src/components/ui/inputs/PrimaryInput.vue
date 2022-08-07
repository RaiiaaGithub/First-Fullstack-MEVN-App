<template>
  <div class="input">
      <input
        ref="myInput"
        :placeholder="holder" 
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <div class="icon" v-if="icon">
        <font-awesome-icon :icon="faIcon"/>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      holder: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
      faIcon: {
        type: String,
        default: '',
      },
    },
    data() {
      return { icon: this.faIcon }
    },
    mounted() {
      if (this.faIcon) {
        const input = this.$refs.myInput
        input.style.padding = '.5em 1em .5em 2em'
      }
    }
  }
</script>

<style scoped>
  .input {
    position: relative;
  }

  .icon {
    position: absolute;
    top: 9px;
    left: .5rem;
    color: var(--color-dark);
  }
  input:focus + .icon {
    color: var(--color-primary);
  }

  input {
    font-size: 1rem;
    padding: 0.5em 1em;
    border-radius: var(--border-radius);
    border: none;
    outline: 2px solid var(--color-dark);
    color: var(--color-dark);
    transition: outline 100ms;

    width: 100%;
  }

  input:hover {
    outline: 2px solid var(--color-primary);
  }

  input:focus {
    outline: 2px solid var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 0 .5rem .1rem var(--color-primary);
  }
</style>