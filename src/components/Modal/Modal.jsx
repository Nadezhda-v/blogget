import style from './Modal.module.css';
import { SvgIcon } from '../../UI/Svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import useCommentsData from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';

export const Modal = ({ id, closeModal }) => {
  const overlayRef = useRef(null);
  const [[post, comments]] = useCommentsData(id);

  const handleCloseOverlay = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      closeModal();
    }
  };

  const handleButtonClose = () => {
    closeModal();
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseOverlay);
    document.addEventListener('keydown', handleCloseOverlay);

    return () => {
      document.removeEventListener('click', handleCloseOverlay);
      document.removeEventListener('keydown', handleCloseOverlay);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {post && comments ? (
          <>
            <h2 className={style.title}>{post.title}</h2>
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank'
                    }
                  }
                }
              }}>
                {post.selftext}
              </Markdown>
            </div>

            <p className={style.author}>{post.author}</p>

            <FormComment />
            <Comments comments={comments} />
          </>
        ) : (<span>Загрузка...</span>)}

        <button className={style.close} onClick={handleButtonClose}>
          <SvgIcon
            src='./img/modal/close.svg'
          />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func,
};
