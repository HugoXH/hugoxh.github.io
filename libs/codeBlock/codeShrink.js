// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

  $('.code-area').prepend($code_expand);
  $('.code-expand').on('click', function () {
    var $area = $(this).closest('.code-area');
    if ($area.hasClass('code-closed')) {
      $area.find('figure.highlight, pre').show();
      $area.removeClass('code-closed');
    } else {
      $area.find('figure.highlight, pre').hide();
      $area.addClass('code-closed');
    }
  });
});
