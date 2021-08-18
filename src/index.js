import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import styles from './App.module.css';
import styled from 'styled-components';
import { 
  MyClassComponent,
  MyFunctionalComponent,
  UserComponent_2,
  Example,
  ExampleFunctional
} from './functional_components';

class MainClassComponent extends React.Component{
  getText(){
    const text = "Hello world!";
    return text;
  }
  render(){
    // comment
    /* some
      multiline
      comment
    */
   const class_name = "some-class";
   const element = <div>
      {/* Some comment 
      inside element */}
        <h1 className={class_name}> {this.getText()} </h1>
     </div>;
   return element
  }
}

function MainFunctionComponent(){
  return <h1> Hello world! </h1>
}

class ComponentClassReturnsNothingNull extends React.Component{
  render(){
    return null
  }
}

function ComponentFunctionReturnsNothingNull(){
  return null
}

class ComponentClassReturnsNothingFalse extends React.Component{
  render(){
    return false
  }
}

function ComponentFunctionReturnsNothingFalse(){
  return false
}

class ComponentReturnsMultipleElements extends React.Component{
  render(){
    return (
    <>
      <h1> Something </h1>
      <h2> Something else </h2>
    </>
    )
  }
}

function PersonList(){
  const persons = [
    {id: 1, name: 'Vlad', role: 'Junior Python Developer'},
    {id: 2, name: 'Karol', role: 'Senior Python Developer'}
  ];
  return (
    <>
      <p> Employeed programmers list: </p>
      <ol>
        {
          persons.map((person)=>{
            return <li key={person.id}> {person.name} as {person.role}</li>
          })
        }
      </ol>
    </>
  )
}

class ParentComponent extends React.Component{
  state = {
    parent: ''
  }

  setParent(parent){
    this.setState({parent: parent});
  }

  render() {
    return (
      //props are immutable!
      <>
        <h1> Parent state: {this.state.parent}</h1>
        <UserComponent 
          name="Vlad"
          age={20}
          isMale={true}
          hobbies={['playing guitar', 'watching movies']}
          occupation="Junior Python Developer"
          setParent={this.setParent.bind(this)}
          parent={this.state.parent}
        />
        <ProfileComponent/>
        <FeedComponent/>
      </>
    );
  }
}

class UserComponent extends React.Component{
  state = {
    surname: ''
  }

  setSurname(surname){
    this.setState({surname: surname});
  }

  handleInput(e){
    this.setSurname(e.target.value);
  }

  render(){
    if (this.state.surname === ''){ // never do it without a condition. (infinite loop otherwise)
      this.setSurname('Fedoriuk');
    }
    return (
      <> 
        <h1> Parent is {this.props.parent} </h1>
        <h1> My name is {this.props.name} {this.state.surname}</h1>
        <p> My hobbies are: {this.props.hobbies.join(' and ')},
         I am {this.props.age} years old. I work as a {this.props.occupation} </p>
         <button onClick={()=>this.props.setParent('Parent')}>
             Set Parent
          </button>
        <input
          type="text"
          name="someInput"
          onChange={(event)=>console.log('event was triggered')}
        />
        <label> Provide surname: </label>
        <input
          type="text"
          name="firstName"
          onChange={this.handleInput.bind(this)} // for this.setSurname
          value={this.state.surname}
        />
      </>
    );
  }
}

class LogButton extends React.Component{
  handleClick(event){
    console.log('Hello world!');
    console.log(event);
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

function ProfileComponent(){
  return (
  <>
    <h1> Profile Component</h1>
    <LogButton/>
  </>
  );
}

class FormComponent extends React.Component{
  state = {
    name: ''
  };

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.name);
  };

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Name:
          <input
            type="text"
            value={this.state.name}
            onChange={(event)=>this.setState({name: event.target.value})}
          />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </>
    )
  }
}


function FeedComponent(){
  return <h1> Feed Component</h1>

}

class SampleComponent extends React.Component{
  constructor(props){
    super(props); //only in this order
    this.state = {
      number: 0,
      name: 'Vlad',
      role: 'Junior Python developer.'
    }
  }
  render(){
    const {number, name, role} = this.state;
    return (
      <div> My name is {name} and my role is a {role}</div>
    )
  }
  fetchData = () => {
    // do a fetch here and return something
  }
  componentDidMount(){
    this.fetchData().then(response=>{
      this.setState({
        data: response.data
      })
    })
  }
}

class SampleDidUpdate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
  }

  incrementState = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  decrementState = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };

  componentDidMount(){
    const { number } = this.state;
    console.log(`The current number is ${number}`);
  }

  componentDidUpdate(){
    const { number } = this.state;
    console.log(`The current state is ${number}`)
  }

  render(){
    const { number } = this.state;
    return (
      <>
        <div> The current number is {number}</div>
        <button onClick={(event)=>{this.incrementState()}}> Add number </button>
        <button onClick={this.decrementState}> Substract number </button>
      </>
    );
  }
}

class ChildComponentOne extends React.Component{
  componentWillUnmount(){
    console.log("Component One will be removed");
  }

  render(){
    return <div>Component One</div>
  }
}

class ChildComponentTwo extends React.Component {
  componentWillUnmount(){
    console.log("Component Two will be removed");
  }
  render(){
    return <div>Component Two</div>
  }
}

class ParentComponent1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  };

  switchState = () => {
    const { number } = this.state;
    this.setState({
      number: number === 0 ? 1 : 0
    });
  }

  render(){
    const { number } = this.state;
    let component = number ? <ChildComponentOne/> : <ChildComponentTwo/>;
    return (
      <>
        {component}
        <button onClick={this.switchState}> Switch </button>
      </>
    );
  }
}


function StyledComponent(){
  const pStyle = {
    'color': 'blue',
    'fontSize': '16px'
  }
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  return (
    <>
      <h1 style={{ color: "red" }}> Red text.</h1>
      <h2 style={{ textAlign: "center" }}> Centered text.</h2> {/* cammel case instead of '-' */}
      <p style={pStyle}> Styled Paragraph.</p>
      <p style={pStyle}> The weather is sunny today.</p>
      <p style={{...pStyle, 'color': 'green', 'textAlign': 'right'}}> Don't forget to bring an umbrella.</p>
      <p className="paragraph-text"> The weather is rainy today.</p>
      <p className={styles.BlueParagraph}> It's sweltering today.</p>
      <p className={styles.GreenParagraph}> It's pouring today.</p>
      <p className="HeaderParagraph"> Weather Forecast</p>
      <Title> Title </Title>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <MainClassComponent/>,
  document.getElementById('main')
);
ReactDOM.render(
  <ComponentReturnsMultipleElements/>,
  document.getElementById('div-for-multiple')
);

ReactDOM.render(
  <PersonList/>,
  document.getElementById('person-list')
);
ReactDOM.render(
  <ParentComponent/>,
  document.getElementById('div-for-ensemble')
);
ReactDOM.render(
  <>
    <FormComponent/>,
    <SampleDidUpdate/>
    <ParentComponent1/>
    <StyledComponent/>
    <MyClassComponent/>
    <MyFunctionalComponent/>
    <UserComponent_2/>
    <Example/>
    <ExampleFunctional/>
  </>,
  document.getElementById('div-for-form')
);

ReactDOM.render(
  <MyClassComponent/>,
  document.getElementById('div-for-functional')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
