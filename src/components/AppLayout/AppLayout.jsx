import style from './AppLayout.module.css';

export const AppLayout = () => {
  console.log(style);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Blogget</h2>
      <p className={style.text}>
        Ваш источник горячих новостей и увлекательных историй!
      </p>
    </div>
  );
};
