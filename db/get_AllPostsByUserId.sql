SELECT post.id, posts.title, posts.img, posts.content , users.username, users.profile_pic, posts.author_id FROM posts JOIN users ON users.id =  posts.author_id
where users.id = $1;