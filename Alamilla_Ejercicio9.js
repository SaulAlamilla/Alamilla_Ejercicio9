/*
Ejercicio 9
Alumno: Saul Humberto Alamilla Calixto
No control: 18390023
----------------------------
*/

//JSON
/*
[{
    "_id": {
        "$oid": "5968dd23fc13ae04d9000001"
    },
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
}, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
    },
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
}, {
    "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
    },
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
}]
*/
//JAVASCRIPT
let arrayJson = new Array();
arrayJson[0] = new Object();
arrayJson[0]._id = new Object();
arrayJson[0]._id.$oid = "5968dd23fc13ae04d9000001";
arrayJson[0].product_name = "sildenafil citrate";
arrayJson[0].supplier = "Wisozk Inc";
arrayJson[0].quantity = 261;
arrayJson[0].unit_cost = "$10.47";

arrayJson[1] = new Object();
arrayJson[1]._id = new Object();
arrayJson[1]._id.$oid = "5968dd23fc13ae04d9000002";
arrayJson[1].product_name = "Mountain Juniperus ashei";
arrayJson[1].supplier = "Keebler-Hilpert";
arrayJson[1].quantity = 292;
arrayJson[1].unit_cost = "$8.74";

arrayJson[2] = new Object();
arrayJson[2]._id = new Object();
arrayJson[2]._id.$oid = "5968dd23fc13ae04d9000003";
arrayJson[2].product_name = "Dextromathorphan HBr";
arrayJson[2].supplier = "Schmitt-Weissnat";
arrayJson[2].quantity = 211;
arrayJson[2].unit_cost = "$20.53";

