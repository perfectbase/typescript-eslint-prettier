console.log('hello world');

const someVar = 'unused';

const someFunction = (param) => {
  return 'Hello World!!';
};

type MyFuncType = (name: string) => string;

const otherFunction: MyFuncType = (name) => {
  return `Hello ${name}!`;
};

const theLastFunction = (name: string) => {
  if (name[0] === 'R') {
    return `Hello ${name}!`;
  }
};
