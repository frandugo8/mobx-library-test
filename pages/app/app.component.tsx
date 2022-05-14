
import styles from './app.module.scss'
import CalendarComponent from './components/calendar/calendar.component'
import NavComponent from './components/nav/nav.component'

export default function AppComponent() {
  return (
    <div className={styles.app}>
      <NavComponent/>
      <CalendarComponent/>
    </div>
  )
}
