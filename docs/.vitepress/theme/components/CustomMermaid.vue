<template>
  <div ref="container" class="mermaid"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  code: string
}>()

const container = ref<HTMLDivElement>()

let observer: MutationObserver | null = null

const render = async () => {
  if (!container.value) return
  try {
    const { default: mermaid } = await import('mermaid')
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
    })
    const { svg } = await mermaid.render('m-' + Math.random().toString(36).slice(2, 8), decodeURIComponent(props.code))
    container.value.innerHTML = svg
  } catch (e) {
    container.value.innerHTML = `<pre style="color:red;overflow:auto">Mermaid Error: ${e}</pre>`
  }
}

onMounted(() => {
  render()
  observer = new MutationObserver(() => render())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>
