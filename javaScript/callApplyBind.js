const student1 = {
  name: "student1",
  getname(age, place) {
    console.log(`${this.name} ${age} ${place}`);
  },
};
const student2 = {
  name: "student2",
};
student1.getname.call(student2, 22, "thrissur");
student1.getname.apply(student2, [23, "kochi"]);
console.log(student1.getname.bind(student2,24,'malapuram'));
// const bind=
// bind()