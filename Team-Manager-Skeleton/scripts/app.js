const app = Sammy('#mainElement', function () {

    this.get("#/home", homeController.getHome)

    this.use("Handlebars", "hbs");

    this.get("#/register", userController.getRegister)
    this.post("#/register", userController.postRegister)

});
(() => {
    app.run("#/home");
})();