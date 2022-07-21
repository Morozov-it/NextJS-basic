import React from 'react'
import MainContainer from '../../components/MainContainer'
import styles from '../../styles/user.module.scss'
//import { useRouter } from 'next/router'

const User = ({ user }) => {
    //const params = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>
                    {`User's id: ${user.id}`}
                </h1>
                <pre>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </MainContainer>
    )
}

export default User

//функция для подгрузки асинхронных данных перед рендером компонента
export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
      props: { user }, // will be passed to the page component as props
    }
}