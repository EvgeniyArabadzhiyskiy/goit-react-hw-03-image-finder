import { createPortal } from 'react-dom';
import { Circles } from 'react-loader-spinner';
import { Overlay } from 'components/Overlay/Overlay.styled';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <Overlay>
      <Circles color="#ff0095" height={300} width={300} />
    </Overlay>,
    loaderRoot
  );
};

export default Loader;
