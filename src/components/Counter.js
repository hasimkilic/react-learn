import React, {useState} from 'react'

const Counter = ({content}) => { // Üst componentten gelen veriyi bu şekilde alabiliriz ya da props adıyla göndererek props.content şeklinde ekrana yazdırabiliriz
    const [count,setCount] = useState(()=>{
        return 0;
    }) 
    // Bu şekilde callback fonksiyonu kullanmadan dire değeri yazdığımızda sayfa her render edildiğinde çağırılıyor
    // ve çalışıyor bunun önüne geçmek için callback fonksiyıonu değeri verirsek sadece sayfa ilk render edildiğinde çalışır. 
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

  return (
    <div className='counter-center'>
        <div className='center'>
            <h1>{content}</h1>
            <br/>
            <div>
                <button onClick={handleDecrement} >-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;