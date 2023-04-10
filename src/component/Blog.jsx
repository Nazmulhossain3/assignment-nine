import React from 'react';

const Blog = () => {
    return (
        <div className='p-12'>
            <h1 className='text-2xl'>1.When Should we used Context API ?</h1>
            <p className='text-xl m-2'>The React Context API is useful when you have data that needs to be accessed by many components at different levels of your component tree. It allows you to avoid "prop drilling," </p>
       
        <h1 className='text-2xl'>2. What is Custom Hook?</h1>
        <p className='text-xl m-2'>In React, a custom hook is a JavaScript function that allows you to reuse stateful logic between components. Custom hooks allow you to extract reusable logic from a component, so that it can be reused across multiple components, without duplicating code.</p>
      
      <h1  className='text-2xl'>3. What is useRef?</h1>
      <p className='text-xl m-2'>In React, useRef is a hook that returns a mutable ref object. It can be used to maintain a reference to a DOM element, or to any other mutable value, across renders.</p>
       
       <h1  className='text-2xl'>4. What is useMemo?</h1>
       <p className='text-xl m-2'>In React, useMemo is a hook that allows you to memoize a value, which means caching a computed value so that it can be reused without having to recompute it every time the component re-renders.</p>
       
        </div>
    );
};

export default Blog;