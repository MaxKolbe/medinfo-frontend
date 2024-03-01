import type { MEDIA_QUERY_LOOKUP } from "./mediaQueryStore.utils";

export type MediaQueryStore = {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;

	actions: {
		setQuery: (query: keyof typeof MEDIA_QUERY_LOOKUP) => () => void;
		initQueryListeners: () => void;
	};
};

export type SelectorFn<TState> = (state: MediaQueryStore) => TState;
