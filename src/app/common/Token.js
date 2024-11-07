// userInfo.js
const userInfo = () => {

    if (typeof window !== 'undefined') {
      var data = localStorage.getItem("token");
      var data = localStorage.getItem("token");
    }
    let parsedData = JSON.parse(data);
    return parsedData;
  };
  
  export default userInfo;
  