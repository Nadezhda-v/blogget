import style from './Comments.module.css';
import PropTypes from 'prop-types';
import { formatDateOfComment } from '../../../utils/formatDate';

export const Comments = ({ comments }) => (
  <ul className={style.list}>
    {comments.length ? (
      comments.map(({ id, author, body: text, created: date }) => {
        if (text && !text.includes('[')) {
          return (
            <li key={id} className={style.item}>
              <div className={style.title}>
                <p className={style.author}>{author}</p>

                <time className={style.date} dateTime={date}>
                  {date && (formatDateOfComment(date))}
                </time>
              </div>
              <p className={style.comment}>{text}</p>
            </li>
          );
        }
      })
    ) : (<span>Нет комментариев</span>)}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};

