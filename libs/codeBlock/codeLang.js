// 代码块语言识别

$(function () {
    var $figures = $('figure.highlight');
    if ($figures.length > 0) {
        // hexo 自带 highlight: 语言名在 figure 的 class 里，如 "highlight java"
        $figures.each(function () {
            var lang = ($(this).attr('class') || '').replace('highlight', '').trim();
            if (lang && lang !== 'plaintext') {
                $(this).before('<div class="code_lang" title="代码语言">' + lang + '</div>');
            }
        });
        return;
    }
    // prismjs: 语言名在 pre 的 class 里，如 "language-java line-numbers"
    $('pre').before('<div class="code_lang" title="代码语言"></div>');
    $('pre').each(function () {
        var code_language = $(this).attr('class');

        if (!code_language) {
            return true;
        };
        var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

        $(this).siblings(".code_lang").text(lang_name);
    });
});
