const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const dateTimeFormatter = new Intl.DateTimeFormat('ru', options);
  return dateTimeFormatter.format(new Date(date));
};

export default formatDate;
