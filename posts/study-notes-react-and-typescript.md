---
title: 'Using Typescript w/ React'
date: '2021-02-01'
tag: Study Notes
---

# TypeScript + React
[Reference](https://github.com/typescript-cheatsheets/react)

##### Functional Components
- Create a type or interface that defines the props that the component receives
```
type AppProps = {
    message: string
}
const App = ({ message }: AppProps) => {
    return (
        <div>{message}</div>;
    )
}
```
> Special Note: It is discouraged to use `React.FC` as expressed [here](https://github.com/facebook/create-react-app/pull/8177)

##### Hooks
**useState**
- You can utilize type inference most of the time for hooks such as `useState`
- When a hook is initialized with a null value, you can use a union type with the hook
`const [user, setUser] = useState<IUser | null>(null);`

**useReducer**
- Use Discriminated Unions to define the type expression for the reducer actions
- This allows you to specifcy different element types for each specified action type
```
type ACTIONTYPE =
    | { type: "increment"; payload: number },
    | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch(action.type) {
        case "increment":
            return { count: state.count + action.payload };
        case "decrement":
            return { count: state.count - Number(action.payload) };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (...)
}
```

__With Redux__
- Using redux, the syntax becomes `export function reducer: Reducer<AppState, Action>() {}`

**useEffect**
- Make sure not to return anything other than a function or `undefined`
- Make sure to wrap the function in curly braces and use void when returning `undefined`

##### Class Components
- Use `React.Component<PropType, StateType>` (both parameters are optional)

##### Useful Prop Types for React Apps
[Link](https://github.com/typescript-cheatsheets/react#basic-prop-types-examples)

##### Useful React-specific Prop Types for React Apps
[Link](https://github.com/typescript-cheatsheets/react#useful-react-prop-type-examples)