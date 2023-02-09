// Create your own history instance.
import { createBrowserHistory, createPath, parsePath } from "history";
let history = createBrowserHistory();

// ... or just import the browser history singleton instance.

// Alternatively, if you're using hash history import
// the hash history singleton instance.
// import history from 'history/hash';

// Get the current location.
let location = history.location;

// Listen for changes to the current location.
let unlisten = history.listen(({ location, action }) => {
  console.log(
    `The current URL is ${location.pathname}${location.search}${location.hash}`
  );
  console.log(`The last navigation action was ${action}`);
});

// Use push to push a new entry onto the history stack.
history.push("/home", { some: "state" });

// Use replace to replace the current entry in the stack.
history.replace("/logged-in");

// Use back/forward to navigate one entry back or forward.
history.back();

// To stop listening, call the function returned from listen().
unlisten();

let pathPieces = parsePath("/the/path?the=query#the-hash");
// pathPieces = {
//   pathname: '/the/path',
//   search: '?the=query',
//   hash: '#the-hash'
// }

let path = createPath(pathPieces);
// path = '/the/path?the=query#the-hash'
