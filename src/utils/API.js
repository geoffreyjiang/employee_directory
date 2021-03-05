import axios from "axios";

export default {
  start: function () {
    return axios.get("https://randomuser.me/api/?results=10");
  },
};
// module.exports.start = () => {
//   return axios.get("https://randomuser.me/api/?results=24");
// };
