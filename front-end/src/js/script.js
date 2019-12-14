import XLSX from "xlsx";


console.log(XLSX);

const parseExcel =  function(item, callback) {
    const file = item.files[0];
   
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const result = workbook.Sheets.Sheet1;        
        callback(result);
    }

    reader.readAsArrayBuffer(file);
}


export { parseExcel }  ;

