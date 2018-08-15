$(()=>{
   const app = Sammy('#container',function () {
       this.use('Handlebars','hbs');
       this.get('index.html',displayHome);
       this.get('#/home',displayHome);
       this.post('#/register',registerUser);
       this.post('#/login',loginUser);
       this.get('#/logout',(ctx)=>{
           auth.logout().then(function () {
               sessionStorage.clear();
               notify.showInfo('Logout Successful');
               ctx.redirect('#/home')
           })
       });
       this.get('#/catalog',(ctx)=>{
           if(!auth.isAuth()){
               ctx.redirect('#/home')
               return;
           }
           post.getAllPosts().then(function (posts) {
               console.log(posts);
               posts.forEach((p,i)=>{
                   p.rank = i+=1;
                   p.date=calcTime(p._kmd.ect);
                   p.isAuthor = p._acl.creator===sessionStorage.getItem('userId')
               })
               ctx.isAuth=auth.isAuth;
               ctx.username = sessionStorage.getItem('username');
               ctx.posts=posts;
               ctx.loadPartials({
                   header:'./templates/common/header.hbs',
                   footer:'./templates/common/footer.hbs',
                   navigation:'./templates/common/navigation.hbs',
                   postList:'./templates/posts/postList.hbs',
                   post:'./templates/posts/post.hbs'
               }).then(function () {
                   this.partial('./templates/posts/viewCatalog.hbs');
               })

           }).catch(notify.showError);
       })
       this.get('#/create/post',(ctx)=>{
           if(!auth.isAuth()){
               ctx.redirect('#/home')
               return;
           }
           ctx.isAuth=auth.isAuth;
           ctx.username=sessionStorage.getItem('username');
           ctx.loadPartials({
               header:'./templates/common/header.hbs',
               footer:'./templates/common/footer.hbs',
               navigation:'./templates/common/navigation.hbs'
           }).then(function () {
               this.partial('./templates/posts/viewSubmit.hbs')
           })
       })
       this.post('#/create/post',(ctx)=>{
           let description = ctx.params.comment;
           let image = ctx.params.image;
           let title=ctx.params.title;
           let url = ctx.params.url;
           let author = sessionStorage.getItem('username')
           post.createPost(author,title,description,url,image)
               .then(function () {
               notify.showInfo('Post Created');
               ctx.redirect('#/catalog')
           });
       })
       this.get('#/edit/post/:postId',(ctx)=>{
           if(!auth.isAuth()){
               ctx.redirect('#/home')
               return;
           }
           let postId = ctx.params.postId;
           let comment = ctx.params.comment;
           let image = ctx.params.image;
           let title=ctx.params.title;
           let url = ctx.params.url;
           let author = sessionStorage.getItem('username')
           post.getPostById(postId,author,title,comment,url,image).then(function (post) {
               ctx.isAuth=auth.isAuth;
               ctx.post=post;
               ctx.username=sessionStorage.getItem('username');
               ctx.loadPartials({
                   header:'./templates/common/header.hbs',
                   footer:'./templates/common/footer.hbs',
                   navigation:'./templates/common/navigation.hbs'
               }).then(function () {
                   this.partial('./templates/posts/viewEdit.hbs')
               })
           })
       })
       this.post('#/edit/post',(ctx)=>{
           let postId = ctx.params.postId;
           let author = sessionStorage.getItem('username');
           console.log(ctx);
           let url = ctx.params.url;
           let imageUrl = ctx.params.image;
           let title = ctx.params.title;
           let description = ctx.params.description;
               post.editPost(postId, author, title, description, url, imageUrl)
                   .then(() => {
                       notify.showInfo(`Post ${title} updated.`);
                       ctx.redirect('#/catalog');
                   })
                   .catch(notify.showError);
       })
       this.get('#/delete/post/:postId',(ctx)=>{
           if(!auth.isAuth()){
               ctx.redirect('#/home')
               return;
           }
           let postId=ctx.params.postId;
           post.removePost(postId).then(function () {
               notify.showInfo('Post Deleted');
               ctx.redirect('#/catalog')
           })
       })
       this.get('#/details/:postId',(ctx)=>{
            let postId = ctx.params.postId;
            const postPromise =post.getPostById(postId);
            const allCommentsPromise =comment.getPostComments(postId);
            Promise.all([postPromise,allCommentsPromise]).then(([post,comments])=>{
                    post.date = calcTime(post._kmd.ect);
                    post.isAuthor=post._acl.creator===sessionStorage.getItem('userId');

                    comments.forEach((c)=>{
                        c.date=calcTime(c._kmd.ect)
                        c.commentAuthor=c._acl.creator===sessionStorage.getItem('userId')
                    });
                    ctx.isAuth=auth.isAuth();
                    ctx.username=sessionStorage.getItem('username');
                    ctx.post=post;
                    ctx.comments =comments;
                    ctx.loadPartials({
                        header:'./templates/common/header.hbs',
                        footer:'./templates/common/footer.hbs',
                        navigation:'./templates/common/navigation.hbs',
                        postDetails:'./templates/details/postDetails.hbs',
                        comment:'./templates/details/comment.hbs'
                    }).then(function () {
                        this.partial('./templates/details/postDetailsPage.hbs')
                    })
            })})
       this.post('#/create/comment',(ctx)=>{
           let postId=ctx.params.postId;
           let content = ctx.params.content;
           let author = sessionStorage.getItem('username');
           comment.createComment(postId,content,author).then(function () {
               notify.showInfo('Comment added');
               ctx.redirect(`#/details/${postId}`)
           })
       });
       this.get('#/comment/delete/:commentId/post/:postId',(ctx)=>{
           let commentId = ctx.params.commentId;
           let postId=ctx.params.postId;
           comment.deleteComment(commentId).then(function () {
               notify.showInfo('Comment Deleted')
               ctx.redirect(`#/details/${postId}`);
           })
       })
       this.get('#/posts',(ctx)=>{
           if(!auth.isAuth()){
               ctx.redirect('#/home')
               return;
           }
           let username = sessionStorage.getItem('username');
           post.getMyPosts(username).then(function (posts) {
               posts.forEach((p,i)=>{
                   p.rank=i+=1;
                   p.data=calcTime(p._kmd.ect);
                   p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
               })
               ctx.isAuth = auth.isAuth();
               ctx.username = sessionStorage.getItem('username');
               ctx.posts= posts;
               ctx.loadPartials({
                   header:'./templates/common/header.hbs',
                   footer:'./templates/common/footer.hbs',
                   navigation:'./templates/common/navigation.hbs',
                   postList: './templates/posts/postList.hbs',
                   post: './templates/posts/post.hbs'
               }).then(function () {
                   this.partial('./templates/posts/viewMyPosts.hbs');
               });
           });
       })
   });
    function displayHome(ctx){
        ctx.loadPartials({
           header:'./templates/common/header.hbs',
           footer:'./templates/common/footer.hbs',
           loginForm:'./templates/forms/login.hbs',
           registerForm:'./templates/forms/register.hbs'
       }).then(function () {
           this.partial('./templates/welcome.hbs');
       })
    }
    function registerUser(ctx){
        let username = ctx.params.username;
        let password = ctx.params.password;
        auth.register(username,password)
            .then(function (userData) {
                console.log(userData);
                auth.saveTokens(userData);
                notify.showInfo('Register Successful');
                ctx.redirect('#/catalog')
            }).catch(notify.handleError);
    }
    function loginUser(ctx){
       let username = ctx.params.username;
       let password = ctx.params.password;
       auth.login(username,password)
           .then(function (userData) {
               auth.saveTokens(userData);
               notify.showInfo('Login Successful');
               ctx.redirect('#/catalog')
           }).catch(notify.handleError);
    }
    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    app.run()
});