SELECT posts.id, posts.title, posts.img, posts.content , posts.author_id, users.username, users.profile_pic from posts join users on users.id =  posts.author_id
where posts.id = $1;