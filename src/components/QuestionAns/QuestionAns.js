import React from 'react';

const QuestionAns = () => {
    return (
        <div className='border-2 border-stone-400 p-4 rounded-lg mb-10 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Question & Answer</h2>
            <div className='my-2'>
                <h2 className='text-xl font-medium mb-2'>1. How does react work?</h2>
                <p>Ans : React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div className='my-2'>
                <h2 className='text-xl font-medium mb-2'>2. Difference between props and state?</h2>
                <p>Ans : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.Props can be used with state and functional components.State can be used only with the state components/class component (Before 16.0).</p>
            </div>
            <div className='my-2'>
                <h2 className='text-xl font-medium mb-2'>3. What does useEffect do?</h2>
                <p>Ans: The useEffect Hook allows use to perform side effects in components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.When we are using something outside of our code this time we are using useEffect.</p>
            </div>
        </div>
    );
};

export default QuestionAns;