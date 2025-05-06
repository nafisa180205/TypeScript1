{
    const book1: string[] =["a","b","c"]
    const book2: string[] =["a","b","c"]

    //spread operator
    book1.push(...book2)
    console.log(book1)

    const user ={
        name: "X",
        age: 300,
        height: 40,
        weight: 2,
    }

    // rest operator
    const {name, ...rest} = user
    //destructuring
    const {age, height, weight} = user

    function sum(...numbers: number[]){
        let add = 0;
        numbers.forEach((number:number) => {add = add+number})
        return add
    }
    console.log(sum(4,5,6,7))
}