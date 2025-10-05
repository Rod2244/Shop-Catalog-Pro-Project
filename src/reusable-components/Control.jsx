const Control = ({label}) => {
    return ( 
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-200" onClick={onclick}>
            {label}
        </button>
     );
};

export default Control;