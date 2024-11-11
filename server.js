const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 3000; // Use Render's PORT environment variable
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
