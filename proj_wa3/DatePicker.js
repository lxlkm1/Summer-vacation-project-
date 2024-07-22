"use strict";



class DatePicker {
    constructor(id, dateSelection) {
        this.id = id;
        const selectedDate = new Date();
        dateSelection(id, selectedDate);
       
    }

    render(DateInput) {
        //获取本月第一天是星期几
        const whatDayIsToday = new Date(DateInput.getFullYear(), DateInput.getMonth(), 1).getDay();
        //获取月天数
        const daysNow = new Date(DateInput.getFullYear(), DateInput.getMonth() + 1, 0).getDate();
        const daysLast = new Date(DateInput.getFullYear(), DateInput.getMonth(), 0).getDate();
        //先把标题按钮打印上去
        const partPrintOne = '<h1 id="top">Date</h1>' +
            '<div id = "control">' +
            '<button id="' + this.id + 'lastYear" class="lastYear">&lt;&lt;</button>' +
            '<button id="' + this.id + 'lastMouth" class="lastMouth">&lt;</button>' +
            '<button id="' + this.id + 'nextMouth" class="nextMouth">&gt;</button>' +
            '<button id="' + this.id + 'nextYear" class="nextYear">&gt;&gt;</button>' +
            '<div id="dateShow" >' +
            (DateInput.getMonth() + 1) + '/' +
            DateInput.getDate() + '/' +
            DateInput.getFullYear() +
            '</div > ' +
            '</div>' +
            '<table id = "' + this.id + 'tb">' +
            '<tr>' +
            '<td class="head">Sat</td>' +
            '<td class="head">Mon</td>' +
            '<td class="head">Tue</td>' +
            '<td class="head">Wed</td>' +
            '<td class="head">Thu</td>' +
            '<td class="head">Fri</td>' +
            '<td class="head">Sun</td> ' +
            '</tr>';
        
        //计算日历几行
        const calendarRows = 1 + Math.ceil((daysNow - (7 - whatDayIsToday)) / 7);
        // console.log(daysNow + "daysNow");
        console.log(whatDayIsToday + "what");
        // console.log(calendarRows + "cal");
        //渲染日期
        let body = '';
        let day = 1;
        //第一行
        for (let j = 0; j < (7 - whatDayIsToday); j++) {
            if (day === DateInput.getDate()) {
                body = body + '<td class="selected">' + day + '</td>';
            }
            else {
                body = body + '<td class="common">' + day + '</td>';
            }
            day++;
        }
        body += '</tr>';
        //中间行
        for (let i = 0; i < calendarRows - 2; i++) {
            body += '<tr>';
            for (let j = 0; j < 7; j++) {
                if (day === DateInput.getDate()) {
                    body = body + '<td class="selected">' + day + '</td>';
                }
                else {
                    body = body + '<td class="common">' + day + '</td>';
                }
                day++;
            }
            body += '</tr>';
        }
        console.log("beef" + calendarRows);
        const notTheNumberOfDaysOnTheLastLine = daysNow - day + 1;
        //最后行
        body +=  '<tr>';
        for (let j = 0; j < notTheNumberOfDaysOnTheLastLine; j++) {
            if (day === DateInput.getDate()) {
                body = body + '<td class="selected">' + day + '</td>';
            }
            else {
                body = body + '<td class="common">' + day + '</td>';
            }
            day++;
        }
        const partPrintThree = body;
        //前面一个月
        let startingFromThePreviousMonth = daysLast - (whatDayIsToday) + 1;
        // console.log(daysLast + "Last");
        let beforeBody = '';
        beforeBody += '<tr>';
        for (let i = 0; i < whatDayIsToday; i++) {
            beforeBody += '<td class="notBelongingTo">' + startingFromThePreviousMonth + '</td>';
            startingFromThePreviousMonth++;
        }
        const partPrintTwo = beforeBody;
        //后面一个月
        let afterBody = '';
        let afterStart = 1;
        for (let i = 0; i < (calendarRows * 7 - day - whatDayIsToday + 1); i++){
            afterBody += '<td class="notBelongingTo">' + afterStart + '</td>';
            afterStart++;
        }
        afterBody += '</tr></table>';
        
        //结束
        const partPrintFour = afterBody;
    
    
        const display = document.getElementById(this.id);
        display.innerHTML = partPrintOne + partPrintTwo + partPrintThree + partPrintFour;
        // 添加控制函数
        const lastYear = document.getElementById(this.id + 'lastYear');
        const lastMouth = document.getElementById(this.id + 'lastMouth');
        const nextMouth = document.getElementById(this.id + 'nextMouth');
        const nextYear = document.getElementById(this.id + 'nextYear');
        lastYear.addEventListener('click', () => {
            this.render(new Date(DateInput.getFullYear() - 1, DateInput.getMonth(), DateInput.getDate()));
        });
        lastMouth.addEventListener('click', () => {
            this.render(new Date(DateInput.getFullYear(), DateInput.getMonth() - 1, DateInput.getDate()));
        });
        nextMouth.addEventListener('click', () => {
            this.render(new Date(DateInput.getFullYear(), DateInput.getMonth() + 1, DateInput.getDate()));
        });
        nextYear.addEventListener('click', () => {
            this.render(new Date(DateInput.getFullYear() + 1, DateInput.getMonth(), DateInput.getDate()));
        });

        const dateTb = document.getElementById(this.id + "tb");
        const self = this;
        dateTb.addEventListener('click', function (event) {
            if (event.target.tagName === "TD" && event.target.className === "common") {
                self.render(new Date(DateInput.getFullYear(), DateInput.getMonth(),Number(event.target.textContent)));
                
            }

            
        });

     
    }
}
    
