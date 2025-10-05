import { Link } from "react-router-dom";
import Control from "../reusable-components/Control";

const Home = () => {
    return(
        <div className="max-w-3xl mx-auto text-center mt-12 bg-white shadow-lg rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to CyberGear</h1>
            <Link to="/products">
                <Control label="Shop Now" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-200" />
            </Link>
        </div>

    );
}

export default Home;