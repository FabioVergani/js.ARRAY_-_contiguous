Object.defineProperty(Array.prototype,'contiguous',{get:function(){return this.join('')}});

console.log([1,2,3].contiguous)
