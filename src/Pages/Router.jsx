import React, { Suspense } from 'react';
import  { Route, Routes } from 'react-router-dom'
import { routerData } from './Routes'

const Router = () => {
    return (
        <Suspense fallback={<div>Loading....</div>} >
            <Routes>
                {
                    routerData.map(each=> (
                        <Route key={each.id} path={each.to} element={each.element} />
                    ))
                }
            </Routes>
        </Suspense>
    )    
}

export default Router 