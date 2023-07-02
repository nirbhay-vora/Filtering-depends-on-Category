import React from 'react'
import { Button } from 'react-bootstrap'

function Navbutton({ checkItem, catList }) {
    return (
        <>
            <div className='my-5  w-50 d-flex justify-content-around m-auto'>
                {
                    catList.map((elem) => {
                        return (
                            <>
                                <Button variant='primary' onClick={() => checkItem(elem)}>{elem}</Button>
            
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Navbutton