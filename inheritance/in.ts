class User {
  id: number;
  name: string;
  email: string;
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  sayHello(): void {
    console.log(`Hello ${this.name}`);
  }
}

class Admin extends User {
  permissions: string[];
  constructor(id: number, name: string, email: string, permissions: string[]) {
    super(id, name, email);
    this.permissions = permissions;
  }
}

const user = new User(1 , "Ahmed" , "ahmed@fmail.com")
user.sayHello()

const admin = new Admin(2 , "naga" , "naga@gmail.com" ,["add" , "delete"])
admin.sayHello()