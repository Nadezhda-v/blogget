import style from './Modal.module.css';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import useCommentsData from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';
import Preloader from '../../UI/Preloader';
import { Text } from '../../UI/Text';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as CloseIcon } from './img/close.svg';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [[post, comments], status] = useCommentsData(id);
  const [showFormComment, setShowFormComment] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleButtonClose = () => {
    page ? navigate(`/category/${page}`) : navigate('/search');
  };

  const handleCloseOverlay = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      handleButtonClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseOverlay);
    document.addEventListener('keydown', handleCloseOverlay);

    return () => {
      document.removeEventListener('click', handleCloseOverlay);
      document.removeEventListener('keydown', handleCloseOverlay);
    };
  }, []);

  const handleDisplayForm = () => {
    setShowFormComment(true);
    setShowButton(false);
  };

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && (
          <Preloader color={'#4a4d7a'} size={60} />
        )}
        {status === 'error' && (
          <Text size={14} tsize={18}>
            Возникла ошибка при загрузке постов
          </Text>
        )}
        {status === 'loaded' && (
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

            {showButton && (
              <button className={style.btn} onClick={handleDisplayForm}>
                Написать комментарий
              </button>
            )}

            {showFormComment && <FormComment />}
            <Comments comments={comments} />
          </>
        )}

        <button className={style.close} onClick={handleButtonClose}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};
