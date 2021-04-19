const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]
/*
console.log(nested);
console.log(nested.flat());
console.log(nested.flat().flat());
console.log(nested.flat(2))*/


const techs = ['react redux', 'angular', 'vue', 'deno and node']
console.log(techs.map(t => t.split(' ').flat()));
console.log(techs.flatMap(t => t.split(' ')))