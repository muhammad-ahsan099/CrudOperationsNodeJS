
import axios from 'axios';
import {endPoint} from '../endPoint/EndPoint';
import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, FETCH_STUDENT } from "../type/Type";

export const fetchStudents = (setLoading) => async (dispatch, previouState) => {
    try {
        setLoading(true)
        // let products = await axios.get(`${endPoint}`);
        console.log("Log Before Request");
        // let products = await axios.get('http://localhost:5000/student/getStudents');

        let products = await axios.get(`${endPoint}/student/getStudents`);
        
        console.log("Product in Fetch Fuction show", products.data);
        let allProducts = products.data;
        let students = [] ;
        allProducts.forEach((data)=>{
            students.push({
                docID: data._id ,
                ...data,
            })
        })

        dispatch({
            type: FETCH_STUDENT,
            payload: students
        })


    }
    catch (error) {
        if (error.response) {
            console.log('Error Response Data: ', error.response.data);
            console.log('Error Response Status:', error.response.status);
            console.log('Error Response Headers:', error.response.headers);

        } else if (error.request) {
            console.log('Error Request: ', error.request);
        } else {
            // Some other errors
            console.log('Error Message', error.message);
        }
    }
    finally {
        setLoading(false);
    }

}


export const addStudent =  (student ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)

    //    const res =  await db.collection('students').add(data) ;
       let payload = student ;
        let res = await axios.post(`${endPoint}/student/createStudent`, payload);
        
        let data = res.data;

        console.log("Result after Post Request: " , data); 

        
        

    console.log("Data Added into  MongoDB", res );
        dispatch({
            type: ADD_STUDENT ,
            payload: data
        })


        
    } catch (error) {
        console.log("Error in Add/Upload Students" , error);
        
    }

    finally{
        setLoading(false)
    }
}

//Update Student

export const updateStudent =  (_id,data ,setLoading) => async (dispatch , previouState) => {
    try {
        setLoading(true)
        // await db.collection('students').doc(docID).update(data) ;
        console.log("Id of Document to be Updated: " , _id);
        console.log("Data to be Updated" , data);
        let  res = await axios.put(`${endPoint}/student/updateStudent`,
        {  
            data 
        });

        

    console.log("Data Update to MongoDB" , res.data );
        dispatch({
            type: UPDATE_STUDENT ,
            payload: {_id,data}
        })


        
    } catch (error) {
        console.log("Error in Update Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}






export const deleteStudent =  (_id ,setLoading) => async (dispatch , previouState) => {
    try {
        console.log("Single Document ID: " , _id);
        setLoading(true)   
       let products = await axios.delete(`${endPoint}/student/delete` ,
    {
        params: { _id }
    });
    console.log("Data Delete from MongoDB" , products.data );
        dispatch({
            type: DELETE_STUDENT ,
            payload: _id
        })


        
    } catch (error) {
        console.log("Error in Deleting Students" , error);
        alert(error)
    }

    finally{
        setLoading(false)
    }
}






