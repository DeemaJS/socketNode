# socketNode
1.First install express.js
2.Middleware

These middleware and libraries are officially supported by the Connect/Express team:

    body-parser - previous bodyParser, json, and urlencoded. You may also be interested in:
        body
        co-body
        raw-body
    compression - previously compress
    connect-timeout - previously timeout
    cookie-parser - previously cookieParser
    cookie-session - previously cookieSession
    csurf - previously csrf
    errorhandler - previously error-handler
    express-session - previously session
    method-override - previously method-override
    morgan - previously logger
    response-time - previously response-time
    serve-favicon - previously favicon
    serve-index - previously directory
    serve-static - previously static
    vhost - previously vhost

Most of these are exact ports of their Connect 2.x equivalents. The primary exception is cookie-session.

Some middleware previously included with Connect are no longer supported by the Connect/Express team, are replaced by an alternative module, or should be superseded by a better module. Use one of these alternatives instead:

    cookieParser
        cookies and keygrip
    limit
        raw-body
    multipart
        connect-multiparty
        connect-busboy
    query
        qs
    staticCache
        st
        connect-static

Checkout http-framework for many other compatible middleware! 
