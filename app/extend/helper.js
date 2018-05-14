const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.getNowTime = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` +
    ` ${date.getHours()}:${date.getMinutes()}`;
};