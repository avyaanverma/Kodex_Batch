const obj = {
    name: "Isha",
    age: 24,
    city: "Pune",
    greet: function(){
        console.log(this);
    }
}

Object.freeze(obj); // Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object is made effectively immutable. The method returns the object that was passed in.
// Object.seal(obj); // Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. The method returns the object that was passed in.
obj.name = "Bebu";
delete obj.age;

console.log(obj);


