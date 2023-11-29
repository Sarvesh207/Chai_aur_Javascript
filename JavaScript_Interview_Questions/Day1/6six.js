var fullname = "sarveshgaynar";

var obj = {
    fullname:"Hack to skill",

    prop:{
        fullname:"Inside Prop",

        getFullname:function() {
            return this.fullname;
        },
    },
    getFullname:function () {
            return this.fullname;
    },

    getFullnameV2: () => this.fullname, //  refer window object in case of browser

    getFullnameV3:(function () {
        return this.fullname;
    })(),
}

console.log(obj.prop.getFullname());
console.log(obj.getFullname());
console.log(obj.getFullnameV2());
console.log(obj.getFullnameV3)