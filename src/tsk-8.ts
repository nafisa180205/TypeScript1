{
    //Intersection Types

    type User = {
        name: string;
        email: string;
    };
    
    type Admin = {
        adminLevel: number;
    }

    type AdminUser = User & Admin

    function describeAdmin(user: AdminUser){

        console.log(user.adminLevel)
    }

    const user1:AdminUser = {
        name: "mr.x",
        email: "g@google.com",
        adminLevel: 1

    }

    describeAdmin(user1)
}