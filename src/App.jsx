import { useState } from 'react'
import './App.css'
import { BrowserProvider, isAddress, formatEther, parseEther } from 'ethers'
import Buttons from './Componets/Buttons'

function App() {

  const [ isConnected , setisConnected ] = useState(false)
  const [ Address , setAddress ] = useState(false)
  const [ Balance , setBalance ] = useState(null)
  const [ Network , setNetwork ] =useState(null)

  const Connect = async () => {

    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    const balance = await provider.getBalance(signer.address)
    const network = await provider.getNetwork()

    console.log(network)

    if(!isAddress(signer.address)){
      return;
    }

    setNetwork(network)
    setBalance(balance)
    setisConnected(true)
    setAddress(signer.address)
  }

  const FormatEther = (balance) => {
    if(balance){
      return formatEther(balance)
    }
  }

  const Disconnect = () => {

    setisConnected(false)
    setAddress(null)
    
  }

  return (
    <>
    <div>
      {isConnected 
      ? 
      <div>
        <p>Connected to {Address}</p>
        <p>Network : {Network.name} | Network ID : {Network.chainId.toString()}</p>
        <p>Actual Balance : {Balance.toString()}</p>
        <p>Formated Balance : {FormatEther(Balance)}</p>
        <Buttons/>
        <button onClick={Disconnect} className='m-3'>Disconnect</button>
      </div>
       :
      <button onClick={Connect}>Connect Wallet</button>
      }
    </div>
    </>
  )
}

export default App


// contract
// bigint
// parse and format 

