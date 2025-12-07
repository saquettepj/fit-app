/**
 * Helper function para corrigir caminhos de imagens no GitHub Pages
 * Solução baseada em: https://stackoverflow.com/questions/72851216/why-public-image-is-not-rendered-in-nextjs-when-published-to-github-pages
 * 
 * O problema: caminhos relativos não funcionam corretamente no GitHub Pages quando há basePath
 * A solução: sempre usar caminhos absolutos que incluem o basePath
 */
export function getImagePath(path: string): string {
  // Se já for uma URL completa (http/https), retorna como está
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Obtém o basePath da variável de ambiente
  // No cliente, também tenta obter do window.location se necessário
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Se estiver no cliente e basePath não estiver definido, tenta inferir do pathname
  if (typeof window !== 'undefined' && !basePath) {
    const pathname = window.location.pathname;
    // Se o pathname contém mais de uma barra, provavelmente há um basePath
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && pathname !== '/') {
      // Pega o primeiro segmento como basePath (ex: /fit)
      basePath = `/${pathParts[0]}`;
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

  // Remove barra duplicada se basePath terminar com / e cleanPath começar com /
  if (basePath.endsWith('/') && cleanPath.startsWith('/')) {
    cleanPath = cleanPath.slice(1);
  }

  // Retorna caminho absoluto com basePath
  // Sempre usa caminho absoluto para funcionar no GitHub Pages
  return `${basePath}${cleanPath}`;
}

