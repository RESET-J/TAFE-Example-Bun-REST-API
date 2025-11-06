import { serve, file } from 'bun';
import { connect, getPosts, getPost, addPost, editPost, deletePost } from './data/ArticleData.js';
import { ExitStatus } from 'typescript';
 
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

    // DATABASE
    connect();

    // ROUTING
    if ( pathname === "/" ) {
      return new Response(index);
    }
    else if ( pathname === "/api/posts") {
      // GET
      if ( method === "GET" && !match ) {
        return getAllPostRequest(request);
      }

      // POST
      if ( method === "POST" ) {
        const newPost: any = await request.json()
        return postPostRequest(request, newPost);
      }

      // PATCH
      if ( method === "PATCH" ) {
        const postChanges: any = await request.json();
        return patchPostRequest(request, postChanges);
      }

      // DELETE
      if ( method === "DELETE" ) {
        const item : any = await request.json();
        const id = item.id;

        return deletePostRequest(request, id);
      }
    }
    else if ( method === "GET" && match ) {
      const id = match && match[1];
        console.log(id);
        // return specific post
        return getPostRequest(request, id ? parseInt(id) : null);
    }

    return new Response("hello, World!");
      
  },
});

// rest responses
function getAllPostRequest(request: any): Response {
  const items = getPosts();

  return new Response(JSON.stringify(items));
}

function getPostRequest(request: any, id: Number | null): Response {
  let item = getPost(id);

  if ( !item ) {
    return new Response('Post Not Found', { status: 404 } );
  }

  return new Response(JSON.stringify(item));
}

function postPostRequest(request: any, newItem: any): Response {
  if ( !newItem ) {
    return new Response("Error, item cannot be added! AAAAA");
  }
  // code to add value to database
  //try {
    addPost(newItem);

    return new Response("Successfully added the post");
  //}
  // catch {
  //   return new Response("Error, item cannot!");
  // }
}

function patchPostRequest(request: any, itemChanges: any): Response {
  if (!itemChanges.id) {
    return new Response('Error must have an associated Post id', { status: 404 });
  }
  
  // modify the data
  const data = editPost(itemChanges);

  if ( !data ) {
    return new Response('Post Not Found', { status: 404 });
  }

  return new Response('Post Successfully Modified', { status: 200 });
}

function deletePostRequest(request: any, id: Number | null): Response {
  if ( !id ) {
    return new Response('Error must have an associated Post id', {status: 404});
  }

  deletePost(id);

  return new Response('Post Successfully Deleted', { status: 200 });
}


 
console.log(`Listening on http://localhost:${PORT} ...`);