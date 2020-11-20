SELECT posts.title, posts.img, posts.content , users.username, users.profile_pic from posts join users on users.id =  posts.author_id
where posts.title like $1;