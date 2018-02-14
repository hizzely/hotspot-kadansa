function viewPage() {
    // load main content
    $("#content-main").load("http://10.100.20.2/hotspot-data/contents/main.html", function (responseTxt, statusTxt, jqXHR) {
        if (statusTxt == "success") {

        } else {
            alert("Error: " + jqXHR.status + " " + jqXHR.statusTxt);
        }
    });

    // Load Gambar Header
    $("#header").html("<div align='center' style='padding-top: 25px;'><img src='img/header-default.png' alt='Kadansa Logo' /></div>");

    // load sidebar
    $("#sidebar-widget").load("http://10.100.20.2/hotspot-data/contents/sidebar-widget.html");
}
