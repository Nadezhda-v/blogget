import { useRef, useEffect } from 'react';
import style from './FormComment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store';

export const FormComment = () => {
  const textComment = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const textRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(textComment);
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const handleTextComment = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <textarea
        className={style.textarea}
        value={textComment}
        onChange={handleTextComment}
        ref={textRef}
      />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
