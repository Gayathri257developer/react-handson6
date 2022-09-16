import React , {createContext, useState} from 'react'
export const store = createContext()

const Details = (props) => {
    const [data,SetData] = useState([
        {
            "Name":"Gayu",
            "Age":"24",
            "Course":"MERN",
            "Batch":"October",
            "id":"1"    
        },
        {
            "Name":"Arpana",
            "Age":"23",
            "Course":"MERN",
            "Batch":"March",
            "id":"2"     
        },
        {
            "Name":"Priyanshi",
            "Age":"24",
            "Course":"MERN",
            "Batch":"October",
            "id":"3"
        },
        {
            "Name":"Reshma",
            "Age":"22",
            "Course":"MERN",
            "Batch":"May",
            "id":"4"   
        },
        {
            "Name":"Pallavi",
            "Age":"24",
            "Course":"MERN",
            "Batch":"December",
            "id":"5"    
        }
    ])
  return (
    <div>
    <store.Provider value={[data,SetData]}>
    {
    props.children
   }  
     </store.Provider>
    </div>
  )
}

export default Details;