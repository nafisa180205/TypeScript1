{
    type AreaString4<T> ={
        [key in keyof T] : T[key]
    }

    const area1 : AreaString4<{height : string; width: number}> ={
        height: "100",
        width: 50,
    }

}