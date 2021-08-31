


import { useEffect, useState } from 'react';
import axios from 'axios';
import { log } from 'async';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../config/Store';

import { addStudent, fetchStudents, deleteStudent, updateStudent } from "../../redux/actions/StudentAction";

export function useStudent() {


    // const [students , setStudent] = useState("");
    // const [products , setProducts] = useState([]);
    const [errMessage, setMessage] = useState("");
    const [flag, setFlag] = useState(false)
    const [updatedIndex, setUpdatedIndex] = useState(0);
    // New Hooks Defined
    const [load, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();


    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [semes, setSemes] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [myClass, setmyClass] = useState("")

    // const students = useSelector(state => state.studentReducer.students)
    const students = useSelector(state => state.StudentReducer.students)

    console.log("Students from studentReducer", students);
    // setStudent(students)

    useEffect(() => {

        // dispatch(fetchStudents(setLoading));
        dispatch(fetchStudents(setLoading))
        // fetchProduct()

    }, [])

    // Delete Handler 

    const deleteHandler = (_id) => {
        console.log("Delete Handler is called");
        dispatch(deleteStudent(_id, setLoading))
    };

    // CTA Handler 

    const ctaHandler = () => {

        setMessage("")
        if (name !== "" && rollno !== "" && semes !== "" && cgpa !== "" && myClass !== "") {
            let student = {

                name,
                rollno,
                semes,
                cgpa,
                myClass,
                createdAt: new Date()

            }

            console.log('Student Data:  ', student);
            // setStudent([...students , student])
            dispatch(addStudent(student, setCtaLoading))

            setName("")
            setRollno("")
            setSemes("")
            setCgpa("")
            setmyClass("")
        }

        else {
            setMessage("Error: Some Inputs are Empty");
        }

    }


    const updateHandler = (student, index) => {

        console.log("Student to be Updated:   ", student);
        setUpdatedIndex(student._id)
        setName(student.name)
        setRollno(student.rollno)
        setSemes(student.semes)
        setCgpa(student.cgpa)
        setmyClass(student.myClass)
        setFlag(true);

    }

    const ctaupdateHandler = ()=> {
        setMessage("")  
        if (name !== "" && rollno !== "" && semes !== "" && cgpa !== "" && myClass !== "") 
        
        {  

        let student = {
        name ,
        rollno, 
        semes,
        cgpa,
        myClass,

        }

        console.log('Student Data in CTAUpdateHandler:  '  , student);

        console.log("Document ID: ", updatedIndex);
            
        dispatch(updateStudent(updatedIndex,student, setLoading))

        setName("")
        setRollno("")
        setSemes("")
        setCgpa("")
        setmyClass("")
        setFlag(false);
    }

        else
        {
            setMessage("Error: Some Inputs are Empty");
        }

    
    

    }



    return [students, errMessage, flag, name, rollno, semes, cgpa, myClass, load, ctaLoading, setName, setRollno, setSemes, setCgpa, setmyClass, ctaHandler, deleteHandler , updateHandler , ctaupdateHandler]


}
