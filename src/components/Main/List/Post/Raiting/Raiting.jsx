import style from './Raiting.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Raiting = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />

    <Text
      As='p'
      size={12}
      tsize={16}
      color='grey99'
      fontWeight='bold'
      className={style.ups}
    >
      {ups}
    </Text>

    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Raiting.propTypes = {
  ups: PropTypes.number,
};
