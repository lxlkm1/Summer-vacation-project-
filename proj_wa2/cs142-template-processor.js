"use strict";


function Cs142TemplateProcessor(template) {
    Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
        const keys = Object.keys(dictionary);
        for (let i = 0; i < keys.length; i++){
            const matchingCharacters = "{{" + keys[i] + "}}";
            template = template.replace(matchingCharacters, dictionary[keys[i]]);
        }
        return template;
    };
}



// let template = "I love {{which}}";
// let dictionary = { which: "games" };
// let test = new Cs142TemplateProcessor(template);
// console.log(test.fillIn(dictionary));