
# How Web works?

*Let's understand in brief about the browser functionality*



## URL Structure

A URL, short for a uniform resource locator is a web address pointing to a specific website,
a web page, or a document on the internet.

![alt text](https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/07/the-structure-of-a-url.webp)



## What happens when you type a URL into your browser?

A web browser takes you anywhere on the internet, letting you see text, images and video from anywhere in the world.

*NOTE : When you type a URL into your browser and press enter. End to end, the process involves the browser, your computer’s operating system, your internet service provider, the server where you host the site, and services running on that server. 
It involves all browser component.* 


## Browser components:

![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png?auto=format&w=650)
-
`Let's have brief explanation about them:`

- User Interface (UI) : screen where you see those menu, back/ forward button etc.
- Browser Engine: Marshals action between UI and redering engine
- Rendering Engine: Displays the content(html+css etc)
- Networking: HTTP request with different implementations
- Javascript Interpreter: Parse & execute JS code
- UI Backend: Draws the basic widgets, exposes generic interface that are not platform specific.
- Data Persistence: Storage area used by cookies, localStorage, IndexDB etc.


## The rendering engine

The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS.

   
### The rendering engine - Main flow(Parsing HTML & CSS) 

![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png?auto=format&w=741)

- Firstly, render engine starts parsing the html document. Converts element to DOM nodes in a tree called the "content tree" 
-  The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

## Tree construction

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.
For example, parsing the expression ```2 + 3 - 1``` could return below tree:
![alt_text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/xNQUG9emGd8FzuOpumP7.png?auto=format&w=500)


## Order of script processing:

![alt text](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/VhoUBTyHWNnnZJiIfRAo.png?auto=format&w=135
)

In many cases the parse tree is not the final product. Parsing is often used in translation: transforming the input document to another format. An example is compilation. The compiler that compiles source code into machine code first parses it into a parse tree and then translates the tree into a machine code document.

## Layout

- Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource. 
- The Content-Type header above tells the browser it received an HTML resource in the response body. Lucky for us, the browser knows what to do with HTML!
- The first GET request returns HTML, the structure of the page. But if you inspect the HTML of the page (or any web page) with your browser’s dev tools, you’ll see it references other Javascript, CSS, image resources and requests additional data in order to render the web page as designed.
- As the browser is parsing and rendering the HTML, it is making additional requests to get Javascript, CSS, images, and data. It can do much of this in parallel



## Summary:

- You type a URL in your browser and press Enter
- Browser looks up IP address for the domain
- Browser initiates TCP connection with the server
- Browser sends the HTTP request to the server
- Server processes request and sends back a response
- Browser renders the content
## Appendix

Please refer the below documentation to get more depth on how proficiently browser does find IP, send request get response and parse then display.


- [WEB DOC](https://web.dev/howbrowserswork/#:~:text=The%20browser's%20high%20level%20structure%20%23&text=The%20user%20interface%3A%20this%20includes,UI%20and%20the%20rendering%20engine.)
- [MEDIUM](https://medium.com/@maneesa/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
## Author

- [@mgupta96](https://github.com/mgupta96)
