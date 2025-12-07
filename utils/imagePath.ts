/**
 * Helper function para corrigir caminhos de imagens no GitHub Pages
 * Se o projeto estiver em um subdiretório (ex: username.github.io/repo-name/),
 * adiciona o basePath automaticamente
 */
export function getImagePath(path: string): string {
  // Se já for uma URL completa (http/https), retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Obtém o basePath da variável de ambiente ou usa string vazia
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Remove o basePath do caminho se já estiver presente (evita duplicação)
  let cleanPath = path;
  if (basePath && path.startsWith(basePath)) {
    cleanPath = path.slice(basePath.length);
  }

  // Garante que o caminho comece com /
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  // Adiciona o basePath ao início
  return `${basePath}${cleanPath}`;
}

