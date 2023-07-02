import React, { useState } from 'react'
import '../App.css'
import Menu from './Data'
import Imagesdata from './Imagesdata'
import Navbutton from './Navbutton'


  //print category with no repeat
  let categoryData = [...new Set(Menu.map(elem=>elem.category)),'All']
  console.log(categoryData)

function Images() {
    let [items, setItems] = useState(Menu);
    let [cateList,setCatlist] = useState(categoryData);

    function checkItem(categoryPara){

        if(categoryPara === "All")
        {
            setItems(Menu)
            return; //return lakhsu to j work karse idk why
        }
        let mobileArray = Menu.filter((elem)=>{
            return elem.category === categoryPara
        })
        setItems(mobileArray)
    }

  
    return (
        <>
            <h1 className="text-center">Order your favourite item</h1>
            <hr />
            <Navbutton  checkItem={checkItem} catList={cateList} />

            {/* Display items */}
            <Imagesdata items={items} />
        </>
    )
}

export default Images