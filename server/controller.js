const bcrypt = require('bcrypt');

module.exports = {

 

    getPosts: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        const {userposts, search} = req.query;
        let posts = await db.get_allPosts()
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