import { Flip, toast } from "react-toastify";


export const toastUtils = {
    success: (message: string) => {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Flip,
        })
    }
}
