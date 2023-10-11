

const Home = () => {

    const handleAddUser =(event) =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const user ={ name, email};
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        } )
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('User Added successfully');
                form.reset();
            }
        })
    }


  return (
    <div>
      <h3 className="text-center mb-10 text-primary font-bold">
        The Simple CRUD Client
      </h3>

      <div className=" text-center">
        <form onSubmit={handleAddUser}>
          <input
            className="input mb-5 input-bordered input-secondary"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <br />
          <input
            className="input mb-5 input-bordered input-secondary"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <br />
          <input className="btn btn-primary" type="submit" value="Add user" />
        </form>
      </div>
    </div>
  );
};

export default Home;
