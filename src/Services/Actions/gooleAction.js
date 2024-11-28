import { collection, doc, setDoc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../fireConfic";


const addData = (data) => {

    return {
        type: "addRec",
        payload: data
    }
}
const setLoading = () => {
    return {
        type: "isLoading",
    };
}

const error = (err) => {
    return {
        type: "error",
        payload: err
    }
}
const singleEmp = (data) => {
    return {
        type: "singleData",
        payload: data

    }
}

export const empAsync = (data) => {

    return async (dispatch) => {

        dispatch(setLoading())
        try {
            await setDoc(doc(db, "gusers", `${data.id}`), data);

            console.log("empAsync", data);

            dispatch(getAsync(data))
        } catch (err) {
            console.log(err);

            dispatch(error(err))
        }
    }
}

export const getAsync = () => {
    return async (dispatch) => {

        dispatch(setLoading())

        setTimeout ( async () => {
            try {
                let gusers = [];

                const res = await getDocs(collection(db, "gusers"));

                gusers = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    };
                });

                console.log(" employee data: ", gusers);

                dispatch(addData(gusers));
            } catch (err) {
                console.error("Error fetching employees: ", err);

                dispatch(error(err))
            }
        }, 2000)
    };

}
    export const singleEmpAsync = (id) => {
        return async (dispatch) => {

            const singleRec = await getDoc(doc(db, "gusers", `${id}`));

            console.log("singleRec", singleRec.data());

            dispatch(singleEmp(singleRec.data()))


        }
    }

    export const editAsync = (googleContact) => {
        return async (dispatch) => {
            dispatch(setLoading())
            try {
                await setDoc(doc(db, "gusers", `${googleContact.id}`), googleContact);

                console.log("empAsync", googleContact);

                dispatch(getAsync())
            } catch (err) {
                console.log(err);

                dispatch(error(err))
            }

        }
    }

    export const deleteAsync = (id) => {

        return async (dispatch) => {
            try {
                await deleteDoc(doc(db, "gusers", id));

                dispatch(getAsync());

            } catch (err) {

                console.error("Error deleting document: ", err);

                dispatch(error(err));
            }

        }
    }

