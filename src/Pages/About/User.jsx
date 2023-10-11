import PropTypes from 'prop-types';

const User = ({user}) => {
    const {_id,name, email} = user;


    const handleDelete = (id) =>{

        console.log('delete', id);
        fetch(`http://localhost:5000/users/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('Deleted Successfully')
            }
        })

    }


    return (
        <div className="border bg-blue-400 text-white rounded-xl p-4 ">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <button onClick={()=> handleDelete(_id)} className='btn btn-sm btn-warning'>Delete-X</button>
        </div>
    );
};

export default User;

User.propTypes = {
    user: PropTypes.object,

}