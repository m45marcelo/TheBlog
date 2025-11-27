export function CutterString(name: string| undefined): string | null{
    if(name === undefined){
        return null;
    }
    
    const nameCutter: string[] = name.split(" ");
    const newName: string = `${nameCutter[0]}-${nameCutter[1]}`

    return newName

}