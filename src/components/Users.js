import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
        <h1>User 1</h1>
        <h1>User 2</h1>
        <h1>User 3</h1>

        <Outlet/>

        <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filters</button>
        </div>
    </>
  )
}
