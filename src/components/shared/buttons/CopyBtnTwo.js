
const CopyBtnTwo = ({ color_bg, handleCopy }) => {

    return (
        <button className="copy-btn-2" onClick = { handleCopy }>
            { color_bg }
        </button>
    )
};

export default CopyBtnTwo;