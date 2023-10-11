import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name, email} = user;
    return (
        <div className="border bg-blue-400 text-white rounded-xl p-4 ">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;

User.propTypes = {
    user: PropTypes.object,

}