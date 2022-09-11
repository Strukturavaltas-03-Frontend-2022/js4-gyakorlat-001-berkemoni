/*
Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. 
A függvény visszatérési érték egy Promise.  
Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók
 a Promise resolved lesz és visszaad egy új tömböt, 
 ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 
'Error: Not all items in the array are strings!'
*/

const convertToUppercase = (list = [string1, string2]) => {
    return new Promise((resolve, reject) => {
        if (!list.some(string => typeof string !== 'string')) {
            const transformedList = list.map(string => string.toUpperCase);
            resolve(transformedList);
        } else {
            reject('Error: Not all items in the array are strings');
        }
    });
};

export default convertToUppercase;
