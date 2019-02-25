loadPage = (pageId) => {
    let title = 'LF Sanctuary for Women';
    document.title = title;
    $(document).attr("title", title);
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