import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export type RoutePath = '/' | '/reserve' | '/thanks';

interface RouterContextValue {
  route: RoutePath;
  navigate: (next: RoutePath, options?: { replace?: boolean; scroll?: boolean }) => void;
}

const RouterContext = createContext<RouterContextValue | undefined>(undefined);

const HASH_PREFIX = '#';

const normalizePath = (pathname: string): RoutePath => {
  if (pathname.endsWith('/reserve')) return '/reserve';
  if (pathname.endsWith('/thanks')) return '/thanks';
  return '/';
};

const normalizeHash = (hash: string): RoutePath => {
  if (!hash) return '/';
  const cleaned = hash.startsWith(HASH_PREFIX) ? hash.substring(1) : hash;
  switch (cleaned) {
    case '/reserve':
      return '/reserve';
    case '/thanks':
      return '/thanks';
    default:
      return '/';
  }
};

const resolveInitialRoute = (): RoutePath => {
  const { hash, pathname } = window.location;
  if (hash) {
    return normalizeHash(hash);
  }
  return normalizePath(pathname);
};

const setHash = (route: RoutePath, replace = false) => {
  const nextHash = route === '/' ? '' : `/${route.substring(1)}`;
  if (replace) {
    const { pathname, search } = window.location;
    window.history.replaceState({}, '', `${pathname}${search}${nextHash ? `${HASH_PREFIX}${nextHash}` : ''}`);
  } else {
    window.location.hash = nextHash;
  }
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RoutePath>(() => resolveInitialRoute());
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (isNavigatingRef.current) {
        isNavigatingRef.current = false;
        return;
      }
      setRoute(resolveInitialRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigate = useCallback<RouterContextValue['navigate']>((next, options) => {
    const { replace = false, scroll = true } = options || {};
    isNavigatingRef.current = true;
    setHash(next, replace);
    setRoute(next);
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const value = useMemo(() => ({ route, navigate }), [route, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useRouter = (): RouterContextValue => {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return ctx;
};

export const useRoutePath = (): RoutePath => useRouter().route;

export const useNavigate = (): RouterContextValue['navigate'] => useRouter().navigate;
