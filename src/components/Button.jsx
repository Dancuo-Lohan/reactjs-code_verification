export default function Button({ value, onClick, inverted }) {
    return (
        <button
            className={`rounded-full border-2 uppercase px-5 py-3 font-bold lg:w-1/4 w-full border-[#eb651c] ${inverted ? 'bg-[#eb651c] text-white' : 'bg-white text-[#eb651c]'}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}