import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
const posts = [
{
    id:1,
    image:"https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/03/fotolia_80512914.webp",
    caption: "looking cute than ever",
},
{
    id:2,
    image:"https://www.facebook.com/groups/boxerlover/posts/1687189421692972/" ,
    caption: "looking cute than ever",
},

{
    id:3,
    image:"https://hips.hearstapps.com/hmg-prod/images/doberman-dog-in-bluebell-woodland-portrait-royalty-free-image-1770227142.pjpeg?crop=1.00xw:0.667xh;0,0.136xh", 
    caption: "looking cute than ever",
},
 

]
app.get("/api/posts", (req,res) => {
    res.status(200).json(posts);
})
app.post("/api/posts", (req, res) => {
    const {id, image, caption} = req.body;
    const newPost = {id, image, caption};
    posts.push(newPost);
    res.status(201).json(newPost);
})
app.listen(port, () => {
    console.log("server started on port", port);

})
