$("body").on("change", ".filter", function (e) {
  const this_select = e.target;
  const choice = $(this_select).val();

  $(".item.active").removeClass("active"); //turns everything off that has active class
  $(`.item.${choice}`).addClass("active"); //turns everuthing on that matches the class of the filter choice

});
