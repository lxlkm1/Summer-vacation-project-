"use strict";


class TableTemplate {


    static fillIn(id, dict, columnName = 0) {
        const excel = document.getElementById(id);
        //表格列数和行数
        const numberOfColumns = excel.rows[0].cells.length ;//2
        const numberOfRows = excel.rows.length ;//5
        const dictKeys = Object.keys(dict);
        let whereColumnName;
        // console.log(numberOfColumns + 'ssss');
        //如果columnName = 0就把所有列处理掉
        if (columnName === 0) {
            //在第一行开始
            for (let i = 0; i < numberOfRows; i++) {
                //在第一列开始
                for (let j = 0; j < numberOfColumns; j++) {
                    for (let k = 0; k < dictKeys.length; k++) {
                        excel.rows[i].cells[j].innerHTML = excel.rows[i].cells[j].innerHTML.replace("{{" + dictKeys[k] + "}}", dictKeys[k]);
                    }
                    
                }
            }
        }
        if (columnName !== 0) {
            for (let i = 0; i < numberOfColumns; i++) {
                for (let k = 0; k < dictKeys.length; k++) {
                    excel.rows[0].cells[i].innerHTML = excel.rows[0].cells[i].innerHTML.replace("{{" + dictKeys[k] + "}}", dictKeys[k]);
                }

                //判断columnName在第几列
                for (let x = 0; x < numberOfColumns; x++) {
                    if (excel.rows[0].cells[x].innerHTML === columnName) {
                        whereColumnName = x;
                    }
                }
            }
            
            if (typeof (whereColumnName) !== 'undefined') {
                for (let i = 1; i < numberOfRows; i++) {
                    // console.log(i);
                    for (let k = 0; k < dictKeys.length; k++) {
                        excel.rows[i].cells[whereColumnName].innerHTML = excel.rows[i].cells[whereColumnName].innerHTML.replace("{{" + dictKeys[k] + "}}", dictKeys[k]);
                    }

                }
            }
            
           
        }
        excel.style.visibility = 'visible';
    }
}

