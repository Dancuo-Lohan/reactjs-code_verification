export default function Key({ value, onClick }) {
    
        return (
            <li className="flex items-center justify-center">
                <button className="w-16 h-16 bg-[#eb651c] rounded-full text-white" onClick={onClick}>
                    {value}
                </button>
            </li>
        )
}