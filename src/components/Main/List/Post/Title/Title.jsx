import style from './Title.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';
import { Link, useParams } from 'react-router-dom';

export const Title = ({ title, id }) => {
  const { page } = useParams();

  return (
    <Text As='h2' className={style.title}>
      <Link
        className={style.linkPost}
        to={page ? `/category/${page}/post/${id}` : `/search/post/${id}`}
      >
        <Text
          size={14}
          tsize={22}
          fontWeight='bold'
          className={style.linkPost}
        >
          {title}
        </Text>
      </Link>
    </Text>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};
