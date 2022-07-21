import React from 'react'
import Link from 'next/link'
import styles from '../styles/CustomLink.module.css'

const CustomLink = ({ text, link }) => {
    return (
        <Link href={link}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}

export default CustomLink