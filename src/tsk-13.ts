{
    //generic array

    type GenericArray<T> = Array<T>
    
    const rollNumbers: GenericArray<number> = [1,4,4,3,3,5,5,5]

    function removeDuplicates<T>(items: T[]): T[]{
        return Array.from(new Set(items));
    }

    console.log(removeDuplicates(rollNumbers))

}