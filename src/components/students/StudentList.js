



import React from 'react';
import {View , Text , TouchableOpacity, ScrollView} from 'react-native';

function StudentList({student ,index , deleteHandler , updateHandler})

{
    console.log("Document Id's: " , student._id);
    return(

            <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' , padding: 5  }}
            >


                <View style={{width: 180 , marginLeft: 5}}>

                <Text
                style={{fontSize:14 , color: 'white'  }}
                >
                    {index+1}: &nbsp;
                </Text>

                <Text
                style={{fontSize:12 , color: 'white' }}
                >
                    {student.name}
                </Text>
                
                <Text
                style={{fontSize:12 , color: 'white' }}
                >
                    {student.rollno}
                </Text>
                
                <Text
                style={{fontSize:12, color: 'white' }}
                >
                    {student.semes}
                </Text>
                
                <Text
                style={{fontSize:12 , color: 'white' }}
                >
                    {student.cgpa}
                </Text>
                <Text
                style={{fontSize:12 , color: 'white' }}
                >
                    {student.myClass}
                </Text>

                </View>
        
                <Text>
                
                <TouchableOpacity
                
                onPress={()=>deleteHandler(student._id)}
                // onPress={()=>deleteHandler(student.docID)}
                >
                    <Text
                    style={{backgroundColor: 'white' , color: 'black' , padding: 10 , width: 80,textAlign: 'center'  , borderRadius: 30, }}
                    >
                        Delete
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>updateHandler(student , index)}
                >
                    <Text
                    style={{backgroundColor: 'white' , color: 'black' , padding: 10 , width: 80 ,marginLeft: 5 ,marginRight: 5 , textAlign: 'center' , borderRadius: 30, }}
                    >
                        Update
                    </Text>
                </TouchableOpacity>
                </Text>


            </View>
 
          

        
    )

}


export default StudentList;