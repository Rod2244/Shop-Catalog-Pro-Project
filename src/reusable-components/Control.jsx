const Control = ({label}) => {
    return ( 
        <button className=" bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-black font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40" onClick={onclick}>
            {label}
        </button>
     );
};

export default Control;