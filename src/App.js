import React from 'react'
import logo from './logo.svg';
import './App.css';
import Introduction from './profile/Profile component/Introduction'
 import imgSrc from "../src/images/man-profile.jpg";
 import UserCard from './profile/Profile component/UserCard'

 const MyBio =[
   {
    name: "Omar Goddi",
    age: 27,
    email: "gd.omar@hotmail.com",
    address: "Nabeul",
    isAuth: true,
   }
 ];

export default function App() {
  const alertName = (name) => alert(name);
  return(
    <div>
      <Introduction imgSrc={imgSrc} name="Omar Goddi" />
      {MyBio.map((currentUser,i)=>(
      <UserCard key={i} user={currentUser} alertName={alertName} /> 
      ))}
    
      
    </div>
  );
}
  
