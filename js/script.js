const bind = function(fn, context) {
  const bindArgs = [].slice.call(arguments, 2);
  return function() {
    const fnArgs = [].slice.call(arguments);
    return fn.apply(context, bindArgs.concat(fnArgs));
  };
};