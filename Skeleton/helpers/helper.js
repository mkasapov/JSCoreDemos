const helper = function () {

    const handler = function (response) {

        if (response.status >= 400) {
			//not.loaded();
            //response.json().then(x => { 
            //    not.showError(x.description);
            //});
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    const addHeaderInfo = function (context) {
        const loggedIn = storage.getData('userInfo') !== null;
        if (loggedIn) {
            let userInfo = JSON.parse(storage.getData('userInfo'));
            context.loggedIn = loggedIn;
            context.username = userInfo.username;
        }
    }

    const loadPartials = function (context, externalPartials) {
        let defaultPartials = {
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"
        };

        if (externalPartials) {
            for (const key in externalPartials) {
                const element = externalPartials[key];
                
                defaultPartials[key] = element;
            }
        }

        console.log("partials", defaultPartials);
        return context.loadPartials(defaultPartials);
    }

    return {
        handler,
        passwordCheck,
        loadPartials,
        addHeaderInfo
    }
}();