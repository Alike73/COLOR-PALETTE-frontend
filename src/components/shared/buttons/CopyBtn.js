import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";

const CopyBtn = ({ handleCopy, isCopied }) => {

    return (
        <button className="copy-btn-1" onClick = { handleCopy }>
            { isCopied 
                ? <TbCopyCheck className="fs-5 copy-btn-1-icon" /> 
                : <TbCopy className="fs-5 copy-btn-1-icon" />
            }
        </button>
    )
};

export default CopyBtn;