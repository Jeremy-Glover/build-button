var num = 0;

$('button').click(function () {
  num++;
  $('button').html(num + ' like');
  if (num <= 1) {
    return true;
  } else {
  return $('button').html(num + ' likes');
  }
});
