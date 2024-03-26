// create a simple html server, and ser index.html
import * as http from 'http';
import { landing_html } from './index.html';

const server = http.createServer((req, res) => {
    // respond with html string
    res.setHeader('Content-Type', 'text/html');
    res.end(landing_html);
});

server.listen(330, () => {
    console.log('server is running on port 330');
});