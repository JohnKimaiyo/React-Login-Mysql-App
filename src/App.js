import React from 'react';
import './App.css';
import UserStore from './stores/UserStore';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import InputField from './InputField';

function App() {
    async await componentDidMount(){
  try{
    let res = await fetch('/isLoggedIn',{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      }
    });
    let result = await res.json();

    if(result && result.success){
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else{
      UserStore.loadiing = false;
      UserStore.isLoggedIn= false;
    }
  }
  catch(e){
UserStore.loading = false;
UserStore.isLoggedIn= false;
  }
}
async  doLogout(){
  try{
    let res = await fetch('/isLoggedIn',{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      }
    });
    let result = await res.json();

    if(result && result.success){
      UserStore.loading = false;
      UserStore.isLoggedIn = true;
      UserStore.username = result.username;
    }
    else{
      UserStore.loadiing = false;
      UserStore.isLoggedIn= false;
    }
  }
  catch(e){
UserStore.loading = false;
UserStore.isLoggedIn= false;
  }
}

  return (
    <div className="App">
     <UserStore/>
     <LoginForm/>
     <SubmitButton/>
     <InputField/>
    </div>
  );
}

export default App;
