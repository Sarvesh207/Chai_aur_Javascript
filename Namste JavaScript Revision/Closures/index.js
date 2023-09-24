function z() {
  function x() {
    var a = 7;
    function y() {
      console.log(a);
    }
    a = 100;
    return y;
  }
}
