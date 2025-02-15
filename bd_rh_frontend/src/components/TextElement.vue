<template>
  <div class="form-group">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      :class="['form-control', sizeClass]"
      :placeholder="placeholder"
      :required="required"
      v-model="localValue"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: "TextElement",
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String, // 'sm', 'lg' ou vazio
      default: "",
    },
    // Para permitir v-model (Vue 3)
    modelValue: {
      type: [String, Number, null],
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      localValue: this.modelValue, // para sincronizar internamente
    };
  },
  computed: {
    sizeClass() {
      // Retorna classes Bootstrap conforme 'sm' ou 'lg'
      if (this.size === "sm") return "form-control-sm";
      if (this.size === "lg") return "form-control-lg";
      return "";
    },
  },
  watch: {
    // Caso o parent atualize de fora
    modelValue(newVal) {
      this.localValue = newVal;
    },
  },
  methods: {
    onInput() {
      // emitir evento para atualizar o parent
      this.$emit("update:modelValue", this.localValue);
    },
  },
};
</script>

<style scoped>
/* Ajustes adicionais, se quiseres */
</style>
