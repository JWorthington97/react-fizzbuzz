import { useState } from 'react'

function FizzBuzz(): JSX.Element {
    const [counterArr, setCounter] = useState<string[]>(["1"])

    const handleFizzBuzz = () => {
        const nextValue = (counterArr.length + 1).toString()
        
        if (isFizzBuzz(nextValue)) {
            setCounter([...counterArr, "FizzBuzz"])
        }
        else if (isFizz(nextValue)) {
            setCounter([...counterArr, "Fizz"])
        }
        else if (isBuzz(nextValue)) {
            setCounter([...counterArr, "Buzz"])
        }
        else {
            setCounter([...counterArr, nextValue])
        }
    }

    return <>
     <h1>{counterArr.join(',')}</h1>
     <button onClick={handleFizzBuzz}>NEXT</button>
    </>
}

function isFizzBuzz(nextValue: string): boolean {
    return parseInt(nextValue) % 3 === 0 && parseInt(nextValue) % 5 === 0
}

function isFizz(nextValue: string): boolean {
    return parseInt(nextValue) % 3 === 0
}

function isBuzz(nextValue: string): boolean {
    return parseInt(nextValue) % 5 === 0

}

export default FizzBuzz