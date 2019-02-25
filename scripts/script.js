loadPage = (pageId) => {
    $("#nav").show();
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