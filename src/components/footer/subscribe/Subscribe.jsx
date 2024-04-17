import styles from './Subscribe.module.css'

function Subscribe() {
	return (
		<section className={styles.subscribe}>
			<div className={styles.container}>
				<div className={styles.subscribe__inner}>
					<div>
						<h2 className={styles.subscribe__heading}>
							Get notified when I publish new articles
						</h2>
						<div className={styles.subscribe__info}>
							Stay up to date with the latest news, announcements, and articles.
						</div>
					</div>
					<form className={styles.subscribe__form}>
						<input
							className={styles.subscribe__email}
							type='text'
							placeholder='Enter your email'
						/>
						<input
							className={styles.subscribe__submit}
							type='submit'
							value='Subscribe'
						/>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Subscribe
