import { set } from "zod"
import { StateCreator } from "zustand"
import { FavoritesSliceType } from "./favoritesSlice"

type Notification= {
    text: string
    show: boolean
    error: boolean
    
}

export type NotificationSliceType = {
    notification: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    closeNotification:()=>void 
}

export const createNotificationSlice: StateCreator<NotificationSliceType & FavoritesSliceType, [],[], NotificationSliceType> =(set,get)=>({
    notification: {
        text: 'Notificacion',
        show: false,
        error: false
    }, 
    showNotification: (payload) => {
        set({
            notification:{
                text: payload.text,
                error: payload.error,
                show: true
            }})
            setTimeout(()=>{
                get().closeNotification()
            },3000)
    },
    closeNotification:() =>{
        set({
            notification:{
                text:'',
                show:false,
                error:true

            }
        })
    }
})