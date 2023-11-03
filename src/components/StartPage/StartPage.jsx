import { useSelector } from 'react-redux';
import style from './StartPage.module.css';
import { Text } from '../../UI/Text';

export const StartPage = () => {
  const auth = useSelector((state) => state.auth.data);

  return (
    <div className={style.wrapper}>
      {auth.name && (
        <>
          <Text As='h1'
            size={20}
            tsize={26}
            fontWeight='bold'
            color='white'
            center
          >
            {`Добро пожаловать, ${auth.name}!`}
          </Text>
          <Text As='p' size={16} tsize={20} color='white' center>
            Здесь вы найдете множество интересных новостей
          </Text>
        </>
      )}
    </div>
  );
};
