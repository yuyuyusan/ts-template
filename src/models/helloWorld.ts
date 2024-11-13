export class HelloWorld {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public showName() {
    return `${this.name}さんは${this.age}歳です。`;
  }
}
