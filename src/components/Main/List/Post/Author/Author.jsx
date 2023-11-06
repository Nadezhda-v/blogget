import style from './Author.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Author = ({ author }) => (
  <Text
    As='a'
    color='violet'
    size={10}
    tsize={14}
    className={style.linkAuthor}
    href='#author'
  >
    {author}
  </Text>
);

Author.propTypes = {
  author: PropTypes.string,
};
