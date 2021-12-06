# How the Web Works: Requests and Responses

High level overview of how the web works behind the scenes in regard to requests and responses.

## What happens when we access a web server?

The browser (the client) sends a request to teh server. The server sends back a response.

Process is called the **request-response model** or **client-server architecture**

`https://restcountries.eu/rest/v2/alpha/PT`
Every url gets an http, or https which is for the protocol on the tonnection. Then we have the domain naim. Then the resource.

Domain name isn't actually the real address of the server we're trying to access. Means we need a way of converting the domain name to the real address of the server. That happens through a DNS. **Domain Name Server** lookup. Special kind of server, like the phone books of the internet.

1. Browser makes a request to a DNS. Server will match the address of the url to a real server ip address. (`https://104.142.889.443`) for example. Happens through your internet provider. Domain is not the real address. A DNS will covnert the domain to the IP address.

After the ip address has been sent back to the browser, we can finally call it.

Protocol - IP address - Port Number.

2. TCP/IP socket connection is established between the browser and the server. Kept alive for entire time it takes to transmit the files/data.

What are TCP and IP. Transmission control protocol, and Internet Protocol. Basically internets fundamental control system. Defines how things travel across the web.

3. Time to finally make our request, our HTTP request. Hypertext transfer protocol. Protocol that allows servers and clients to communicate via requests and responses.

```
GET /rest/v2/alpha/PT HTTP/1.1

Host: www.google.com
User-Agent: Mozilla/5.0
Accept-Language: en-US

<BODY>
```

Many HTTP methods: GET/Request, POST/Send, PUT/PATCh to modify data.

Address is sent as the target in the HTTP request. If it was empty, then we would be accessing the websites root ('/')

Then there are the request headers. Info about the request itself. Lots of different standards.

In the case for sending data to the server, there's a request Body. The data we're sending. For example, a comment from an HTML form.

Difference between HTTP and HTTPS. HTTPS is encrypted using SSL. Logic behind HTTP requests and responses still applies.

4. Our request is formed, it hits the server, and it will be worked on until it's ready. Sent back using an HTTP Response. Looks very similar to a request.

```
HTTP/1.1 200 OK

Date: Fri, 18 Jan 2021
Content-Type: text/html
Transfer-Encoding: chunked

<BODY>
```

Start line with a status code + status message. Lets you know if it's been successful or if it's failed.

Response headers are info about the response itself. A ton available.

Finally last part is the BODY, which is present in most responses. Usually contains the JSON data coming back from an API. Or data we've requested.

5. Index.html is the first to be loaded - scanned for assets: JS, CSS, images - Process is repeated for each file. A new http request is made to the server. Happens for every single file that's included in a webpage. Can be multiple happening at once.

When all the files have finally arrived , the webpage can be rendered in the browser according to the specifications.

TCP/IP are communcation protocols of how data is sent across the web. The job of TCP is to break down the respones down into thousands of chunks. TCP reassembles them into the original request or response when they arrive at their destination. Useful as packages can take different routes through the internet. Wouldn't be possible if we sent the data in a big chunk. Job of the IP protocol is the send and route these packages through the internet. Ensures they end up where they're supposed to go, using addresses on each packet.
