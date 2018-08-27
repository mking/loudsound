import * as querystring from "querystring";

export function parseQuery(str: string): querystring.ParsedUrlQuery {
  if (str.length === 0) return null;

  return querystring.parse(str.slice(1));
}
