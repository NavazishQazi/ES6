let data =`{
    
        "name":"navazish",
        "age":23,
        "is_student":true,
        "passport_no":null,
        "p_lang":["c","c++","java","python"],
        "address":{
            "city":"dewas",
            "state":"m.p",
            "pincode":455001
        }
    
}`

let dobject = JSON.parse(data);
console.log(dobject['address']['pincode']);