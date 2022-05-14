
import { useEffect } from 'react'
import { useStores } from '../../shared/mobX/stores/index.store'
import { observer } from "mobx-react";

import styles from './calendar.module.scss'

const CalendarComponent = observer(() => {
  const counter = useStores().counterStore

  return (
    <nav className={styles.calendar}>
      {counter.counter}
    </nav>
  )
})

export default CalendarComponent
