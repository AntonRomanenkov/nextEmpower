import axios from 'axios';
// export const Services = {
//   Login: () => Login(),
//   logout,
//   Register
// };

const API_ROOT = `https://testserver.empower.eco`;

export default {
  UserLogin (details) {
    return new Promise((resolve, reject) => {
      axios.post( API_ROOT + '/login', details).then(res => {
        if (res) {
          let data = {result: res.data}
          resolve(data)          
        }
      }, err => {
        reject(err)
      })
    })
  },
  UserRegister (details) {
    return new Promise((resolve, reject) => {
      axios.post(API_ROOT + '/register', details).then(res => {
        let data = {result: res.data}
        resolve(data)
      }, err => {
        reject(err)
      })
    })
  }
}
