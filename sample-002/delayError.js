/**
 * 1秒後にエラーを発生させるDeferred対応関数。必ずrejectする
 *
 * @returns Promise
 */
function delayError() {
  var d = new $.Deferred();
  setTimeout(function(){
    d.reject('Error!!');
  }, 1000);
  return d.promise();
}