const buildSuffix = (url?: {query?: Record<string, string>, hash?: string}) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash, path: `/login${buildSuffix(url)}` })
  },
  "signup": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signup' as const, hash: url?.hash, path: `/signup${buildSuffix(url)}` })
  },
  "top": {
    $url: (url?: { hash?: string }) => ({ pathname: '/top' as const, hash: url?.hash, path: `/top${buildSuffix(url)}` })
  },
  "setting": {
    $url: (url?: { hash?: string }) => ({ pathname: '/setting' as const, hash: url?.hash, path: `/setting${buildSuffix(url)}` })
  },
};

export type PagesPath = typeof pagesPath;
