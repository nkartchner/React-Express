import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
    const initialMarkup = ReactDOMServer.renderToString(<App />);

    res.send(`
    <html>
        <head>
            <title>Counter</title>
        </head>
        <body>
            <div id="mountNode">${initialMarkup}</div>
            <script src="/main.js"></script>
        </body>
    </html>
    `)
})

app.listen(8000, () => console.log(`Counter is running on port 8000`))