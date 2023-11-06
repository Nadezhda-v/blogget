import { useNavigate } from 'react-router-dom';
import style from './PageError.module.css';

export const PageError = () => {
  const navigate = useNavigate();

  return (
    <div className={style.center}>
      <div className={style.error}>
        <div className={style.number}>4</div>
        <div className={style.illustration}>
          <div className={style.circle} />
          <div className={style.clip}>
            <div className={style.paper}>
              <div className={style.face}>
                <div className={style.eyes}>
                  <div className={`${style.eye} ${style.eyeLeft}`} />
                  <div className={`${style.eye} ${style.eyeRight}`} />
                </div>
                <div
                  className={`${style.rosyCheeks} ${style.rosyCheeksLeft}`}
                />
                <div
                  className={`${style.rosyCheeks} ${style.rosyCheeksRight}`}
                />
                <div className={style.mouth} />
              </div>
            </div>
          </div>
        </div>
        <div className={style.number}>4</div>
      </div>

      <div className={style.text}>Oops. Page not found</div>
      <a className={style.button} onClick={() => navigate('/')}>Back Home</a>
    </div>
  );
};
