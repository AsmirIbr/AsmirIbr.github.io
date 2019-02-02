function LoginFormRender() {
    this.pageData = new PageLogic();

    this.renderForm = () => {

        var $popUpLogIn = $("<div>").appendTo($(".top-bar").parent()).addClass("popUp-login").attr("id", "login-popUp");
        var $logInDiv = $("<div>").appendTo($popUpLogIn).animate({ width: '60%' }, "slow").addClass("log-in-div");

        $("#tilt").appendTo($logInDiv).addClass("image-holder")
            .append($("<img>").attr("src", "logo/tilt-logo.png").addClass("image-login"));


        var $loginHolder = $("<div>").appendTo($logInDiv).addClass("login-holder");
        var $loginForm = $("<div>").appendTo($loginHolder).addClass("login-form-holder");


        $("<div>").appendTo($logInDiv).addClass("close-logIn")
            .append($("<h6>").text("Maybe later"))
            .append($("<i>").addClass("fas").addClass("fa-times")
                .on("click", (event) => {
                    $($popUpLogIn).fadeOut("slow");

                    $("body").css("overflow", "scroll")

                    setTimeout(function () {
                        $("#tilt").appendTo(".bottom-bar").empty().removeClass("image-holder");
                        $($popUpLogIn).remove();
                    }, 500);

                }));


        $("<h3>").appendTo($loginForm).text("Member login");
        $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "email-error-login")
            .append($("<input>").attr("type", "text").attr("id", "login-email").attr("placeholder", "Email").addClass("input"))
            .append($("<span>").addClass("focus-input"))
            .append($("<span>").addClass("symbol-input")
                .append($("<i>").addClass("fa").addClass("fa-envelope")));

        $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "pass-error-login")
            .append($("<span>").addClass("forgot-pass")
                .append($("<a>").addClass("forgot-pass-text").text("forgot?")
                    .on("click", (event) => {
                        $(".login-holder").css("display", "none");

                        var $resetHolder = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder");
                        var $loginForm = $("<div>").appendTo($resetHolder).addClass("register-form-holder");

                        $("<h3>").appendTo($loginForm).text("Reset password");

                        $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "email-error")
                            .append($("<input>").attr("type", "text").attr("id", "forgot-email").attr("placeholder", "Email").addClass("input"))
                            .append($("<span>").addClass("focus-input"))
                            .append($("<span>").addClass("symbol-input")
                                .append($("<i>").addClass("fa").addClass("fa-envelope")));


                        $("<div>").appendTo($loginForm).addClass("input-div")
                            .append($("<input>").attr("type", "submit").attr("value", "Reset password").addClass("input-button")
                                .on("click", (event) => {

                                    if (($("#forgot-email").val().indexOf("@") === -1)) {

                                        $("<i>").appendTo("#email-error").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                            .append($("<div>").addClass("invalid-pass")
                                                .append($("<h4>").text("Valid email is required,   ex: nerroazzuri@mail.com")))


                                    } else {
                                        $($resetHolder).css("display", "none");
                                        var $waiting = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder")
                                            .append($("<img>").attr("src", "loader/football_1000.gif").addClass("loader-reg"))

                                        var email = $("#forgot-email").val();

                                        var userResetPass = this.pageData.resetPassword(email);


                                        if (userResetPass === true) {
                                            $($resetHolder).remove();

                                            setTimeout(() => {
                                                $(".register-holder").remove();

                                                var $resetHolder = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder");
                                                var $loginForm = $("<div>").appendTo($resetHolder).addClass("register-form-holder");

                                                $("<h3>").appendTo($loginForm).text("Enter new password");

                                                $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "pass-error")
                                                    .append($("<input>").attr("type", "password").attr("id", "reset-pass").attr("placeholder", "New password").addClass("input"))
                                                    .append($("<span>").addClass("focus-input"))
                                                    .append($("<span>").addClass("symbol-input")
                                                        .append($("<i>").addClass("fa").addClass("fa-lock")));


                                                $("<div>").appendTo($loginForm).addClass("input-div")
                                                    .append($("<input>").attr("type", "submit").attr("value", "Submit new password").addClass("input-button")
                                                        .on("click", (event) => {

                                                            if ($("#reset-pass").val().length < 8) {

                                                                $("<i>").appendTo("#pass-error").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                                                    .append($("<div>").addClass("invalid-pass")
                                                                        .append($("<h4>").text("Password is required, enter at least 8 characters")));

                                                            } else {

                                                                $(".login-holder").css("display", "none");

                                                                var $waiting = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder")
                                                                    .append($("<img>").attr("src", "loader/football_1000.gif").addClass("loader-reg"))

                                                                var newPass = $("#reset-pass").val();

                                                                var userNewPass = this.pageData.postNewPassword(newPass, email);


                                                                if (userNewPass === false) {
                                                                    $(".login-holder").css("display", "none");

                                                                    setTimeout(() => {
                                                                        $($waiting).empty().append($("<div>").addClass("success-reg")
                                                                            .append($("<h4>").text("Something got wrong. Please  ")
                                                                                .append($("<a>").text("try again").on("click", (event) => {
                                                                                    $(".register-holder").remove();
                                                                                    $(".login-holder").css("display", "flex");
                                                                                }))));
                                                                    }, 3000);
                                                                } else {

                                                                    $($resetHolder).remove();

                                                                    setTimeout(() => {
                                                                        $($waiting).empty().append($("<div>").addClass("success-reg")
                                                                            .append($("<h4>").text("Success! Your Password has been changed! Please ")
                                                                                .append($("<a>").text("Login").on("click", (event) => {
                                                                                    $(".register-holder").remove();
                                                                                    $(".login-holder").css("display", "flex");
                                                                                }))));
                                                                    }, 3000);
                                                                }
                                                            }

                                                        }))

                                            }, 3000);
                                        } else {

                                            setTimeout(() => {
                                                $($waiting).empty().append($("<div>").addClass("success-reg")
                                                    .append($("<h4>").text("The email you entered is incorrect. Please  ")
                                                        .append($("<a>").text("try again").on("click", (event) => {


                                                            $(event.target).parent().parent().parent().remove();
                                                            $($resetHolder).css("display", "flex");
                                                        }))));
                                            }, 3000);
                                        }
                                    }

                                }));

                    })))

            .append($("<input>").attr("type", "password").attr("id", "login-pass").attr("placeholder", "Password").addClass("input"))
            .append($("<span>").addClass("focus-input"))
            .append($("<span>").addClass("symbol-input")
                .append($("<i>").addClass("fa").addClass("fa-lock")));

        $("<div>").appendTo($loginForm).addClass("input-div")
            .append($("<input>").attr("type", "submit").attr("value", "Let me in").addClass("input-button")
                .on("click", (event) => {

                    if (($("#login-email").val().indexOf("@") === -1) || ($("#login-pass").val().length < 8)) {

                        if ($("#login-pass").val().length < 8) {

                            $("<i>").appendTo("#pass-error-login").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                .append($("<div>").addClass("invalid-pass")
                                    .append($("<h4>").text("Password is required, enter at least 8 characters")))
                        };

                        if ($("#login-email").val().indexOf("@") === -1) {

                            $("<i>").appendTo("#email-error-login").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                .append($("<div>").addClass("invalid-pass")
                                    .append($("<h4>").text("Valid email is required,   ex: nerroazzuri@mail.com")))
                        }

                    } else {
                        $(".login-holder").css("display", "none");

                        var $waiting = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder")
                            .append($("<img>").attr("src", "loader/football_1000.gif").addClass("loader-reg"))

                        var email = $("#login-email").val();
                        var pass = $("#login-pass").val();

                        var userGet = this.pageData.getUserData(email, pass);


                        if (userGet === false) {
                            $(".login-holder").css("display", "none");

                            setTimeout(() => {
                                $($waiting).empty().append($("<div>").addClass("success-reg")
                                    .append($("<h4>").text("The email or password you entered is incorrect. Please  ")
                                        .append($("<a>").text("try again").on("click", (event) => {
                                            $(".register-holder").remove();
                                            $(".login-holder").css("display", "flex");
                                        }))));
                            }, 3000);
                        } else {

                            $(".login-holder").css("display", "none");

                            setTimeout(() => {
                                $($popUpLogIn).fadeOut("slow");
                                $("body").css("overflow", "scroll")

                                setTimeout(() => {
                                    $("#tilt").appendTo(".bottom-bar").empty().removeClass("image-holder");
                                    $($popUpLogIn).remove();

                                    $("#icon-login-header").empty().addClass("user-header-holder")
                                        .append($("<img>").attr("src", "logo/user-logo.png").addClass("user-img"))
                                        .append($("<h6>").text(userGet).addClass("user-name"))
                                        .append($("<i>").addClass("fas").addClass("fa-sign-out-alt").addClass("logOut")
                                            .on("click", (event) => {
                                                $("#icon-login-header").empty().removeClass("user-header-holder").addClass("bla1")
                                                    .append($("<i>").addClass("fas").attr("id", "logIn").addClass("fa-user-alt").addClass("log-in").removeClass("user-header-holder")
                                                        .on("click", (event) => {

                                                            $("body").css("overflow", "hidden");

                                                            this.renderForm();
                                                        }))

                                                    .append($("<p>").text("My account"))
                                            }));

                                }, 500);
                            }, 3000);
                        }
                    }
                }));

        $("<div>").appendTo($loginForm).addClass("register-text-holder")
            .append($("<h6>").text("Not a member, become"))
            .append($("<i>").addClass("fas").addClass("fa-arrow-right").attr("id", "open-register")
                .on("click", (event) => {

                    $(".login-holder").css("display", "none");

                    var $registerHolder = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder");
                    var $loginForm = $("<div>").appendTo($registerHolder).addClass("register-form-holder");

                    $("<h3>").appendTo($loginForm).text("Become a member");

                    $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "name-error")
                        .append($("<input>").attr("type", "text").attr("id", "register-name").attr("placeholder", "Name").addClass("input"))
                        .append($("<span>").addClass("focus-input"))
                        .append($("<span>").addClass("symbol-input")
                            .append($("<i>").addClass("fa").addClass("fa-signature")));

                    $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "email-error")
                        .append($("<input>").attr("type", "text").attr("id", "register-email").attr("placeholder", "Email").addClass("input"))
                        .append($("<span>").addClass("focus-input"))
                        .append($("<span>").addClass("symbol-input")
                            .append($("<i>").addClass("fa").addClass("fa-envelope")));

                    $("<div>").appendTo($loginForm).addClass("input-div").attr("id", "pass-error")
                        .append($("<input>").attr("type", "password").attr("id", "register-pass").attr("placeholder", "Password").addClass("input"))
                        .append($("<span>").addClass("focus-input"))
                        .append($("<span>").addClass("symbol-input")
                            .append($("<i>").addClass("fa").addClass("fa-lock")));

                    $("<div>").appendTo($loginForm).addClass("input-div")
                        .append($("<input>").attr("type", "submit").attr("value", "Register as member").addClass("input-button")
                            .on("click", (event) => {

                                if (($("#register-email").val().indexOf("@") === -1) || ($("#register-pass").val().length < 8) || ($("#register-name").val().length <= 0)) {

                                    if ($("#register-pass").val().length < 8) {

                                        $("<i>").appendTo("#pass-error").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                            .append($("<div>").addClass("invalid-pass")
                                                .append($("<h4>").text("Password is required, enter at least 8 characters")))
                                    };

                                    if ($("#register-name").val().length <= 0) {

                                        $("<i>").appendTo("#name-error").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                            .append($("<div>").addClass("invalid-pass")
                                                .append($("<h4>").text("Name is required")))

                                    };

                                    if ($("#register-email").val().indexOf("@") === -1) {

                                        $("<i>").appendTo("#email-error").addClass("fas").addClass("fa-exclamation-circle").addClass("icon-name")
                                            .append($("<div>").addClass("invalid-pass")
                                                .append($("<h4>").text("Valid email is required,   ex: nerroazzuri@mail.com")))
                                    }

                                } else {
                                    $($registerHolder).css("display", "none");
                                    var $waiting = $("<div>").appendTo($logInDiv).fadeIn("slow").addClass("register-holder")
                                        .append($("<img>").attr("src", "loader/football_1000.gif").addClass("loader-reg"))

                                    var name = $("#register-name").val();
                                    var email = $("#register-email").val();
                                    var pass = $("#register-pass").val();

                                    var userPostAnswer = this.pageData.postUserData(name, email, pass);

                                    if (userPostAnswer === true) {
                                        $($registerHolder).remove();

                                        setTimeout(() => {
                                            $($waiting).empty().append($("<div>").addClass("success-reg")
                                                .append($("<h4>").text("Registration successful. Please ")
                                                    .append($("<a>").text("Login").on("click", (event) => {
                                                        $(".register-holder").remove();
                                                        $(".login-holder").css("display", "flex");
                                                    }))));
                                        }, 3000);
                                    }
                                }


                            }));

                    $("<div>").appendTo($loginForm).addClass("login-text-holder")
                        .append($("<i>").addClass("fas").addClass("fa-arrow-left").attr("id", "open-register")
                            .on("click", (event) => {

                                $(".register-holder").remove();
                                $(".login-holder").css("display", "flex");
                            }))
                        .append($("<h6>").text("Already member? Login "))


                }))
    }

}