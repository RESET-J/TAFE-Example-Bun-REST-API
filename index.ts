import { serve, file } from 'bun';
 
const PORT = 6989;

const items = [
  {
    id: 1,
    title: "The new Post",
    description: "This is the Blah blah blah blah blah",
    comments: 0,
  },
  {
    id: 2,
    title: "The new Post",
    description: "This is the Blah blah blah blah blah",
    comments: 3,
  },
  {
    id: 3,
    title: "The new Post",
    description: "This is the Blah blah blah blah blah",
    comments: 1,
  }

]
 
serve({
  port: PORT,
  async fetch(request) {
    const index = file('./index.html');
    const { method } = request;
    const { pathname } = new URL(request.url);
    const pathRegexForID = /^\/api\/posts\/(\d+)$/;
    
    const match = pathname.match(pathRegexForID);

    // ROUTING
    if ( pathname === "/" ) {
      return new Response(index);
    }
    else if ( pathname === "/api/posts") {
      // GET
      if ( method === "GET" && !match ) {
        return returnArticles(request);
      }

      // POST
      if ( method === "POST" ) {
        // return addArticle(request);
      }
    }
    else if ( method === "GET" && match ) {
      const id = match && match[1];
        console.log(id);
        // return specific post
        return getArticle(request, id ? parseInt(id) : null);
    }

    return new Response("hello, World!");
      
  },
});

// rest responses
function returnArticles(request: any): Response {
  return new Response(JSON.stringify(items));
}

function getArticle(request: any, id: Number | null): Response {
  let article = items.find((item) => item.id === id );
  return new Response(JSON.stringify(article));
}

function addArticle(request: any): Response {
  // code to add value to database
  return new Response("Added Successfully!");
}
 
console.log(`Listening on http://localhost:${PORT} ...`);