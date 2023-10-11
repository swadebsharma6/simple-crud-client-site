import { useLoaderData } from "react-router-dom";
import User from "./User";


const About = () => {

    const users = useLoaderData();
    console.log(users)

    return (
        <div>
            <h3 className="text-xl text-center my-10 font-bold text-primary">DataBase Saved users Come here: {users.length}</h3>

            <div className="grid grid-cols-3 gap-4">
            
            {
                users.map(user => <User
                    key={user._id}
                    user={user}
                    ></User>)
            }
            </div>
        </div>
    );
};

export default About;