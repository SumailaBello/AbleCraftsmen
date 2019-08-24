$(()=>{

    $("div.register").hide();

    $("#login").click(()=> {
        window.location.assign("login.html")
    });

    // link to registration form
    $("#registerButton").click((event)=> {
        event.preventDefault();
        $("div.login").hide("fast");
        $("div.register").show("fast");
        $("#status").addClass("d-none");
    })

    // link to display login form
    $("#loginLink").click((event)=> {
        event.preventDefault();
        $("div.register").hide("fast");
        $("div.login").show("fast");
        $("#status").addClass("d-none");
    })



})