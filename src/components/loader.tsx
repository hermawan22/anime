import ContentLoader from 'react-content-loader'

const Loader = ({ children, viewBox }: any) => (
  <ContentLoader 
    speed={2}
    viewBox={viewBox}
    backgroundColor="#cccccc"
    foregroundColor="#ecebeb"
  >
    asdf
    {children}
  </ContentLoader>
)

export default Loader;