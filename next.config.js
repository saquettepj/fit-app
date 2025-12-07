/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuração para GitHub Pages - ajuste o basePath se necessário
  // Se o repositório for "fit", o basePath será "/fit"
  // Se for um repositório de usuário (username.github.io), deixe basePath vazio ou undefined
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    domains: ['images.unsplash.com', 'media.giphy.com', 'gifdotreino.com'],
    // unoptimized: true é necessário apenas para export estático (GitHub Pages)
    unoptimized: process.env.NEXT_PUBLIC_EXPORT === 'true',
  },
  // Configuração para export estático (GitHub Pages) - apenas se NEXT_PUBLIC_EXPORT=true
  ...(process.env.NEXT_PUBLIC_EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
  }),
}

module.exports = nextConfig

