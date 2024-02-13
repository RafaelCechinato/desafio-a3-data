
export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  
export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function formatDate(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
}

export function changeArrayToMultiSelectRoom(array){
    let formatRoom = [];
  
    array.map((item) => {
      formatRoom.push({ value: item.code, label: `Número: ${item.number}, Andar: ${item.floor}, Bloco: ${item.block}` });
    });

    return formatRoom;
}

export function changeArrayToMultiSelect(array){
    let format = [];

    array.map((item) => {
        format.push({ value: item.code, label: item.name });
    });

    return format;
}

export function getTodayDate() {
    return new Date();
}