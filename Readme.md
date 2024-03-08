Errors in Backend
-----------------
- `Unhandled Promise Rejection` occurs when there you provided wrong mongodb url and we just have to handle it by showing the error and then exiting the server 
- `Uncaught Exception` occurs when we have error in our code (not defining variable) and we just have to handle it by showing the error and then exiting the server
- `Case Error by MongoDB` occurs when we provide some wrong input from client side and not handling that so to handle that just go to the error middleware and check the type of error and acting according to that error

Filtering and Pagination Features
----------------------------------
- Sending `Mongoose operation` as `query` and getting `query string` from the url is something we should be sending as arguments to our `ApiFeatures` class (query,queryStr)