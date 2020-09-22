const express = require("express");
const app = express();
app.use(express.json());

const albumsData = [
    {
        albumId: "10",
        artistName: "Beyoncé",
        collectionName: "Lemonade",
        artworkUrl100:
            "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
        releaseDate: "2016-04-25T07:00:00Z",
        primaryGenreName: "Pop",
        url:
            "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
        albumId: "11",
        artistName: "Beyoncé",
        collectionName: "Dangerously In Love",
        artworkUrl100:
            "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url:
            "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    }
];

app.get("/albums", function (req, res) {
    res.send(albumsData);
});

app.get("/albums/:albumId", function (req, res) {
    const album = albumsData.find((album) => album.albumId === req.params.albumId);
    res.send(album);
});

app.post("/albums", (req, res) => {
    const newAlbum = req.body;
    //console.log(newAlbum);
    albumsData.push(newAlbum);
    res.send(newAlbum);
});

app.delete("/albums/:albumId", function (req, res) {
    const albumId = req.params.albumId;
    console.log(albumId);
    const albumToDel = albumsData.find((album) => album.albumId === albumId);
    console.log(albumToDel);
    albumsData.splice(albumsData.indexOf(albumToDel), 1);
    // const albumIndex = albumsData.findIndex(album => album.albumId === req.params.albumId);
    // albumsData.splice(albumIndex, 1);
    res.send(albumToDel);
});

app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

// app.get("/", function (req, res) {
//     //console.log(req)
//     let search = req.query.search;
//     res.send("hello, you're looking for " + search);
// });

// app.get("/chocolate", function (req, res) {
//     let amount = req.query.amount
//     res.send("chocolate :" + amount);
// });

// app.get("/node", function (req, res) {
//     res.send("node");
// });

// app.get("/cyf", function (req, res) {
//     res.send("code your future");
// });



