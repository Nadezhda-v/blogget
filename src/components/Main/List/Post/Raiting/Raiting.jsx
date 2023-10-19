import style from './Raiting.module.css';
import PropTypes from 'prop-types';

export const Raiting = ({ ups }) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />

    <p className={style.ups}>
      {ups}
    </p>

    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

Raiting.propTypes = {
  ups: PropTypes.number,
};
