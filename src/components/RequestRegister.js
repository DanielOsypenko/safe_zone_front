import React from "react";

class RequestRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            floor: 0,
            place: 0,
            errormessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (val !== "" && !Number(val)){
            err = <strong>Your floor and place must be a number</strong>;
        }
        console.log('nam: '+ nam);
        console.log("val: "+ val);
        this.setState({[nam]: val});
        this.setState({errormessage: err});

    }

    handleSubmit(event) {

        alert('A floor and place was submitted: ' + JSON.stringify(this.state));
        registerUser(this.state.floor, this.state.place);
        event.preventDefault();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Floor:
                        <input type="number"
                               name='floor'
                               value={this.state.floor}
                               onChange={this.handleChange} />
                    </label>
                    <label>
                        Place:
                        <input type="number"
                               name="place"
                               value={this.state.place}
                               onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    {this.state.errormessage}
                </form>
            </div>
        );
    }
}

function registerUser(floor, place) {

    return fetch(`https://safe-zone-il.herokuapp.com/account/register/floor/${floor}/place/${place}`, {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache',
            'Access-Control-Request-Method ': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': '*',
           // 'Set-Cookie: cross-site-cookie=*; SameSite=None; Secure'
        },
         credentials: 'include'
    }).then(response => response.json())
        .then((user) => {
            console.log(user.toString())
        }).catch((error) => {
            console.error(error)
        });
}

export default RequestRegister;

/**
 class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let age = this.state.age;
    if (!Number(age)) {
      alert("Your age must be a number");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <input type='submit' />
      </form>
    );
  }
}
 **/