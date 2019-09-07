import moment from "moment";

export const basicUrl = 'http://localhost:5000/api/v1/';

export const toFormateContent = (content) => {
  if (content.length > 247) {
    let shortContent = content.slice(0, 245);
    shortContent = shortContent + '...';
    return shortContent;
  }
  return content;
}

export  const toFormateDate = (data) => {
  return moment(data).format('MMM Do YY, h:mm:ss a');
}
