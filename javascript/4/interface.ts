// I usually use Type, however, the usage is similar.
// Interface is a type to describe an object(or class) that allow developers to implement with required properties and avoid error or typo.

interface User {
  name: string;
  age: number;
}

// The biggest difference between Type and Interface is the way to mix.

interface User1 {
  name: string;
  age: number;
}

interface Vip1 extends User1 {
  vipId: number;
  birthday: Date;
}

type User2 = {
  name: string;
  age: number;
};

type Vip2 = User2 & {
  vipId: number;
  birthday: Date;
};
