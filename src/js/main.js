(function ($) {
  $.getUrlParam = function (name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
})(jQuery);

$(function () {
  const category = $.getUrlParam('category')
  const tag = $.getUrlParam('tag')
  const post_list = $("#post_list").find("li")
  if ((!category && !tag) || category == 'all') {
    post_list.show()
    return
  }
  post_list.each(function(){
    const item = $(this)
    item.hide()
    if ($(this).data("tags").split(', ').indexOf(tag) > -1) {
      item.show()
    }
    if (category == $(this).data("category")) {
      item.show()
    }
  });
})

$("#toggle-list").bind('click', function(e) {
  const btn = $(this)
  const box = $("#menu-box")
  if (btn.data("show")) {
    box.css('left', - box.outerWidth(true))
    btn.data("show", false).html('>')
    return
  }
  box.css('left', 0)
  btn.data("show", true).html('<')
})
