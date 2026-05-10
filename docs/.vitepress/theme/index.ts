import DefaultTheme from 'vitepress/theme'
import './index.css'
import CustomMermaid from './components/CustomMermaid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomMermaid', CustomMermaid)
  }
}
