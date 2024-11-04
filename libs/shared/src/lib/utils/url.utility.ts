export class UrlUtility {
  public static serverUrl = 'http://localhost:5264/api';

  public static replaceUrlParams(url: string, params: object): string {
    Object.entries(params).forEach((item) => {
      const regex = new RegExp(`\\\${${item[0]}}`, 'g');
      url = url.replace(regex, encodeURIComponent(item[1]));
    });
    return url;
  }
  public static getQueryStringParams(
    url: string,
    queryStrings: object = new Object()
  ): string {
    const queryItems: string[] = [];

    if (Object.keys(queryStrings).length == 0) return url;
    Object.entries(queryStrings).forEach((item) => {
      const key = item[0];
      const value = item[1];
      if (value != null && value != undefined) {
        if (key == 'filterValues') {
          Object.entries(value).forEach((filter, index) => {
            const param = 'filter_' + filter[0] + '=' + filter[1];
            queryItems.push(param);
          });
        } else {
          const param = key + '=' + encodeURIComponent(value);
          queryItems.push(param);
        }
      }
    });
    if (queryItems.length > 0) {
      url = url + '?' + queryItems.join('&');
    }
    return url;
  }
}
