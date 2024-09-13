import {createContext, ReactNode, useContext, useState} from 'react'
import { IAsset, IAssetByBasket} from '../types/types';



type BasketProviderProps = {
    children: ReactNode
  }

type TBasketContext = {

    increaseAssetQuantity: (item: IAsset) => void
    decreaseAssetQuantity: (item: IAsset) => void
    removeFromBasket: (id: number) => void
    getAssetPrise:(item:IAsset) => number
    totalPrise: number
    assetQuantity: number
    assetBasket: IAssetByBasket[]
  }
 const BasketContext = createContext({} as TBasketContext );

  export function useBasketContext() {
    return useContext(BasketContext)
  }

export function BasketContextProvider({ children }: BasketProviderProps) {

    
  const [assetBasket, setAssetBasket] = useState<IAssetByBasket[]> ([]); 

  const assetQuantity = assetBasket.reduce(
    (quantity:number = 0, item: IAssetByBasket) => item.count + quantity,
    0
  )

  function getAssetQuantity(id: number) {
    return assetBasket.find(item => item.asset.id === id)?.count || 0
  }

  function getAssetPrise(item: IAsset) {
    return (getAssetQuantity(item.id) * item.price) || 0
  }

  const totalPrise = assetBasket.reduce(
    (total:number = 0, item: IAssetByBasket) => (item.count * item.asset.price) + total,
    0
  )

    function increaseAssetQuantity(item: IAsset) {
      setAssetBasket (curAssetBasket => {
      if (curAssetBasket.find(asset => item.id === asset.asset.id) == undefined) {
        return [...curAssetBasket, { asset:item, count: 1 } ]
       } 
        else {
          return curAssetBasket.map (asset => {
                        if (asset.asset.id === item.id) { 
                          return { ...asset, count: asset.count + 1 }
                        } else {
                          return asset
                        }
                      })

      }})
    }

    function decreaseAssetQuantity(item: IAsset) {
      setAssetBasket (curAssetBasket => {
      if (curAssetBasket.find(asset => item.id === asset.asset.id)?.count === 1) {
        return curAssetBasket.filter(asset => asset.asset.id !== item.id)
       } 
        else {
          return curAssetBasket.map (asset => {
                        if (asset.asset.id === item.id) { 
                          return { ...asset, count: asset.count - 1 }
                        } else {
                          return asset
                        }
                      })

      }})
    }

  
    function removeFromBasket(id: number) {
      setAssetBasket(currItems => {
        return currItems.filter(asset => asset.asset.id !== id)
      })
    }
  

  return (
    <BasketContext.Provider
      value={{
        increaseAssetQuantity,
        decreaseAssetQuantity,
        removeFromBasket,
        getAssetPrise,
        assetQuantity,
        totalPrise,
        assetBasket}}> 
      {children}
    </BasketContext.Provider>
      
  )
}
