import createCache from '@emotion/cache';
import type { EmotionCache } from '@emotion/utils';

const createEmotionCache: () => EmotionCache = (): EmotionCache => {
  return createCache({ key: 'mui' });
};

export default createEmotionCache;
