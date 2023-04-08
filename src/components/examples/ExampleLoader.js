import loadable from '@loadable/component';

const LoadableContent = loadable((props) => import(`${props.path}`), {
  fallback: <div>Loading...</div>,
  cacheKey: (props) => `${props.path}`,
});

export default LoadableContent;
