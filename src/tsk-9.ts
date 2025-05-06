{
    // optional chaining
     const employee ={
        nane: "mr.lee",
        email: "x@gmail.com",
        contactNo: "019",
        address: {
            street: "123 Main St",
            city: "New York",
            country: {
                name: "USA",
                code: "US"
            }
        },
        salary: 20
     }

     function getEmployeeCity(employee : any){
        console.log(employee.address?.city)
     }

     getEmployeeCity(employee)
}