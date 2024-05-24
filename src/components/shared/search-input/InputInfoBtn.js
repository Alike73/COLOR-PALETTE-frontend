import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getPaletteName, setShowPaletteName } from "../../../utils/redux/CategorySlice";

const InputInfoBtn = () => {

    const paletteName = useSelector(getPaletteName);
    const dispatch = useDispatch();
    const handleshowPaletteName = () => {
        dispatch(filterCategory('ALL'))
        dispatch(setShowPaletteName(false))
    };

    return (
        <button 
            className="d-flex align-items-center btn btn-sm btn-secondary rounded-pill ps-2 pe-1 input-info-btn me-2" 
            type="button"
            >
            { paletteName }
            <IoIosClose 
                className="ms-1 fs-6 border-start" 
                onClick = { handleshowPaletteName } 
            />
        </button>
    )
};

export default InputInfoBtn;