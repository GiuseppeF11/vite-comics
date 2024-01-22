import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //Per dare direttive a livello globale
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
         `@use "src/assets/scss/partials/reset";
          @use "src/assets/scss/partials/variables";
          @use "src/assets/scss/partials/mixins";
         
         `
      }
    }
  }
})
