import express from 'express';  // it for module JS

const app = express();

app.get('/', (req, res) => {
    res.send(" This is my first server and it's ready")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 0,
            title: "Why do French people eat snails",
            content: "They don't like fast food."
        },
        {
            id: 1,
            title: "What did one hat say to the other",
            content: "You wait here. I'll go on a head."
        },
        {
            id: 2,
            title: "What's orange and sounds like a carrot",
            content: "A parrot."
        }

    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;          // if we have environment variable file then we can get port otherwise we can put hardcoded port

app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`)
})