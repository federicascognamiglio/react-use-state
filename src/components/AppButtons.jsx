function AppButton({title, colorClass, onToggle}) {
    return (
        <button onClick={onToggle} className={`btn ${colorClass} me-3`}>{title}</button>
    )
}

export default AppButton;