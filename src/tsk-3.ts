{
    // type alias

    type Person = {
        name: string;
        address: string;
        hairNeyecolor: string[];
        incomeNExpense: number[] ; 
        hobbies: string[];
        FamilyMembers: string[];
        Job: string | null;
        skills: string[];
        MaritalStatus: "Married" | "Unmarried";
        friends: string[]
    }
    const person1 = {
        name: "Nafisa",
        address: "Malibagh",
        hairNeyecolor: ["black", "black"],
        incomeNExpense: [10,20] , 
        hobbies: ["cooking"],
        FamilyMembers: ["sister", "parents"],
        Job: null,
        skills: ["HTML", "CSS"],
        MaritalStatus: "Unmarried",
        friends: ["X", "Y"]
    }

    console.log(person1)
    console.log(person1.FamilyMembers[1])
}