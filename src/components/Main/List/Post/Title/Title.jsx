import style from './Title.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Title = ({ title }) => (
  <Text As='h2' className={style.title}>
    <Text
      As='a'
      size={18}
      tsize={22}
      fontWeight='bold'
      className={style.linkPost}
      href='#post'
    >
      {title}
    </Text>
  </Text>
);

Title.propTypes = {
  title: PropTypes.string,
};
