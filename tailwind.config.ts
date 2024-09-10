import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  preflight: false,
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        sm: '12px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px'
      },
      colors: {}
    }
  },
  plugins: [formsPlugin]
})
