const bcrypt = require('bcrypt');

module.exports = {

    deletePost: async (req, res) => {
        const db = req.app.get('db');
        const { postid } = req.params;
    
        let post = await db.deleteByPostId([postid])
        console.log("post coming back from getaPost: ",post);
        res.status(200).send(post);

    },


    getaPost: async (req, res) => {
        const db = req.app.get('db');
        const { postid } = req.params;
    
        let post = await db.get_postByPostId([postid])
        console.log("post coming back from getaPost: ",post);
        res.status(200).send(post);

    },


 
    getaPost: async (req, res) => {
        const db = req.app.get('db');
        const { postid } = req.params;
    
        let post = await db.get_postByPostId([postid])
        console.log("post coming back from getaPost: ",post);
        res.status(200).send(post);

    },


    getPosts: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const {userposts, search} = req.query;
        let posts = await db.get_allPosts()
        // console.log(posts);
        res.status(200).send(posts);

    },

    addPost: async (req, res) => {
        const db = req.app.get('db');
        const {  title,
            img,
            content,
            author_id} = req.body
        let posts = await db.add_post([title, img, content, author_id])
        // console.log(posts);
        res.status(200).send(posts);

    },
    
    
    

 
    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
  
 
        const foundUser =  await db.check_user(username);
        if(foundUser[0]){
            return res.status(400).send("username already registered")
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const profile_pic = `https://robohash.org/${username}`
        const [newUser] = await db.add_user([username, hash, profile_pic]);
        req.session.user = {
            userId: newUser.id, 
            username: newUser.username,
            profile_pic: newUser.profile_pic
        }
        res.status(200).send(req.session.user);
    },
login: async (req, res) => {
    const db = req.app.get('db');

    const { username, password} = req.body;
    const [foundUser] = await db.check_user([username]);
    if(!foundUser){
        return res.status(401).send("Incorrect login information")
    }
    const authenticated = bcrypt.compareSync(password, foundUser.password);
    if( authenticated ){
        req.session.user = {
            userId: foundUser.id,
            username: foundUser.username,
            profile_pic: foundUser.profile_pic
        }
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send('Incorrect login information')
    }


},

logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);

},



}