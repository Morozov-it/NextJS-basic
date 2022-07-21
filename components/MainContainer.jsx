import React from 'react'
import CustomLink from './CustomLink'
import Head from 'next/head'

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            {/* добавление мета тегов на страницу */}
            <Head>
                <meta keywords={"nextjs, " + keywords}></meta>
                <title>Main page</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className='navbar'>
                <CustomLink text={'Main'} link={'/'} />
                <CustomLink text={'Users'} link={'/users'} />
            </div>
            <div>
                {children}
            </div>

            {/* добавление стилей в компонент */}
            <style jsx>
                {`
                    .navbar {
                        background: lightblue;
                        width: 100%;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer