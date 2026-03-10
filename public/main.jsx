// creating nesting
//function myButton() {
   // return (
        //<button>Click me daddy</button>
   // )
//}

// nesting components
//function myApp() {
  //  returrn (
    //    <div>
      //      <h1>Hello World Welcome daddy</h1>
        //    <myButton />
        //</div>
    //)
//};

//function Page() {
    //return (
      //  <>
            
      //  </>
    //)
//}

const userData = {
    name: "Michiko",
    age: 16,
    imageUrl: "https://i.pinimg.com/736x/1f/1b/0c/1f1b0c6afd9caecd99219eeacf9c6c6b.jpg",
    imageSize: 100
};

return (
    <>
        <h1>{userData.name}</h1>
        <h2>{userData.age}</h2>
        <img src={userData.imageUrl} alt="profile" width={userData.imageSize} height={userData.imageSize} />
        style = {{width: userData.imageSize, height: userData.imageSize}}
    </>
)

