import './game-grid.css';
import { GameData, GameEntity } from './game-data'
import { useEffect, useState } from 'react';

export const GameGrid = () => {

    const gameData = new GameData

    const [loaded, setLoaded] = useState<boolean>(false);
    const [rows, setRows] = useState<GameEntity[]>();
    const [gameTally, setGameTally] = useState<number>(0);
    const [currenItem, setCurrentItem] = useState<GameEntity>();
    const [wobble, setWobble] = useState(0)

    const touched = () => {
        console.log('touched')
    }
    const reroll = () => {
        generateRows(gameData.rowCount);
    }
    const generateRows = async (executionCount: number): Promise<GameEntity[]> => {
        let elementRows: GameEntity[] = []
        for (let i = 0; i < executionCount; i++) {
            await gameData.generateRandomAnimal().then(entity => {
                elementRows.push(entity)
            })
        }
        return elementRows
    }
    const entityPress = async (item: GameEntity) => {
        setCurrentItem(item)
    }
    useEffect(() => {
        if (!loaded) {
            setLoaded(true)
            generateRows(gameData.rowCount).then((elementRows) => {
                setRows(elementRows);
            })
                .catch(console.error);
        }
    }, [])

    useEffect(() => {
        generateRows(1).then((elementRows) => {
            if (currenItem && rows) {
                const index = rows.indexOf(currenItem);
                if (index !== -1) {
                    const updatedRows = [...rows]
                    updatedRows.splice(index, 1, ...elementRows)
                    setRows(updatedRows)
                }
            }
        })
        if (currenItem) {
            const tally = gameTally + currenItem?.value
            setGameTally(tally)
        }
    }, [currenItem])


    return (
        <>
            <p>{gameTally}</p>
            <div className='reroll-button' onClick={reroll}><p>Reroll</p></div>
            <div className="grid-container">
                {rows?.map(entity =>
                    <div className="grid-item" key={entity.id} onClick={() => entityPress(entity)} onKeyUp={() => {touched()}}>
                        <img src={entity.image_url} className='img-style' onClick={() => setWobble(1)} onAnimationEnd={() => setWobble(0)} />
                        <div className="value-container"><p>{entity.value}</p></div>
                    </div>
                )}
            </div>
        </>
    )
}


