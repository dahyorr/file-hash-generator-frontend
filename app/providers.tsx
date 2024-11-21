"use client"
import MainSpinner from '@/components/loaders/MainSpinner'
import { UiProvider } from '@/context/UiContext'
import { SnackbarProvider } from 'notistack'
import React, { PropsWithChildren } from 'react'

const Providers = ({children}: PropsWithChildren) => {
  return (
    <UiProvider>
      <SnackbarProvider maxSnack={3}>
        {children}
        <MainSpinner />
      </SnackbarProvider>
    </UiProvider>
  )
}

export default Providers