import styles from './Expandable.module.scss'

interface ExpandableProbs {
  children: any
  expanded?: boolean
}
function Expandable({ children, expanded = false }: ExpandableProbs) {
  return (
    <div className={`${expanded ? styles.expanded : styles.collapsed}`}>
      {children}
    </div>
  )
}

export default Expandable
