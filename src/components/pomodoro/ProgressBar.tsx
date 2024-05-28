function ProgressBar({percentage}: {percentage: string}) {
    return <>
        <div className="w-80 h-10 border-2 rounded
            border-gruvbox-wheat-400 mt-4">
            <div className="h-full ease-in-out duration-500
                bg-gruvbox-red-400"
                style={{width: `${percentage}%`}}>
            </div>
        </div>
    </>
}

export default ProgressBar;
