
SELECT posts.id, posts.title, posts.img, posts.content , users.username, users.profile_pic, posts.author_id from posts join users on users.id =  posts.author_id
where posts.id = $1;
