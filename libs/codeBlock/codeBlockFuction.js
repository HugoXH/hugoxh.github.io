// 代码块功能依赖

$(function () {
    if ($('figure.highlight').length > 0) {
        // hexo 自带 highlight: 每个代码块是一个 figure(内含行号/代码两个 pre)，只包一层
        $('figure.highlight').wrap('<div class="code-area" style="position: relative"></div>');
    } else {
        // prismjs: 每个 pre 独立一个代码块
        $('pre').wrap('<div class="code-area" style="position: relative"></div>');
    }
});
