const formatDate = (date) => {
  const newDate = date * 1000;

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const dateTimeFormatter = new Intl.DateTimeFormat('ru', options);
  return dateTimeFormatter.format(new Date(newDate));
};

const formatDateOfComment = (date) => {
  const newDate = date * 1000;
  const formattedDate = new Date(newDate);
  const currentDate = new Date();
  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit'
  };

  const optionsDate = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  currentDate.setHours(0, 0, 0, 0);

  const isDay = () => currentDate.getTime() <= formattedDate.getTime() &&
    formattedDate.getTime() < currentDate.getTime() + 24 * 60 * 60 * 1000;

  const isToday = isDay();
  currentDate.setDate(currentDate.getDate() - 1);
  const isYesterday = isDay();

  if (isToday) {
    return `Сегодня, ${formattedDate.toLocaleTimeString('ru', optionsTime)}`;
  }

  if (isYesterday) {
    return `Вчера, ${formattedDate.toLocaleTimeString('ru', optionsTime)}`;
  }

  return `${formattedDate.toLocaleDateString('ru', optionsDate)},
    ${formattedDate.toLocaleTimeString('ru', optionsTime)}`;
};

export {
  formatDate,
  formatDateOfComment,
};
