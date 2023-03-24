const Cell = ({id, cell, setSells, go, setGo, cells, winningMessage}) => {

    const handleClick = (e) => {
        const taken = e.target.firstChild.classList.contains('circle')
            || e.target.firstChild.classList.contains('cross')

        if (!taken) {
            if (go === 'circle') {
                e.target.firstChild.classList.add('circle')
                handleCellChange('circle')
                setGo('cross')
            }
            if (go === 'cross') {
                e.target.firstChild.classList.add('cross')
                handleCellChange('cross')
                setGo('circle')
            }
        }
    }
    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className
            } else {
                return cell
            }
        })
        setSells(nextCells)
    }

    return (
        <div className='square' id={id} onClick={winningMessage ? null : handleClick}>
            <div className={cell}/>
        </div>
    )
}

export default Cell
