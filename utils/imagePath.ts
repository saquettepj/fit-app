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

  // Tenta obter o basePath de várias fontes
  let basePath = '';
  
  // 1. Tenta da variável de ambiente (disponível em build time e runtime se NEXT_PUBLIC_*)
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_PATH) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  }
  // 2. Se não estiver disponível, tenta detectar do window.location (runtime no cliente)
  else if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Remove trailing slash
    const cleanPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    // Se o pathname tem mais de um segmento, o primeiro é provavelmente o basePath
    // Exemplo: /fit-app/ -> basePath = /fit-app
    // Exemplo: /fit-app -> basePath = /fit-app
    const pathParts = cleanPathname.split('/').filter(Boolean);
    if (pathParts.length > 0) {
      const firstPart = pathParts[0];
      // Verifica se não é um arquivo (não tem extensão)
      if (!firstPart.includes('.')) {
        basePath = '/' + firstPart;
      }
    }
  }
  
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
  const finalPath = `${basePath}${cleanPath}`;
  
  return finalPath;
}

