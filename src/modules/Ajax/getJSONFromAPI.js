import handleError from "./handleFetchResponseError";
import handleStatus from "./handleFetchResponseStatus";
import { handleJSON } from "./handleFetchResponseContentTypes";

/**
 * Abstract Ajax Get function
 *
 * @export
 * @param {*} query
 * @returns
 */
export function getJSON(query) {
  return window.fetch(query, {
    method: 'GET',
    headers: new Headers({
      'Accept': 'application/json'
    }),
    simple: true
  })
  .then(handleError)
  .then(handleStatus)
  .then(handleJSON)
  .catch(error => {
    console.log(error);
  });
}
