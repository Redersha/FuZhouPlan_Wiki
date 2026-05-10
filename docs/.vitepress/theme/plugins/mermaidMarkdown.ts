export function mermaidMarkdown(md: any) {
  const defaultFence = md.renderer.rules.fence
  md.renderer.rules.fence = (tokens: any[], idx: number, options: any, env: any, self: any) => {
    const token = tokens[idx]
    const info = token.info.trim()
    if (info === 'mermaid') {
      return `<CustomMermaid code="${encodeURIComponent(token.content)}" />`
    }
    if (info === 'mmd') {
      token.info = 'mermaid'
    }
    if (defaultFence) {
      return defaultFence(tokens, idx, options, env, self)
    }
    return self.renderToken(tokens, idx, options)
  }
}
