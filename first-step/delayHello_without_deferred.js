function delayHello_without_deferred(word)
{
  setTimeout(function(){
    assert(true, 'Hello! ' + word);
  }, 1000);
}
