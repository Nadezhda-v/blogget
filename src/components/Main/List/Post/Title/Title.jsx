import style from './Title.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Title = ({ title, onClick }) => (
  <Text As='h2' className={style.title}>
    <Text
      As='a'
      size={14}
      tsize={22}
      fontWeight='bold'
      className={style.linkPost}
      href='#post'
      onClick={onClick}
    >
      {title}
    </Text>
  </Text>
);

Title.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
