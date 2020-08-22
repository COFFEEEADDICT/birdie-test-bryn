import { useDispatch } from "react-redux";
import { SET_DATA_LIST } from "@App/store/types/userDataTypes";

const dispatch = useDispatch();

export async function fetchUserPatientList(url: string) {
    const response = await fetch(`http://localhost:8000/recevingcare/${url}`)
    .then(res => res.json)
    .then(data => console.log(data))
    console.log(response);
        return dispatch( {  
            type: SET_DATA_LIST,
            payload: response
        });
};


// React.useEffect(() => {
//     async function fetchPatientList() {
//       const request = await fetch('http://localhost:8000/recevingcare')
//       .then(res => res.json())
//       .then(resp => resp);
//       console.log(request);
//       return dispatch( 
//         { type: GET_CARE_RECIPIENTS,
//           payload: request
//         }
//       );
//     }
//     fetchPatientList();
//     console.log('APP STARTED');
//   },  [onLoad]);