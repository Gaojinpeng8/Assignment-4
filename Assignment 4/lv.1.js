const user = { name: "John", years: 30 };
user.isAdmin=false;

const {
    name:name,
    years:age,
    isAdmin:isAdmin
}=user;
console.log(name); 
console.log(age); 
console.log(isAdmin);