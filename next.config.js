/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuração para GitHub Pages
  // O basePath será injetado automaticamente pelo GitHub Actions ou definido via env
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['images.unsplash.com', 'media.giphy.com', 'gifdotreino.com'],
    // unoptimized: true é necessário para export estático (GitHub Pages)
    unoptimized: true,
  },
  // Configuração para export estático (GitHub Pages)
  // Detecta se está rodando no GitHub Actions ou se NEXT_PUBLIC_EXPORT está definido
  ...((process.env.NEXT_PUBLIC_EXPORT === 'true' || process.env.GITHUB_ACTIONS === 'true') && {
    output: 'export',
    trailingSlash: true,
  }),
}

module.exports = nextConfig

