import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import firebase from '../firebase'


const ClientsFrame = styled.div`
    color: #555;
    padding:10px;
`

const useFBData = () =>
{
    const [data, setData] = useState([])

    useEffect(() =>
    {
        const unsubscribe = firebase.firestore().collection('clients').orderBy('firstName').onSnapshot(sn =>
        {
            const newData = sn.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setData(newData)
        })
        return ()=>unsubscribe()
    }, [])
    return data
}

const Clientes = (props) =>
{
    const data = useFBData()

    return (
        <ClientsFrame>
            <h2>Clientes</h2>
            {data &&
                data.map(x =>
                {
                    return (<div key={x.id}>{x.firstName}</div>)
                }
                )
            }
        </ClientsFrame>
    )
}

export default Clientes