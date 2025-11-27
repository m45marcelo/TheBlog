export const pathNameCutter = (path: string | undefined): string | null => {
    if(path === undefined){
        return null
    }

    const pathNameCutter: string[] = path.split("/");
    const newPathName: string = pathNameCutter[2];
    return newPathName;
}