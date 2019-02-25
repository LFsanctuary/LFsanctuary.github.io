loadPage = (pageId) => {
    document.title = 'LF Sanctuary for Women';
    $("#nav").css("display", "inline-flex");
    $( ".nav-page-link" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
        $( this ).removeClass("active");
    });
    $("#" + pageId + "-link").addClass("active");

    $(".page").each(function( index ) {
        console.log( index + ": " + $( this ).text() );
        $( this ).hide();
    });
    $("#" + pageId).show();
}