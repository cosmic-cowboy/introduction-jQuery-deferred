/**
 * 1秒後にHello!を出力するDeferred対応関数。必ずresolveする
 *
 * @returns Promise
 */
function delayHello()
{
  var d = new $.Deferred();
  setTimeout(function(){
    assert(true, 'Hello!');
    d.resolve();
  }, 1000);
  return d.promise();
}
