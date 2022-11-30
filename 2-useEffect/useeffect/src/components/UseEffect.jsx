import React, { useState,useEffect } from 'react'

const UseEffect = ({title}) => {

    const [count,setCount]  = useState(0);
    useEffect(()=>{
        // document.title = `${count} kez tıklandı.`
        const interval = setInterval(()=>{
            console.log("ben iki sn bir çalışıyorum.")
        },2000)

        return () =>{
            clearInterval(interval)//bu şekilde intervali temizliyoruz. (memory leak) performans açısından önemli
        }
    },[]) //Bu şekilde sadece ilk renderdan sonra çalış bir daha çalışma diyoruz.

  return (
    <div style={{marginLeft:20}}>
        <h2 style={{textAlign:'center'}}>{title}</h2>
        <p style={{textAlign:'left',margin:'75px"'}}>
            {count}
        </p>
        <button onClick={()=>setCount(count+1)}>Tıkla</button>
        
    </div>
  )
}
/*
useEffect => dinleme olarak hatırlanabilir kullanılabilir.
Nerelerde kullanılır ? 
-API istekleri
-Data Fetching
-DOM u manuel olarak değiştirme
-bir dosyaya yazma işlemi
*/
export default UseEffect;