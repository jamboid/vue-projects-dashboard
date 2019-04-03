import handleError from "@/modules/Ajax/handleFetchResponseError";
import handleStatus from "@/modules/Ajax/handleFetchResponseStatus";
import { handleJSON } from "@/modules/Ajax/handleFetchResponseContentTypes";

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
