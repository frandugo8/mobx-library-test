
import { observer } from 'mobx-react'
import { useStores } from '../../shared/mobX/stores/index.store'
import styles from './nav.module.scss'

const NavComponent = observer(() => {
  const counter = useStores().counterStore

  return (
    <nav className={styles.nav} onClick={() => counter.increaseCounter()}>
    </nav>
  )
})

export default NavComponent
