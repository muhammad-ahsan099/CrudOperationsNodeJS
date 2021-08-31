


import React from 'react';
// import { useDispatch } from 'react-redux';
import StudentList from './StudentList';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

import { useStudent } from './useStudent';

function Student({ navigation }) {


    const [students, errMessage, flag, name, rollno , semes , cgpa , myClass, load, ctaLoading, setName,setRollno, setSemes , setCgpa , setmyClass, ctaHandler, deleteHandler , updateHandler , ctaupdateHandler] = useStudent();

    // User Logout Function
    // const dispatch = useDispatch();


    return (

        <View
            style={{ flex: 1, backgroundColor: '#0C1327' }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 26,
                        fontFamily: 'Roboto',
                        textAlign: 'center',
                        padding: 10,
                        color: 'white',
                    }}
                >
                    Add ToDo

                </Text>

            </View>

            <TextInput
                // onChange ={ (e) => setName(e.target.value) }
                onChangeText={text => setName(text)}
                style={{
                    borderWidth: 1,
                    padding: 2,
                    paddingLeft: 5,
                    borderColor: 'grey',
                    width: '90%',
                    height: 30,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '2%',
                    borderRadius: 4,
                    fontSize: 12,
                    color: 'white'
                }}
                placeholder={'Your Name'}
                placeholderTextColor={'white'}
                value={name}
            />

           
            <TextInput
                onChangeText={text => setRollno(text)}
                style={{
                    borderWidth: 1,
                    padding: 2,
                    paddingLeft: 5,
                    borderColor: 'grey',
                    width: '90%',
                    height: 30,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '2%',
                    borderRadius: 4,
                    fontSize: 12,
                    color: 'white'
                }}
                placeholder={'Your RollNo'}
                placeholderTextColor={'white'}
                value={rollno}
            />
          
            <TextInput
                // onChange ={ (e) => setName(e.target.value) }
                onChangeText={text => setSemes(text)}
                style={{
                    borderWidth: 1,
                    padding: 2,
                    paddingLeft: 5,
                    borderColor: 'grey',
                    width: '90%',
                    height: 30,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '2%',
                    borderRadius: 4,
                    fontSize: 12,
                    color: 'white'
                }}
                placeholder={'Your Semester'}
                placeholderTextColor={'white'}
                value={semes}
            />
            
            <TextInput
                // onChange ={ (e) => setName(e.target.value) }
                onChangeText={text => setCgpa(text)}
                style={{
                    borderWidth: 1,
                    padding: 2,
                    paddingLeft: 5,
                    borderColor: 'grey',
                    width: '90%',
                    height: 30,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '2%',
                    borderRadius: 4,
                    fontSize: 12,
                    color: 'white'
                }}
                placeholder={'Your Cgpa'}
                placeholderTextColor={'white'}
                value={cgpa}
            />
            
            <TextInput
                // onChange ={ (e) => setName(e.target.value) }
                onChangeText={text => setmyClass(text)}
                style={{
                    borderWidth: 1,
                    padding: 2,
                    paddingLeft: 5,
                    borderColor: 'grey',
                    width: '90%',
                    height: 30,
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: '2%',
                    borderRadius: 4,
                    fontSize: 12,
                    color: 'white'
                }}
                placeholder={'Your Class'}
                placeholderTextColor={'white'}
                value={myClass}
            />
            {
                flag ?
                    <TouchableOpacity
                        onPress={ctaupdateHandler}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 50,
                            width: '90%',
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginBottom: 20,
                            marginTop: 10 ,
                            height: 40,
                            opacity: 1

                        }}
                    >
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 16,
                                textAlign: 'center',
                                lineHeight: 40,

                            }}
                        >
                            Update
                        </Text>
                    </TouchableOpacity>

                    :

                    <TouchableOpacity
                        onPress={ctaHandler}

                        style={{

                            backgroundColor: 'white',
                            borderRadius: 50,
                            width: '90%',
                            marginLeft: '5%',
                            marginRight: '5%',
                            marginBottom: 20,
                            marginTop: 10 ,
                            height: 40,
                            opacity: 1
                        }}
                    >
                        <Text
                            style={{
                                color: '#0C1327',
                                fontSize: 16,
                                textAlign: 'center',
                                lineHeight: 40,

                            }}
                        >
                            {ctaLoading ? "Loading..." : "Submit"}
                        </Text>
                    </TouchableOpacity>


            }

            <Text style={{ color: "yellow", fontSize: 16, textAlign: 'center' }}>
                {errMessage}
            </Text>


            <Text
                style={{
                    fontSize: 26,
                    fontFamily: 'Roboto',
                    textAlign: 'center',
                    padding: 3,
                    borderWidth: 1,
                    marginTop: 5,
                    marginBottom: 5,
                    color: '#0C1327',
                    backgroundColor: 'white'

                }}
            >
                List of All ToDo's

            </Text>


            <ScrollView>
                {
                    students.map((item, index) => {
                        // console.log("This is Map Items: " , item._id)
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />

                    })


                }

                {load && <Text>Loading...</Text>}


            </ScrollView>

        </View>


    );

}



export default Student;
