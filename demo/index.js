import easycp from '../src';

easycp('yo')
  .then(result => {
    console.log('result:', result.toString());
  })
  .catch(err => {
    console.error(err);
  });
