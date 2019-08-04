const homeController = function () {

    const getHome = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;
        
        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function(){
            this.partial('../views/home/home.hbs')
        })

        //requester2.get("recipes/" + recipeId, "appdata", "Kinvey")
		
		//helper.loadPartials(context, {})
        //    .then(function () {
        //        this.partial("../views/recipe/recipe-details.hbs");
        //    });
		
		//helper.addHeaderInfo(context);
    };

    return {
        getHome
    }
}();