$(function () {
    var doc = document,
        elm = doc.documentElement,
        bod = doc.body,
        vPos = 3000,
        vLoaded = false;

    function setupBootstrap() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    };
    function changeThemeFile(theme) {
        if (theme && typeof theme === 'string') {
            document.getElementById('syntaxy-theme-hook').href = './dist/css/syntaxy.' + theme + '.min.css';
            Cookies.set('_theme', theme);
        }
    };
    function fetchSyntaxCode() {
        var prebox = $('#syntaxy-code'),
            request = $.ajax({
                method: "GET",
                url: "../syntax/javascript.txt",
                dataType: "text",
                async: true,
                processData: false,
                crossDomain: false,
                cache: false,
                success: function (data, textStatus, jqXHR) {
                    prebox.text(data.replace(/</g, '&lt;')).syntaxy({
                        codeTitle: 'ARGame smart contract',
                        codeType: 'default',
                        debugLines: '',
                    });
                },
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
    };
    setupBootstrap();
    fetchSyntaxCode();
      $('.syntaxy').syntaxy();
});

