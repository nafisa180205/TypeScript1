{
    function processValue(value: string|number){
        if( typeof value === "string"){
            return `Returned string ${value.length}`
        }
        else{
            return value*value
        }
    }

    console.log(processValue("ok") as string)
    console.log(processValue(3) as number)
}