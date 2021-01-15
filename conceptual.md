### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    JavaScript library for making changes without page reloads.

- What is Babel?

    Babel converts jsx to js

- What is JSX?

    The syntax used to write react code

- How is a Component created in React?
    A component is like a function. Written with CamelCase and then exported and imported as needed.

- What are some difference between state and props?

    props - passed into other components to be used
    state - used within a component to control the component

- What does "downward data flow" refer to in React?

    Passing down data using props into oher components. You start at App and work down into lower level components.

- What is a controlled component?

    Controlled component uses States

- What is an uncontrolled component?

    Uncontrolled doesn't use State.

- What is the purpose of the `key` prop when rendering a list of components?

    Unique identifier. Individual pieces can change and react has to know which.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    2 reasons: A key needs to be unique and array index can change.

- Describe useEffect.  What use cases is it used for in React components?

    It is a function for controlling use. For example, you can use useEffect to run code every time a specific piece of data changes or it can run code only at the start.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    useRef is used to create a reference to an element that persists.

- When would you use a ref? When wouldn't you use one?

    Would - using a button increase a value stored in the element
    
    Wouldn't - when an element's change doesn't have to persist

- What is a custom hook in React? When would you want to write one?

    Custom hook is like a reusable function. If you find yourself writing the same code in different components use hooks.
