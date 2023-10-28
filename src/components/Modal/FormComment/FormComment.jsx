import { useRef } from 'react';
import style from './FormComment.module.css';

export const FormComment = () => {
  const textRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(textRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handleFormSubmit}>
      <textarea className={style.textarea} ref={textRef} />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
