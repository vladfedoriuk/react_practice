import React, { useState, useEffect } from 'react';

export class MyClassComponent extends React.Component {
    render(){
        return <MyFunctionalComponent name="Vlad"/>
    }
};

export function MyFunctionalComponent(props) { 
    return <h1> Name in functional component is: {props.name}</h1>
};

function UserComponent_1() {
    const [name, setName] = useState('John');

    if(name ==='John') {
        setName('Luke');
    }

    return <h1> Hello World! My name is {name} </h1>
}

export function UserComponent_2(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isLegal, setLegal] = useState(false);
    const [object, setObject] = useState({some: 1});
    const [friends, setFriends] = useState(['me', 'you']);
    return <h1> My name is {name} </h1>
};


export class Example extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        'name': 'Nathan'
      };
    }
  
    componentDidMount(){
      console.log(
        `didMount triggered: Hello, I'm ${this.state.name}`
      );
    }
  
    componentDidUpdate(){
      console.log(
        `didUpdate triggered: Hello, I'm ${this.state.name}`
      );
    }
  
    render(){
      return (
        <div>
          <p>
            {`Hello, I'm ${this.state.name}`}
          </p>
          <button onClick={()=>this.setState({'name': 'Gary'})}>
            Change me
          </button>
        </div>
      )
    }
  }
  
export const ExampleFunctional = props =>{
    const [name, setName] = useState('Nathan');  
  
    useEffect(()=>{
      console.log(`didUpdate Hello, I'm ${name}`);
    }, [ name ]);
  
    useEffect(()=>{
      return () => { console.log(`componentWillUnmount effect`);}
    });
  
    useEffect(()=>{
      console.log(`didMount effect`);
    }, []);
  
    return (
      <div>
        <p>
          {`Hello, I'm ${name}`}
        </p>
        <button onClick={()=>setName('Gary')}>
          Change me
        </button>
      </div>
    );
  }
  


