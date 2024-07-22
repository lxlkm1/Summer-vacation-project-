/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 * @returns a Promise that should be filled with the response of the GET request
 * parsed as a JSON object and returned in the property named "data" of an
 * object. If the request has an error, the Promise should be rejected with an
 * object that contains the properties:
 * {number} status          The HTTP response status
 * {string} statusText      The statusText from the xhr request
 */
// function change() {
//    if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status !== 200) {
//         return;
//       }


//       try {
//         let text = this.responseText;
//         let data = JSON.parse(text);
//         resolve({ data: data });
//       } catch (error) {
//         let errorObject = {
//           status: 501,
//           statusText: "Not Implemented",
//         };
//         reject(errorObject);
//   };
// }





function fetchModel(url) {
  return new Promise(function (resolve, reject) {
    // console.log(url);

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = (function () {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status !== 200) {
        return;
      }


      try {
        let text = this.responseText;
        let data = JSON.parse(text);
        resolve({ data: data });
      } catch (error) {
        let errorObject = {
          status: 501,
          statusText: "Not Implemented",
        };
        reject(errorObject);
      }
    }).bind(xhr);
      


    xhr.open("GET", url);
    xhr.send();
  });
}

export default fetchModel;
