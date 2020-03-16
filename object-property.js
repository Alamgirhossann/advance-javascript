const student = [
    {id: 35, name: "Omor sunny"},
    {id: 45, name: "Manna"},
    {id: 55, name: "Purnima"},
    {id: 65, name: "Faruk"},
];
const names = student.map(x => x.name);
console.log(names);
const ids = student.filter(x => x.id < 40);
console.log(ids);
