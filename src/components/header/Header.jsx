'use client'
import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import LogoImg from '../../../public/images/logo.svg'
import styles from './Header.module.css'

function Header() {
	const [isActive, setIsActive] = useState(false)

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__inner}>
					<a href='/'>
						<Image src={LogoImg} alt='logo' />
					</a>
					<div
						className={cn(styles.header__control, {
							[styles.active]: isActive,
						})}
					>
						<nav className={styles.header__nav}>
							<ul className={styles.header__list}>
								<li className={styles.header__item}>
									<a href='/'>Home</a>
								</li>
								<li className={styles.header__item}>
									<a href='/'>Services</a>
								</li>
								<li className={styles.header__item}>
									<a href='/'>About us</a>
								</li>
								<li className={styles.header__item}>
									<a href='/'>Extra Salespage</a>
								</li>
							</ul>
						</nav>
						<button className={styles.header__btn}>Get your free guide now</button>
					</div>
					<div
						className={cn(styles.header__menuBtn, {
							[styles.active]: isActive,
						})}
						onClick={() => {
							if (isActive === true) {
								setIsActive(false)
							} else if (isActive === false) {
								setIsActive(true)
							}
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
