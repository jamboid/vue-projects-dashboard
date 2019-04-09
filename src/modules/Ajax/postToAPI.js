import handleError from "@/modules/Ajax/handleFetchResponseError";
import handleStatus from "@/modules/Ajax/handleFetchResponseStatus";

export function postToAPI(endpoint, payload) {


  return window.fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(payload)
  })
  .then(handleError)
  .then(handleStatus)
  .then(function(response) {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });


}
