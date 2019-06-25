// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

const filterByExpiration = (items) => {
  return items.filter(item => {
    let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    return new Date(Date.parse(item.expirationDate))>today;
  })
};