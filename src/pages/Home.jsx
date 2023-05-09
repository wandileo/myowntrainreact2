import React from 'react'
import Header from '../components/Header';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className='mb-5'>
            <Header name='Home page' />
            <div className='container'>
                <div className='row'>
                    <Card
                        image='https://www.everyshop.co.za/media/catalog/product/cache/ea1c1d49663f18175f3f3520f39859aa/7/j/7jhwrdhlrffbrj9h_setting_xxx_0_90_end_1000_6cbe.jpg'
                        name='Laptop Lenovo'
                        price='R10 2001'
                    />

                    <Card
                        image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTRJYG5pAAABL2qDZMpE1IJS-INxvaQdOQ_JfHSmkbd3pp7OEheFFUczFFyrTIAG9JncsbA3W9Og&usqp=CAc'
                        name='Microsoft Surface'
                        price='R245'
                    />

                    <Card
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQly7DxXjCoCgL0v5t-qDt1ED1OGhEQaIjg0g&usqp=CAU'
                        name='Asus 14'
                        price='R11 400'
                    />

                    <Card
                        image='data:image/jpeg;base64,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'
                        name='Meccer MyLife Xpress'
                        price='R12 344'
                    />
                </div>
            </div>
        </div>
  )
}

export default Home