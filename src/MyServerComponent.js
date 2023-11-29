import React, { useEffect, useState } from 'react';

function MyServerComponent() {

    const [isload,setLoad]= useState(false)
    const [data,setData]= useState(null)

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos/').then((response)=>{
            if (!response.ok) {
                throw new Error('Network Error')
            }
            return response.json()
        }).then((resultData) => {
            setData(resultData)
            setLoad(true)
        })
    }, [])

    return <div>
       {!isload ? 'Loading...' : <ul>
        {
        data.map((item,key)=>{
            return (<li key={key}>User id:{item.userId}</li>)
        })
        
    }</ul>}
    </div>
}

export default MyServerComponent