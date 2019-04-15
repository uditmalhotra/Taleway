$(document).ready(function () {
  $('.books').hide();
  $('#allNovels').show();
  $('#catagoryContent').change(function () {
    $('.books').hide();
    $('#'+$(this).val()).show();
  })
});