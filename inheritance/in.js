var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.sayHello = function () {
        console.log("Hello ".concat(this.name));
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name, email, permissions) {
        var _this = _super.call(this, id, name, email) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
var user = new User(1, "Ahmed", "ahmed@fmail.com");
user.sayHello();
var admin = new Admin(2, "naga", "naga@gmail.com", ["add", "delete"]);
admin.sayHello();
