import React, { Component, ReactNode } from 'react'
import './error-boundary.scss'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  error: Error | null
  errorInfo: React.ErrorInfo | null
  isOpenModal: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null, errorInfo: null, isOpenModal: false }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
      isOpenModal: false,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div className={'error-boundary'}>
          {/*{this.state.isOpenModal && (*/}
          {/*  <CustomModal1*/}
          {/*    isOpen={true}*/}
          {/*    modalSize={"lg"}*/}
          {/*    handleClose={() => {*/}
          {/*      this.setState((prevState) => ({*/}
          {/*        ...prevState,*/}
          {/*        isOpenModal: !prevState.isOpenModal,*/}
          {/*      }));*/}
          {/*    }}*/}
          {/*    canCloseWithOutsideClick={true}*/}
          {/*  >*/}
          {/*    <div className={"error-boundary--modal-content"}>*/}
          {/*      <p> {this.state.errorInfo.componentStack}</p>*/}
          {/*    </div>*/}
          {/*  </CustomModal1>*/}
          {/*)}*/}
          <h2 className={'error-boundary--title'}>
            Oops... the data is broken. A fix will be made soon
          </h2>
          {/*{REACT_APP_VITE_HOST === "localhost" ? (*/}
          {/*  <details style={{ whiteSpace: "pre-wrap", textAlign: "center" }}>*/}
          {/*    {this.state.error && this.state.error.message.toString()}*/}
          {/*    <br />*/}
          {/*    <button*/}
          {/*      className={"error-boundary--more-btn"}*/}
          {/*      onClick={() => {*/}
          {/*        this.setState((prevState) => ({*/}
          {/*          ...prevState,*/}
          {/*          isOpenModal: !prevState.isOpenModal,*/}
          {/*        }));*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      More*/}
          {/*    </button>*/}
          {/*  </details>*/}
          {/*) : null}*/}
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

export default ErrorBoundary
