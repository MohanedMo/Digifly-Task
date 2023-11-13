import { configureStore } from '@reduxjs/toolkit'
import servicesStatusSlice from './slices/servicesStatusSlice'
import certificateStatus from './slices/certificateStatus'
import fieldsStatus from './slices/fieldsStatus'
import menuStatus from './slices/menuStatus'

export const store = configureStore({
  reducer: {
    serviceStatus : servicesStatusSlice,
    certificateStatus: certificateStatus,
    fieldStatus: fieldsStatus,
    menuStatus: menuStatus,
  },
})