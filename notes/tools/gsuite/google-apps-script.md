# Google Apps Script

https://www.google.com/script/start/


## Questions

* [Google Apps Script make HTTP POST](https://stackoverflow.com/q/14742350/1366033)

  Use [`UrlFetchApp`](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)

  ```js
  // Make a POST request with form data.
  var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
  var formData = {
    'name': 'Bob Smith',
    'email': 'bob@example.com',
    'resume': resumeBlob
  };
  // Because payload is a JavaScript object, it is interpreted as
  // as form data. (No need to specify contentType; it automatically
  // defaults to either 'application/x-www-form-urlencoded'
  // or 'multipart/form-data')
  var options = {
    'method' : 'post',
    'payload' : formData
  };
  UrlFetchApp.fetch('https://httpbin.org/post', options);
  ```

* [How to parse JSON response in Google App Script?](https://stackoverflow.com/q/40552779/1366033)

  ```js
  var response = authUrlFetch.fetch(url, options);
  var data = JSON.parse(response.getContentText());
  Logger.log(data.request.reportType);
  ```

* [How can I see the full server response for this API error message in Google Scripts?](https://stackoverflow.com/q/39036270/1366033)

  Use `muteHttpExceptions`

  ```js
  var options = {muteHttpExceptions: true};
  var response = UrlFetchApp.fetch("https://api.myintervals.com/task/", options);
  Logger.log(response.getContentText()); 
  ```

* [Google Sheets return multiple columns](https://stackoverflow.com/q/46373625/1366033)

  ```js
  function multiRow(input) {
    return [input+" 1", input+" 2"]
  }

  function multiCol(input) {
    return [[input+" 1", input+" 2"]]
  }
  ```
