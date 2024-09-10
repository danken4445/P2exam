const express = require('express');
const app = express();
const port = 3000;

const myData = {
    subject: 'ITE314',
    exam: 'P2',        
    node: 'NODEJS'    
};

app.get('/subject', (req, res) => {
    res.send(myData.subject.toUpperCase());
});

app.get('/exam', (req, res) => {
    res.send(myData.exam);
});

app.get('/node', (req, res) => {
    res.send(myData.node);
});

app.get('/mydata', (req, res) => {
    res.json({
        subject: myData.subject.toUpperCase(),
        exam: myData.exam,
        node: myData.node
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
