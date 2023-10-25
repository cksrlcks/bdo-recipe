"use client";
import React from 'react'
import {SWRConfig} from 'swr'
export default function SWRConfigContext({children}) {
  return (
    <SWRConfig 
      value={{
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      {children}
    </SWRConfig>
  )
}
