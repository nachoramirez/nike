import React from "react"
import { Loader,LoadingContainer } from './Loading'


const Loading = () => {
  return (
    <LoadingContainer>
      <Loader className="loader"></Loader>
    </LoadingContainer>
  )
}

export default Loading
